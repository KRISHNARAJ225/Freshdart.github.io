import React from 'react';

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid ms-3">

      
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
                  <span className="visually-hidden">unread messages</span>
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
                <li><a className="dropdown-item" href="#">Please Type your needs..</a></li>
              </ul>
            </li>

          </ul>


           <li className="nav-item">
              <button type="button" className="btn btn-primary position-relative ms-5 border-danger">
                Profile
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </button>
            </li>

          <form className="d-flex ms-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Look for..!"
              aria-label="Search"
            />
            <button className="btn btn-outline-success mx-3" type="submit">
              Search
            </button>
          </form>

        </div>
      </nav>
    </div>
  );
}

export default Home;