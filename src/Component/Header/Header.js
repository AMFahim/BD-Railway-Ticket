import React from 'react';
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
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Destination</a>
        <a className="nav-link" href="#">Blog</a>
        <a className="nav-link" href="#">Contact</a>
        <a className="nav-link" href="#"><button className="btn btn-warning">Sign In</button></a>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Header;