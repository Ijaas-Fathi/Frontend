import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="border-bottom border-warning border-5 bg-info text-dark py-2">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <h1 className="display-4 text-center text-dark mt-3 mb-4 fw-bold">Tutorial App</h1>
        
        {/* Navigation */}
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a href="/login" className="nav-link fs-5 text-dark mt-3 mb-4 fw-bold">Login</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link fs-5 text-dark fw-bold mt-3 mb-4">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link fs-5 text-dark fw-bold mt-3 mb-4">About</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link fs-5 text-dark fw-bold mt-3 mb-4">Contact</a>
            </li>
            <li className="nav-item">
              <a href="/tutorials" className="nav-link fs-5 text-dark fw-bold mt-3 mb-4">Tutorials</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
