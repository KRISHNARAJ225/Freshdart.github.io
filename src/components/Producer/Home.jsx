import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

// IMPORTANT: Also add this in src/main.jsx (once, globally) for dropdown + carousel to work
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark **sticky-top**">
        <div className="container-fluid">        
          <a className="navbar-brand ms-3" href="#">FreshDart</a>
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
                <button type="button" className="btn btn-primary position-relative ms-5 border-danger">
                  Home
                  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>
                </button>
              </li>

              <li className="nav-item">
                <button type="button" className="btn btn-primary position-relative ms-5">
                  Order
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                  </span>
                </button>
              </li>

              <li className="nav-item">
                <button type="button" className="btn btn-primary position-relative ms-5 border-danger">
                  Products
                  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>
                </button>
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
                  <li><a className="dropdown-item" href="#">Vegetables</a></li>
                  <li><a className="dropdown-item" href="#">Fruits</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Other..</a></li>
                </ul>
              </li>
            </ul>

     
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Profile
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     Please , Login To Use The Features..!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Go Back</button>
        <button type="button" class="btn btn-primary">Login</button>
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

    </>
  );
}

export default Home;