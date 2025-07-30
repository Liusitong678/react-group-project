// eslint-disable-next-line no-unused-vars
class EmployeeDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      employee: [],
      showModal: false // show or hidden add employee form dialog when click the add button
    };
    this.createEmployee = this.createEmployee.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }
  async loadData() {
    const query = `
        query {
          employeeList {
            firstName
            lastName
            age
            dateOfJoining
            title
            department
            employeeType
            currentStatus
          }
        }
      `;
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    });
    const result = await response.json();
    this.setState({
      employee: result.data.employeeList
    });
  }
  async createEmployee(e) {
    const mutation = `
        mutation addEmployee($employee: EmployeeInput!) {
          employeeAdd(employee: $employee) {
            firstName
          }
        }
      `;
    const variables = {
      employee: {
        firstName: e.firstName,
        lastName: e.lastName,
        age: parseInt(e.age),
        dateOfJoining: e.dateOfJoining,
        title: e.title,
        department: e.department,
        employeeType: e.employeeType
      }
    };
    await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: mutation,
        variables
      })
    });
    this.closeModal();
    this.loadData();
  }
  openModal() {
    this.setState({
      showModal: true
    });
  }
  closeModal() {
    this.setState({
      showModal: false
    });
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("h1", null, "Employee Management System"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: this.openModal,
      className: "button"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus"
    }), "\xA0Add")), /*#__PURE__*/React.createElement(EmployeeTable, {
      employeeInfo: this.state.employee
    }), this.state.showModal && /*#__PURE__*/React.createElement(EmployeeCreate, {
      onSubmit: this.createEmployee,
      onCancel: this.closeModal
    }));
  }
}

// class EmployeeSearch extends React.Component { }

// eslint-disable-next-line no-unused-vars
class EmployeeRow extends React.Component {
  render() {
    const {
      index,
      firstName,
      lastName,
      age,
      dateOfJoining,
      title,
      department,
      employeeType,
      currentStatus
    } = this.props.employee;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, index + 1), /*#__PURE__*/React.createElement("td", null, firstName), /*#__PURE__*/React.createElement("td", null, lastName), /*#__PURE__*/React.createElement("td", null, age), /*#__PURE__*/React.createElement("td", null, new Date(dateOfJoining).toLocaleDateString()), /*#__PURE__*/React.createElement("td", null, title), /*#__PURE__*/React.createElement("td", null, department), /*#__PURE__*/React.createElement("td", null, employeeType), /*#__PURE__*/React.createElement("td", null, currentStatus));
  }
}

// Displays the employee list
// eslint-disable-next-line no-unused-vars
class EmployeeTable extends React.Component {
  render() {
    const {
      employeeInfo
    } = this.props;
    const rows = employeeInfo.map((item, index) => /*#__PURE__*/React.createElement(EmployeeRow, {
      employee: {
        ...item,
        index
      },
      key: item.firstName + item.lastName + index
    }));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "No."), /*#__PURE__*/React.createElement("th", null, "FirstName"), /*#__PURE__*/React.createElement("th", null, "LastName"), /*#__PURE__*/React.createElement("th", null, "Age"), /*#__PURE__*/React.createElement("th", null, "Date of Joining"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Department"), /*#__PURE__*/React.createElement("th", null, "Employee Type"), /*#__PURE__*/React.createElement("th", null, "Current Status"))), /*#__PURE__*/React.createElement("tbody", null, rows)));
  }
}

// eslint-disable-next-line no-unused-vars
class EmployeeCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      dateOfJoining: '',
      title: 'Employee',
      department: 'IT',
      employeeType: 'FullTime',
      errors: {},
      touched: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleBlur(e) {
    const {
      name
    } = e.target;
    this.setState(prevState => ({
      touched: {
        ...prevState.touched,
        [name]: true
      }
    }), this.validate); // validate on blur
  }
  validate = () => {
    const {
      firstName,
      lastName,
      age,
      dateOfJoining
    } = this.state;
    const errors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const today = new Date().toISOString().split('T')[0];
    if (!firstName.trim()) {
      errors.firstName = 'This field is required.';
    } else if (!nameRegex.test(firstName.trim())) {
      errors.firstName = 'First name must only contain letters.';
    }
    if (!lastName.trim()) {
      errors.lastName = 'This field is required.';
    } else if (!nameRegex.test(lastName.trim())) {
      errors.lastName = 'Last name must only contain letters.';
    }
    if (!age) {
      errors.age = 'This field is required.';
    } else if (isNaN(age) || age < 20 || age > 70) {
      errors.age = 'Age must be a number between 20 and 70.';
    }
    if (!dateOfJoining) {
      errors.dateOfJoining = 'This field is required.';
    } else if (dateOfJoining > today) {
      errors.dateOfJoining = 'Date cannot be in the future.';
    }
    this.setState({
      errors
    });
    return errors;
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length > 0) {
      this.setState({
        touched: {
          firstName: true,
          lastName: true,
          age: true,
          dateOfJoining: true
        }
      });
      return;
    }
    const {
      firstName,
      lastName,
      age,
      dateOfJoining,
      title,
      department,
      employeeType
    } = this.state;
    const newEmployee = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      age: parseInt(age, 10),
      dateOfJoining,
      title,
      department,
      employeeType
    };
    this.props.onSubmit(newEmployee);
  };
  renderError(field) {
    const {
      errors,
      touched
    } = this.state;
    if (!touched[field] || !errors[field]) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'red',
        fontSize: '0.85em'
      }
    }, errors[field]);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "add_form"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form_content"
    }, /*#__PURE__*/React.createElement("h2", null, "Add New Employee"), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "firstName",
      className: "required"
    }, "First Name:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "firstName",
      onChange: this.handleChange,
      onBlur: this.handleBlur
    }), this.renderError('firstName')), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "lastName",
      className: "required"
    }, "Last Name:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "lastName",
      onChange: this.handleChange,
      onBlur: this.handleBlur
    }), this.renderError('lastName')), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "age",
      className: "required"
    }, "Age:"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "age",
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      min: "20",
      max: "70"
    }), this.renderError('age')), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "dateOfJoining",
      className: "required"
    }, "Date of Joining:"), /*#__PURE__*/React.createElement("input", {
      type: "date",
      name: "dateOfJoining",
      onChange: this.handleChange,
      onBlur: this.handleBlur
    }), this.renderError('dateOfJoining')), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "title",
      className: "required"
    }, "Title:"), /*#__PURE__*/React.createElement("select", {
      name: "title",
      onChange: this.handleChange
    }, /*#__PURE__*/React.createElement("option", {
      value: "Employee"
    }, "Employee"), /*#__PURE__*/React.createElement("option", {
      value: "Manager"
    }, "Manager"), /*#__PURE__*/React.createElement("option", {
      value: "Director"
    }, "Director"), /*#__PURE__*/React.createElement("option", {
      value: "VP"
    }, "VP"))), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "department",
      className: "required"
    }, "Department:"), /*#__PURE__*/React.createElement("select", {
      name: "department",
      onChange: this.handleChange
    }, /*#__PURE__*/React.createElement("option", {
      value: "IT"
    }, "IT"), /*#__PURE__*/React.createElement("option", {
      value: "Marketing"
    }, "Marketing"), /*#__PURE__*/React.createElement("option", {
      value: "HR"
    }, "HR"), /*#__PURE__*/React.createElement("option", {
      value: "Engineering"
    }, "Engineering"))), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "employeeType",
      className: "required"
    }, "Employee Type:"), /*#__PURE__*/React.createElement("select", {
      name: "employeeType",
      onChange: this.handleChange
    }, /*#__PURE__*/React.createElement("option", {
      value: "FullTime"
    }, "FullTime"), /*#__PURE__*/React.createElement("option", {
      value: "PartTime"
    }, "PartTime"), /*#__PURE__*/React.createElement("option", {
      value: "Contract"
    }, "Contract"), /*#__PURE__*/React.createElement("option", {
      value: "Seasonal"
    }, "Seasonal"))), /*#__PURE__*/React.createElement("div", {
      className: "form_button"
    }, /*#__PURE__*/React.createElement("button", {
      type: "submit"
    }, "Confirm"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "cancel",
      onClick: this.props.onCancel
    }, "Cancel")))));
  }
}
ReactDOM.render(/*#__PURE__*/React.createElement(EmployeeDirectory, null), document.getElementById('contents'));