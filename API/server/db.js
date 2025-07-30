const { MongoClient, ObjectId } = require('mongodb');

const DB_URL = 'mongodb+srv://sitong:sitong@cluster0.cbslt.mongodb.net/staffManagementSystem?retryWrites=true&w=majority';
let db;

// Connect to MongoDB
async function dbConnect() {
  if (db) return db;
  const client = await MongoClient.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db();
  return db;
}

// Fetch all employees from the collection
async function dbGetEmployees() {
  return await db.collection('employees').find({}).toArray();
}

// Find one employee by ID
async function dbGetEmployeeById(id) {
  const d = await dbConnect();
  return d.collection('employees').findOne({ _id: ObjectId(id) });
}

// Add a new employee 
async function dbAddEmployee(employee) {
  employee.currentStatus = 1;

  // Auto-calculate age from date of birth
  if (employee.dateOfBirth) {
    const birthDate = new Date(employee.dateOfBirth);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    employee.age = age;
  }

  await db.collection('employees').insertOne(employee);
  return employee;
}

// Update employee record
async function dbUpdateEmployee(id, changes) {
  const d = await dbConnect();
  const { value } = await d.collection('employees').findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: changes },
    { returnDocument: 'after' }
  );
  return value;
}

// Delete an employee (only allowed if status is inactive)
async function dbDeleteEmployee(id) {
  const d = await dbConnect();
  const emp = await db.collection('employees').findOne({ _id: ObjectId(id) });
  if (!emp) throw new Error('Employee not found');
  if (emp.currentStatus === 1) throw new Error("CAN'T DELETE EMPLOYEE - STATUS ACTIVE");

  const { deletedCount } = await db.collection('employees').deleteOne({ _id: ObjectId(id) });
  return deletedCount === 1;
}

module.exports = {
  dbConnect,
  dbGetEmployees,
  dbAddEmployee,
  dbUpdateEmployee,
  dbDeleteEmployee,
  dbGetEmployeeById,
};
