import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar nav">
          <Link className="nav-link nav-item navbar-brand" to="/">Vidly</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/info">Info</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/profile">Profile</Link>
        </div>
      </div>
    </nav>
  );
}
