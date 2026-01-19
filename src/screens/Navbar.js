import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ backgroundColor: '#293462' }}>
      <div className="container">
        <Link className='navbar-brand' to='/'>
          <img className="me-2" height="50" width="50" alt="abc" src={`${process.env.PUBLIC_URL}/logo.jpg`} />
        </Link>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link mx-2" href="#!" style={{ color: '#F24C4C' }}>
                <i className="fas fa-plus-circle pe-2" style={{ color: '#F24C4C' }}></i>Add Posts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#!" style={{ color: '#EC9B3B' }}>
                <i className="fas fa-bell pe-2" style={{ color: '#EC9B3B' }}></i>Community
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="#!" style={{ color: '' }}>
                <i className="fas fa-heart pe-2" style={{ color: '' }}></i>Trip Planner
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="" style={{ color: '#293462' }}>
                <i className="bi bi-geo-alt-fill" style={{ color: '#293462' }}></i>GeoLocation
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="btn btn-rounded" to="/login" style={{ backgroundColor: '#F24C4C', color: '#FFF' }}>Sign in</Link> {/* Background and text color adjusted */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
