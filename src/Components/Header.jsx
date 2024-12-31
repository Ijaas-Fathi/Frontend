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
        <div
            className="d-flex align-items-center justify-content-center py-5 mx-auto"
            style={{
              background: 'linear-gradient(135deg,rgb(190, 57, 119),rgb(153, 44, 77),rgb(117, 24, 41))', // Cute gradient background
              borderRadius: '15px', // Rounded corners
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Subtle shadow
              width: '30%', // Custom width
            }}
          >
            <h1
              className="text-uppercase fw-bold text-center"
              style={{
                fontFamily: "'Pacifico', cursive", // Playful font
                letterSpacing: '2px',
                fontSize: '2.5rem',
                color: '#fff',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Text shadow for depth
                display: 'inline-block', // Ensures the border wraps tightly around the text
                padding: '10px 20px', // Adds space inside the border
                borderLeft: '3px solid #fff', // Adds border to the left
                borderRight: '3px solid #fff', // Adds border to the right
              }}
            >
              Learn Loop
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
                  className="btn btn-light text-dark fw-bold fs-5 px-3 mx-2"
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
                    e.target.style.backgroundColor = '#d0d3d4'; // Bootstrap warning color
                    e.target.style.color = 'dark';
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
