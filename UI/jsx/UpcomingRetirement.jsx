import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Retirement age threshold
const RETIREMENT_AGE = 65;
// How far in advance to check for upcoming retirements
const UPCOMING_MONTHS = 6;

const UpcomingRetirement = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const query = `query {
        employeeList {
          _id
          firstName
          lastName
          dateOfBirth
          age
          dateOfJoining
          title
          department
          employeeType
          currentStatus
        }
      }`;
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const result = await response.json();
      if (result?.data?.employeeList) {
        const today = new Date();
        // Filter employees who are retiring within the next 6 months
        const filtered = result.data.employeeList.filter((emp) => {
          if (!emp.dateOfBirth) return false;
          const dob = new Date(emp.dateOfBirth);
          const retirementDate = new Date(dob);
          retirementDate.setFullYear(retirementDate.getFullYear() + RETIREMENT_AGE);

          const sixMonthsLater = new Date(today);
          sixMonthsLater.setMonth(sixMonthsLater.getMonth() + UPCOMING_MONTHS);
          // Include only if retirement date falls within the upcoming 6 months
          return retirementDate >= today && retirementDate <= sixMonthsLater;
        });
        setEmployees(filtered);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Upcoming Retirement (Next 6 Months)</h3>
      {employees.length === 0 ? (
        <p>No upcoming retirements.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead className="table-primary">
            <tr>
              <th>No.</th>
              <th>First</th>
              <th>Last</th>
              <th>Age</th>
              <th>Date of Birth</th>
              <th>Date of Joining</th>
              <th>Title</th>
              <th>Dept</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, idx) => (
              <tr key={emp._id}>
                <td>{idx + 1}</td>
                <td>
                  <Link to={`/employees/${emp._id}`} className="text-decoration-none">
                    {emp.firstName}
                  </Link>
                </td>
                <td>{emp.lastName}</td>
                <td>{emp.age ?? '-'}</td>
                <td>{emp.dateOfBirth ? new Date(emp.dateOfBirth).toLocaleDateString() : '-'}</td>
                <td>{new Date(emp.dateOfJoining).toLocaleDateString()}</td>
                <td>{emp.title}</td>
                <td>{emp.department}</td>
                <td>{emp.employeeType}</td>
                <td>
                  <span className={`badge ${emp.currentStatus === 1 ? 'bg-success' : 'bg-secondary'}`}>
                    {emp.currentStatus === 1 ? 'Active' : 'Inactive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default UpcomingRetirement;
