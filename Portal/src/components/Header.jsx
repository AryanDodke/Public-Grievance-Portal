import React from 'react';
import '../css/header.css';

function Header() {
  const headerStyle = {
    position: 'relative',
  };

  const topRightButtonsStyle = {
    position: 'absolute',
    top: '17.5px',
    right: '10px',
    display: 'flex',
    gap: '15px',
  };

  const topLeftButtonsStyle = {
    position: 'absolute',
    top: '17.5px',
    left: '10px', 
    display: 'flex',
    gap: '15px',
  };

  return (
    <header style={headerStyle}>
      <div className="top-left-buttons" style={topLeftButtonsStyle}>
        <a href='/'>Home</a>
        <a href='/about'> About</a>
        <a href='/team'> Team</a>
        <a href='/contact'> Contact</a>
        <a href='/portfolio'> Our Websites</a>
      </div>
      <div className="top-right-buttons" style={topRightButtonsStyle}>
        <a href="/Login">Login</a>
        <a href="/Signup">Signup</a>
        {/* <a href="/Grievance">Grievance</a>  
        <a href="/Admin_login">Admin</a> */}
      </div>
    </header>
  );
}

export default Header;
