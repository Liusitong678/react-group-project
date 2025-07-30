import React from 'react';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home.jsx';
import EmployeeDirectory from './EmployeeDirectory.jsx';
import EmployeeDetail from './EmployeeDetail.jsx';
import UpcomingRetirement from './UpcomingRetirement.jsx'; 
import NotFound from './NotFound.jsx';

export default function Page() {
  return (
    <div className="layout">
      <header className="header">
        <h1 style={{ margin: 0 }}>Employee Management System</h1>
      </header>

      <div className="content-area">
        <aside className="sidebar">
          <nav className="nav flex-column">
            <NavLink end to="/home" className="nav-link">Home</NavLink>
            <NavLink end to="/employees" className="nav-link">Employees</NavLink>
            <NavLink end to="/upcoming" className="nav-link">Upcoming Retirement</NavLink> 
          </nav>
        </aside>

        <main className="main">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/employees" element={<EmployeeDirectory />} />
            <Route path="/employees/:id" element={<EmployeeDetail />} />
            <Route path="/upcoming" element={<UpcomingRetirement />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
