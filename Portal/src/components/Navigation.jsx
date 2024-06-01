import React from 'react';
import '../css/Navigation.css';

function Navigation() {
  return (
    <nav className="navbar templatemo-nav" role="navigation">
      <div className="container text-center">
        <a href="/login" className="navbar-brand" style={{ fontWeight: 'bold' }}>
          Public Grievance Portal
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
