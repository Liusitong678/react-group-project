import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeRow = ({ employee, onEdit, onDelete }) => {
  const {
    index, _id,
    firstName, lastName, age, dateOfJoining,
    title, department, employeeType, currentStatus,
  } = employee;

  const statusMap = { 0: 'Inactive', 1: 'Active' };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <Link to={`/employees/${_id}`} className="text-decoration-none text-primary">
          {firstName}
        </Link>
      </td>
      <td>{lastName}</td>
      <td>{age ?? '-'}</td> 
      <td>{new Date(dateOfJoining).toLocaleDateString()}</td>
      <td>{title}</td>
      <td>{department}</td>
      <td>{employeeType}</td>
      <td>
        <span className={`badge ${currentStatus === 1 ? 'bg-success' : 'bg-secondary'}`}>
          {statusMap[currentStatus]}
        </span>
      </td>
      <td>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-sm btn-outline-primary"
            onClick={() => onEdit && onEdit(employee)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDelete && onDelete(_id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeRow;
