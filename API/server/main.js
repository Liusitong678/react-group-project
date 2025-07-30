const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
require('dotenv').config({ path: 'env.env' });

const {
  dbConnect,
  dbGetEmployees,
  dbAddEmployee,
  dbUpdateEmployee,
  dbDeleteEmployee,
  dbGetEmployeeById,
} = require('./db');

const app = express();
app.use(express.static('public'));

// Custom scalar type for Date values
const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'A custom scalar to handle Date values',
  serialize: value => value.toISOString(),
  parseValue: value => new Date(value),
  parseLiteral: ast => new Date(ast.value),
});

// GraphQL type definitions (schema)
const typeDefs = `#graphql
  scalar GraphQLDate

  type Employee {
    _id: ID!
    firstName: String!
    lastName: String!
    dateOfBirth: GraphQLDate
    age: Int          
    dateOfJoining: GraphQLDate!
    title: String!
    department: String!
    employeeType: String!
    currentStatus: Int!
  }

  input EmployeeInput {
    firstName: String!
    lastName: String!
    dateOfBirth: GraphQLDate
    dateOfJoining: GraphQLDate!
    title: String!
    department: String!
    employeeType: String!
  }

  input EmployeeUpdateInput {
    title: String
    department: String
    currentStatus: Int
  }

  type Query {
    employeeList: [Employee!]!
    employee(id: ID!): Employee
  }

  type Mutation {
    employeeAdd(employee: EmployeeInput!): Employee!
    employeeUpdate(id: ID!, changes: EmployeeUpdateInput!): Employee!
    employeeDelete(id: ID!): Boolean!
  }
`;

const resolvers = {
  Query: {
    // Return all employees, and calculate age if not present
    employeeList: async () => {
      const list = await dbGetEmployees();
      return list.map(emp => {
        if (emp.age === undefined && emp.dateOfBirth) {
          const dob = new Date(emp.dateOfBirth);
          const today = new Date();
          let age = today.getFullYear() - dob.getFullYear();
          const m = today.getMonth() - dob.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
          }
          emp.age = age;
        }
        return emp;
      });
    },

    // Return one employee by ID, and calculate age if needed
    employee: async (_, { id }) => {
      const emp = await dbGetEmployeeById(id);
      if (!emp) return null;

      if (emp.age === undefined && emp.dateOfBirth) {
        const dob = new Date(emp.dateOfBirth);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
          age--;
        }
        emp.age = age;
      }

      return emp;
    },
  },

  Mutation: {
    employeeAdd: async (_, { employee }) => await dbAddEmployee(employee),
    employeeUpdate: async (_, { id, changes }) => await dbUpdateEmployee(id, changes),
    employeeDelete: async (_, { id }) => await dbDeleteEmployee(id),
  },

  GraphQLDate,
};

// Start Apollo GraphQL server
const server = new ApolloServer({ typeDefs, resolvers });
const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
const port = process.env.API_PORT || 3000;

server.start().then(() => {
  server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
  dbConnect(); // Connect to MongoDB
  app.listen(port, () => {
    console.log(` Server running at http://localhost:${port}${server.graphqlPath}`);
  });
});
