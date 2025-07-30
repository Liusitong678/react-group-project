import React from 'react';
import homeBanner from '../images/home.jpg';

export default function Home() {
  return (
    <div className="container-fluid py-5">
      <div className="d-flex flex-column align-items-center" >
        <div className="card shadow-lg border-0" style={{ maxWidth: '950px' }}>
          <img
            src={homeBanner}
            className="card-img-top img-fluid"
            alt="Home Banner"
            style={{ maxHeight: '450px', objectFit: 'cover' }}
          />
          <div className="card-body text-center">
            <h2 className="card-title text-primary">Employee Management System</h2>
            <p className="card-text mt-3" style={{ fontSize: '1.2rem' }}>
              Easily manage your employees' information, roles, and status with our intuitive system.
            </p>
            <a href="#/employees" className="btn btn-primary mt-3 px-4 py-2">
              View Employees
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
