import React from 'react'

import { Link } from 'react-router-dom';

function Contact() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4  mt-auto">
      <div className="container">
        <div className="row g-5">

          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold mb-4 text-success">FreshDart</h3>
            <p className="text-secondary mb-4">
              Bringing farm-fresh fruits, vegetables, grains and pulses directly from local farmers to your table. Quality you can trust.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white fs-4"><i className="bi bi-whatsapp"></i></a>
              <a href="#" className="text-white fs-4"><i className="bi bi-telegram"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-secondary text-decoration-none hover-text-white">Home</Link></li>
              <li className="mb-2"><Link to="/products" className="text-secondary text-decoration-none hover-text-white">Shop</Link></li>
              <li className="mb-2"><Link to="/categories" className="text-secondary text-decoration-none hover-text-white">Categories</Link></li>
              <li className="mb-2"><Link to="/about" className="text-secondary text-decoration-none hover-text-white">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-secondary text-decoration-none hover-text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4">Contact Us</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-3">
                <i className="bi bi-geo-alt-fill me-2 text-success"></i>
                Chennai, Tamil Nadu
              </li>
              <li className="mb-3">
                <i className="bi bi-telephone-fill me-2 text-success"></i>
                +91 98765 43210
              </li>
              <li className="mb-3">
                <i className="bi bi-envelope-fill me-2 text-success"></i>
                support@freshdart.in
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4">Send Feedback</h5>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control bg-dark text-white border-secondary"
                  rows="3"
                  placeholder="Your Message / Feedback..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Send Feedback
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-5 pt-4 border-top border-secondary">
          <div className="col-md-6 text-center text-md-start">
            <small>© {new Date().getFullYear()} FreshDart. All rights reserved.</small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <small>
              <Link to="/privacy" className="text-secondary me-3 text-decoration-none">Privacy Policy</Link>
              <Link to="/terms" className="text-secondary text-decoration-none">Terms of Service</Link>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;