import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Table, Button, Spinner } from 'react-bootstrap';

export default function EmployeeDetail() {
  const { id } = useParams();
  const [emp, setEmp] = useState(null);

  useEffect(() => {
    const query = `
      query ($id: ID!) {
        employee(id: $id) {
          firstName lastName age dateOfJoining
          title department employeeType currentStatus
        }
      }`;
    
    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { id } })
    })
      .then(res => res.json())
      .then(data => {
        console.log('detail response', data);
        setEmp(data.data.employee);
      });
  }, [id]);

  if (!emp) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
        <Spinner animation="border" role="status" variant="primary" />
        <span className="ms-2">Loading...</span>
      </div>
    );
  }

  return (
    <Container className="my-4">
      <Card>
        <Card.Header as="h4">
          {emp.firstName} {emp.lastName}
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <tbody>
              {Object.entries({
                Age: emp.age,
                'Date of Joining': new Date(emp.dateOfJoining).toLocaleDateString(),
                Title: emp.title,
                Department: emp.department,
                Type: emp.employeeType,
                Status: emp.currentStatus === 1 ? 'Active' : 'Inactive',
              }).map(([k, v]) => (
                <tr key={k}>
                  <th style={{ width: '40%' }}>{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="secondary" as={Link} to="/employees">
            ← Back to Employee List
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
