import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from './Contact'

function Home() { 
const [showModal, setShowModal] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand ms-3" to="/">
            FreshDart    
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav d-flex align-items-center gap-3 me-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `btn btn-primary position-relative ms-5 ${isActive ? 'border-danger' : ''}`
                  }
                >
                  Home
                  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/orders"
                  className={({ isActive }) =>
                    `btn btn-primary position-relative ms-5 ${isActive ? 'border-danger' : ''}`
                  }
                >
                  Orders
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                  </span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `btn btn-primary position-relative ms-5 ${isActive ? 'border-danger' : ''}`
                  }
                >
                  Products
                  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>
                </NavLink>
              </li>

             
<li className="nav-item dropdown ms-5">
  <a
    className="nav-link dropdown-toggle btn btn-outline-danger rounded-pill"
    href="#"
    id="navbarDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Categories
  </a>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li>
      <Link className="dropdown-item" to="/products">
        Vegetables
      </Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/products">
        Fruits
      </Link>
    </li>
    <li><hr className="dropdown-divider" /></li>
    <li>
      <Link className="dropdown-item" to="/products">
        Other..
      </Link>
    </li>
  </ul>
  </li>           
  </ul>
 
<button 
  type="button" 
  className="btn btn-primary me-3" 
  onClick={() => setShowModal(true)}
>
  Profile
</button>

<div 
  className={`modal fade ${showModal ? 'show d-block' : ''}`} 
  id="exampleModal" 
  tabIndex="-1" 
  aria-labelledby="exampleModalLabel" 
  aria-hidden={!showModal}
  onClick={(e) => {
    if (e.target === e.currentTarget) setShowModal(false); // Close on backdrop click
  }}
  style={{ backgroundColor: showModal ? 'rgba(0,0,0,0.5)' : 'transparent' }}
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header bg-primary">
        <h5 className="modal-title" id="exampleModalLabel">Profile</h5>
        <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
      </div>
      <div className="modal-body bg-white">
        Please Login To Access More Features..!
      </div>
      <div className="modal-footer bg-dark">
        <button type="button" className="btn btn-danger" onClick={() => setShowModal(false)}>Close</button>
        <button type="button" className="btn btn-success">Login</button> {/* Add your login logic here later if needed */}
      </div>
    </div>
  </div>
</div>
            <form className="d-flex ms-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Look for..!"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container py-5 text-center">
        <h1 className="display-4">Welcome to FreshDart</h1>
        <p className="lead">Fresh from nearby farms – delivered with trust</p>
      </div>
    </>
  )
}

export default Home;