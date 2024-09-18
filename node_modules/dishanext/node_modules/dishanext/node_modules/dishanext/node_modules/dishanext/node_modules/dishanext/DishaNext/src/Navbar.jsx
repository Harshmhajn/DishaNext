import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {
  

  return (
    <header>
      <nav className="headerc">
        {/* Logo Image */}
        <a href="/" className="logo">
          <img src="/img/logo.png" className="logo-img" alt="DishaNext" />
        </a>
        {/* Navigation Menu */}
        <ul className="navmenu">
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/admin">Admin</a></li>
          <li><a href="/logout">Logout</a></li>
         <li><a href="/login">Login</a></li>
        </ul>
        {/* Navigation Icons */}
        <div className="nav-icon">
          <a href="#"><img src="./src/assets/user.png" alt="User"/></a>
        </div>
      </nav>
    </header>
  );
}
;

export default Navbar;
