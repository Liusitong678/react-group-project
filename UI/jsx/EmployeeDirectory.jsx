import React from 'react';
import EmployeeTable from './EmployeeTable.jsx';
import EmployeeCreate from './EmployeeCreate.jsx';
import { Outlet } from 'react-router-dom';

//extracts the type query parameter from the current URL when using HashRouter
function getTypeFromURL() {
  const hash = window.location.hash || '';  // '#/employees?type=FullTime'       
  const idx  = hash.indexOf('?');
  if (idx === -1) return 'All';
  const params = new URLSearchParams(hash.slice(idx + 1));
  return params.get('type') || 'All';
}

class EmployeeDirectory extends React.Component {
  constructor() {
    super();
    const initFilter = getTypeFromURL();
    this.state = {
      employee: [],
      showModal: false,
      showEditModal: false,
      editingEmp: null,
      currentPage: 1,
      pageSize: 10,
      filterType: initFilter,
    };
    this.createEmployee = this.createEmployee.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.changePage = this.changePage.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    this.loadData();
    // Monitor browser forward/backward (hash changes)
    window.addEventListener('hashchange', () => {
      const urlType = getTypeFromURL();    
      if (urlType !== this.state.filterType) {
        this.setState({ filterType: urlType, currentPage: 1 });
      }
    });
  }

  async loadData() {
    const query = `
      query {
        employeeList {
          _id
          firstName lastName dateOfBirth dateOfJoining age
          title department employeeType currentStatus
        }
      }
    `;
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const result = await response.json();
    const sorted = result.data?.employeeList?.slice()?.sort((a, b) =>
      a._id.localeCompare(b._id)
    ) || [];
    this.setState({ employee: sorted });
    
  }

  async createEmployee(e) {
    const mutation = `
      mutation addEmployee($employee: EmployeeInput!) {
        employeeAdd(employee: $employee) { _id }
      }
    `;
    const variables = {
      employee: {
        firstName: e.firstName,
        lastName: e.lastName,
        dateOfBirth: e.dateOfBirth,
        dateOfJoining: e.dateOfJoining,
        title: e.title,
        department: e.department,
        employeeType: e.employeeType,
      },
    };
    await fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: mutation, variables }),
    });
    this.closeModal();
    this.loadData();
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  async handleEditSubmit(changes) {
    const mutation = `
      mutation ($id: ID!, $changes: EmployeeUpdateInput!) {
        employeeUpdate(id: $id, changes: $changes) { _id }
      }
    `;
    const variables = {
      id: this.state.editingEmp._id,
      changes,
    };
    await fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: mutation, variables }),
    });
    this.closeEditModal();
    this.loadData();
  }

  openEditModal(emp) {
    this.setState({ showEditModal: true, editingEmp: emp });
  }

  closeEditModal() {
    this.setState({ showEditModal: false, editingEmp: null });
  }

  async handleDelete(id) {
    const query = `
      query ($id: ID!) {
        employee(id: $id) {
          currentStatus
          firstName
          lastName
        }
      }
    `;
    const res = await fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { id } }),
    });
    const result = await res.json();
    const emp = result.data.employee;

    if (emp.currentStatus === 1) {
      alert(`CAN'T DELETE EMPLOYEE - STATUS ACTIVE`);
      return;
    }

    if (!window.confirm(`Delete employee ${emp.firstName} ${emp.lastName}?`)) return;

    const mutation = `
      mutation ($id: ID!) {
        employeeDelete(id: $id)
      }
    `;
    await fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: mutation, variables: { id } }),
    });

    this.loadData();
  }

  //filter
  handleFilterChange(e) {
    const val = e.target.value;
    this.setState({ filterType: val, currentPage: 1 });
    if (val === 'All') {
      window.location.hash = '#/employees';  // Clear query string
   } else {
      window.location.hash = `#/employees?type=${val}`;
   }
  }

  //paging
  changePage(newPage) {
    this.setState({ currentPage: newPage });
  }

  render() {
    const { employee, pageSize, currentPage, showModal, showEditModal, editingEmp, filterType } = this.state;
    const filtered = filterType === 'All'? employee: employee.filter(e => e.employeeType.toLowerCase() === filterType.toLowerCase());
    const totalPages = Math.ceil(filtered.length / pageSize) || 1;
    const offset = (currentPage - 1) * pageSize;
    const pageSlice = filtered.slice(offset, offset + pageSize);

    return (
      <div className="container mt-4">
        <Outlet />
        <div className="row mb-3">
          <div className="col-md-6">
            <button onClick={this.openModal} className="btn btn-success">+ Add</button>
          </div>
          <div className="col-md-6 text-end">
            <label htmlFor="filterType" className="form-label me-2">Filter by Type:</label>
            <select
              id="filterType"
              value={filterType}
              onChange={this.handleFilterChange}
              className="form-select d-inline-block w-auto"
            >
              <option value="All">All</option>
              <option value="FullTime">FullTime</option>
              <option value="PartTime">PartTime</option>
              <option value="Contract">Contract</option>
              <option value="Seasonal">Seasonal</option>
            </select>
          </div>
        </div>

        <EmployeeTable
          employeeInfo={pageSlice}
          startIndex={offset}
          onEdit={this.openEditModal}
          onDelete={this.handleDelete}
        />

        <div className="d-flex justify-content-center align-items-center my-4">
          <button
            className="btn btn-outline-primary me-2"
            disabled={currentPage === 1}
            onClick={() => this.changePage(currentPage - 1)}
          >
            ‹ Prev
          </button>
          <span>Page {currentPage} / {totalPages}</span>
          <button
            className="btn btn-outline-primary ms-2"
            disabled={currentPage === totalPages}
            onClick={() => this.changePage(currentPage + 1)}
          >
            Next ›
          </button>
        </div>

        {showModal && (
          <EmployeeCreate
            onSubmit={this.createEmployee}
            onCancel={this.closeModal}
          />
        )}

        {showEditModal && editingEmp && (
          <EmployeeCreate
            isEdit
            initialData={editingEmp}
            onSubmit={this.handleEditSubmit}
            onCancel={this.closeEditModal}
          />
        )}
      </div>
    );
  }
}

export default EmployeeDirectory;
