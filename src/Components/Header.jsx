import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header
      className="border-bottom border-secondary border-5 shadow-sm"
      style={{
        backgroundColor: '#154360',
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div
            className="d-flex align-items-center justify-content-center mx-auto"
            style={{
              background: 'linear-gradient(45deg, #85C1E9, #2874A6, #1F618D, #154360)', 
              borderRadius: '15px',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', 
              width: '30%', 
              borderLeft: '3px solid #fff',
              borderRight: '3px solid #fff', 
            }}
          >
            <h1
              className="text-uppercase fw-bold text-center"
              style={{
                fontFamily: "'Pacifico', cursive", 
                letterSpacing: '2px',
                fontSize: '2.5rem',
                color: '#fff',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', 
                display: 'inline-block', 
                padding: '10px 20px',
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
                className="nav-link text-white fs-6 fw-semibold mx-2"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                  borderRight: '3px solid #fff',
                  
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
                className="nav-link text-white fs-6 fw-semibold mx-2"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                  borderRight: '3px solid #fff', 

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
                className="nav-link text-white fs-6 fw-semibold mx-2"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                  borderRight: '3px solid #fff', 

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
                className="nav-link text-white fs-6 fw-semibold mx-2"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                  borderRight: '3px solid #fff', 

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
                  className="btn btn-light text-dark fw-bold fs-6 px-3 mx-2"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    textTransform: 'uppercase',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease', 
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = 'dark';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#d0d3d4'; 
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
