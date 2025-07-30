const { MongoClient, ObjectId } = require('mongodb');

const DB_URL = 'mongodb+srv://sitong:sitong@cluster0.cbslt.mongodb.net/staffManagementSystem?retryWrites=true&w=majority';
let db;

// 连接数据库
async function dbConnect() {
  if (db) return db;
  const client = await MongoClient.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db();
  return db;
}

// 获取所有员工
async function dbGetEmployees() {
  return await db.collection('employees').find({}).toArray();
}

// 根据 ID 获取员工
async function dbGetEmployeeById(id) {
  const d = await dbConnect();
  return d.collection('employees').findOne({ _id: ObjectId(id) });
}

// 添加新员工（自动计算年龄）
async function dbAddEmployee(employee) {
  employee.currentStatus = 1;

  // 自动计算年龄
  if (employee.dateOfBirth) {
    const birthDate = new Date(employee.dateOfBirth);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    employee.age = age;
  }

  await db.collection('employees').insertOne(employee);
  return employee;
}

// 更新员工信息
async function dbUpdateEmployee(id, changes) {
  const d = await dbConnect();
  const { value } = await d.collection('employees').findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: changes },
    { returnDocument: 'after' }
  );
  return value;
}

// 删除员工（仅限于非激活）
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
