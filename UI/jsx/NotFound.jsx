import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../images/datanull.png';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', paddingTop: 40 }}>
      <img src={notFoundImg} alt="404 Not Found" style={{ maxWidth: 320, width: '80%' }} />
      <h2 style={{ color: '#343a40', marginTop: 24 }}>Oops! This page doesn’t exist…</h2>
      <Link to="/home">
        <button style={{ marginTop: 16 }}>Back to Home</button>
      </Link>
    </div>
  );
}
