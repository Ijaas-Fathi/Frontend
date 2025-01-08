import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header
      className="border-bottom border-secondary border-5 shadow-sm"
      style={{
        backgroundColor: '#2F4F4F',
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div
            className="d-flex align-items-center justify-content-center mx-auto"
            style={{
              borderRadius: '15px',
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
                textShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)', 
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
            <form className='d-flex' style={{flex: 1, marginLeft: '260px'}}>
            <input 
              type='text'
              className='form-control'
              placeholder='Search here...'
              style={{
                borderWidth: '3px',
                borderRadius: '15px',
                marginLeft: '10px',
                width: '200px',
              }}
              />
              <button
              type='submit'
              className='btn fw-bold'
              style={{borderRadius: '15px', width: '100px', backgroundColor: '#66e0ec', borderWidth: '#2f6064'}} >Search</button>
          </form>
        </nav>
      </div>
    </header>
  );
}

export default Header;
