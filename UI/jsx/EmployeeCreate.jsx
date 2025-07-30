import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class EmployeeCreate extends React.Component {
  constructor(props) {
    super(props);
    const d = props.initialData || {};
    this.state = {
      firstName: d.firstName || '',
      lastName: d.lastName  || '',
      dateOfBirth: d.dateOfBirth ? d.dateOfBirth.slice(0, 10) : '',
      dateOfJoining: d.dateOfJoining ? d.dateOfJoining.slice(0, 10) : '',
      title: d.title || 'Employee',
      department: d.department || 'IT',
      employeeType: d.employeeType || 'FullTime',
      currentStatus: d.currentStatus ?? 1,
      errors: {},
      touched: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur   = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleBlur(e) {
    const { name } = e.target;
    this.setState(prev => ({ touched: { ...prev.touched, [name]: true } }), this.validate);
  }

  // input validation
  validate = () => {
    const { isEdit } = this.props;
    const { firstName, lastName, dateOfBirth, dateOfJoining } = this.state;
    const errors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const today = new Date().toISOString().split('T')[0];

    if (!isEdit) {
      // First Name validation
      if (!firstName.trim()) {
        errors.firstName = 'First name is required.';
      } else if (firstName.trim().length < 2) {
        errors.firstName = 'First name must be at least 2 characters.';
      } else if (!nameRegex.test(firstName.trim())) {
        errors.firstName = 'First name can only contain letters and spaces.';
      }

      // Last Name validation
      if (!lastName.trim()) {
        errors.lastName = 'Last name is required.';
      } else if (lastName.trim().length < 2) {
        errors.lastName = 'Last name must be at least 2 characters.';
      } else if (!nameRegex.test(lastName.trim())) {
        errors.lastName = 'Last name can only contain letters and spaces.';
      }

      // Date of Birth validation
      if (!dateOfBirth) {
        errors.dateOfBirth = 'Date of birth is required.';
      } else if (dateOfBirth > today) {
        errors.dateOfBirth = 'Date of birth cannot be in the future.';
      }

       // Date of Joining validation
      if (!dateOfJoining) {
        errors.dateOfJoining = 'Date of joining is required.';
      } else if (dateOfJoining > today) {
        errors.dateOfJoining = 'Date of joining cannot be in the future.';
      } else if (dateOfBirth && dateOfJoining < dateOfBirth) {
        errors.dateOfJoining = 'Joining date must be after date of birth.';
      }
    }

    this.setState({ errors });
    return errors;
  };

  handleSubmit(e) {
    e.preventDefault();
    const { isEdit, onSubmit } = this.props;
    const errors = this.validate();

    if (!isEdit && Object.keys(errors).length > 0) {
      this.setState({
        touched: {
          firstName: true,
          lastName: true,
          dateOfBirth: true,
          dateOfJoining: true
        },
      });
      return;
    }
    // edit mode
    if (isEdit) {
      const { title, department, currentStatus } = this.state;
      onSubmit({ title, department, currentStatus: parseInt(currentStatus, 10) });
    } else {
      // add mode
      const {
        firstName, lastName, dateOfBirth, dateOfJoining,
        title, department, employeeType,
      } = this.state;
      onSubmit({
        firstName: firstName.trim(),
        lastName:  lastName.trim(),
        dateOfBirth,
        dateOfJoining,
        title,
        department,
        employeeType,
      });
    }
  }

  render() {
    const { isEdit = false, onCancel } = this.props;
    const {
      firstName, lastName, dateOfBirth, dateOfJoining,
      title, department, employeeType, currentStatus,
      errors, touched,
    } = this.state;

    const invalid = (name) => touched[name] && !!errors[name];

    return (
      <Modal show onHide={onCancel} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? 'Edit Employee' : 'Add New Employee'}</Modal.Title>
        </Modal.Header>

        <Form onSubmit={this.handleSubmit}>
          <Modal.Body>
            {/* First Name */}
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name<span style={{color:'red'}}> *</span></Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                disabled={isEdit}
                isInvalid={invalid('firstName')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Last Name */}
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name<span style={{color:'red'}}> *</span></Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                disabled={isEdit}
                isInvalid={invalid('lastName')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Date of Birth */}
            <Form.Group className="mb-3" controlId="dateOfBirth">
              <Form.Label>Date of Birth<span style={{color:'red'}}> *</span></Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                disabled={isEdit}
                isInvalid={invalid('dateOfBirth')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.dateOfBirth}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Date of Joining */}
            <Form.Group className="mb-3" controlId="dateOfJoining">
              <Form.Label>Date of Joining<span style={{color:'red'}}> *</span></Form.Label>
              <Form.Control
                type="date"
                name="dateOfJoining"
                value={dateOfJoining}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                disabled={isEdit}
                isInvalid={invalid('dateOfJoining')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.dateOfJoining}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Employee Type (Add only) */}
            {!isEdit && (
              <Form.Group className="mb-3" controlId="employeeType">
                <Form.Label>Employee Type<span style={{color:'red'}}> *</span></Form.Label>
                <Form.Select
                  name="employeeType"
                  value={employeeType}
                  onChange={this.handleChange}
                >
                  <option value="FullTime">FullTime</option>
                  <option value="PartTime">PartTime</option>
                  <option value="Contract">Contract</option>
                  <option value="Seasonal">Seasonal</option>
                </Form.Select>
              </Form.Group>
            )}

            {/* Title */}
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title<span style={{color:'red'}}> *</span></Form.Label>
              <Form.Select name="title" value={title} onChange={this.handleChange}>
                <option value="Employee">Employee</option>
                <option value="Manager">Manager</option>
                <option value="Director">Director</option>
                <option value="VP">VP</option>
              </Form.Select>
            </Form.Group>

            {/* Department */}
            <Form.Group className="mb-3" controlId="department">
              <Form.Label>Department<span style={{color:'red'}}> *</span></Form.Label>
              <Form.Select
                name="department"
                value={department}
                onChange={this.handleChange}
              >
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
                <option value="Engineering">Engineering</option>
                <option value="Finance">Finance</option>
                <option value="Operations">Operations</option>
              </Form.Select>
            </Form.Group>

            {/* Status field (edit mode only) */}
            {isEdit && (
              <Form.Group className="mb-2" controlId="currentStatus">
                <Form.Label>Status<span style={{color:'red'}}> *</span></Form.Label>
                <Form.Select
                  name="currentStatus"
                  value={currentStatus}
                  onChange={this.handleChange}
                >
                  <option value={1}>Active</option>
                  <option value={0}>Inactive</option>
                </Form.Select>
              </Form.Group>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onCancel}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {this.props.isEdit ? 'Save' : 'Confirm'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default EmployeeCreate;
