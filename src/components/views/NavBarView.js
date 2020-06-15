import React from 'react';
import './styles/NavBarView.css';
import { Link } from 'react-router-dom';

const NavBarView = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        ttpCRUD
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/campuses" className="nav-item nav-link">
            Campuses
          </Link>
          <Link to="/students" className="nav-item nav-link">
            Students
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBarView;
