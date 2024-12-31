import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header
      className="border-bottom border-secondary border-5 py-3 shadow-sm"
      style={{
        backgroundColor: '#154360', 
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <h1
            className="text-white text-uppercase fw-bold"
            style={{
              fontFamily: "'Helvetica', sans-serif",
              letterSpacing: '1.5px',
              fontSize: '3rem',
            }}
          >
            LEARN LOOP
          </h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a
                href="/"
                className="nav-link text-white fs-5 fw-semibold mx-2"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#007bff')}
                onMouseLeave={(e) => (e.target.style.color = 'dark')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/about"
                className="nav-link text-white fs-5 fw-semibold mx-2"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#007bff')}
                onMouseLeave={(e) => (e.target.style.color = 'dark')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/tutorials"
                className="nav-link text-white fs-5 fw-semibold mx-2"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#007bff')}
                onMouseLeave={(e) => (e.target.style.color = 'dark')}
              >
                Tutorials
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/contact"
                className="nav-link text-white fs-5 fw-semibold mx-2"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#007bff')}
                onMouseLeave={(e) => (e.target.style.color = 'dark')}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
                <a
                  href="/login"
                  className="btn btn-warning text-dark fw-bold fs-5 px-3 mx-2"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    textTransform: 'uppercase',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease', // Smooth transition for hover effect
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = 'dark';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#ffc107'; // Bootstrap warning color
                    e.target.style.color = 'white';
                  }}
                >
                  Login
                </a>
              </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
