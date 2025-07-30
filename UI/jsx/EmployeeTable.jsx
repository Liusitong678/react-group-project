import React from 'react';
import EmployeeRow from './EmployeeRow.jsx';

const EmployeeTable = ({ employeeInfo, startIndex = 0, onEdit, onDelete }) => {
  const rows = employeeInfo.map((item, idx) => (
    <EmployeeRow
      employee={{ ...item, index: startIndex + idx }}
      key={item._id || item.firstName + item.lastName + (startIndex + idx)}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  ));

  return (
    <table className="table table-bordered table-hover align-middle">
      <thead className="table-primary">
        <tr>
          <th>No.</th>
          <th>First</th>
          <th>Last</th>
          <th>Age</th>
          <th>Date</th>
          <th>Title</th>
          <th>Dept</th>
          <th>Type</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default EmployeeTable;
