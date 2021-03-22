import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><b>BD Railway Ticket</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end for-navbar" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        <Link to="/" className="nav-link">Destination</Link>
        <Link to="/" className="nav-link">Blog</Link>
        <Link to="/" className="nav-link">Contact</Link>
        <Link to="/signin" className="nav-link"><button className="btn btn-warning">Sign In</button></Link>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Header;