import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/Images/Logo.jpg';

function Header() {
  return (
    <>
      <header
        className="border-bottom border-secondary border-5 shadow-sm"
        style={{
          backgroundColor: '#0E2954',
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '20%',
          zIndex: 100,
        }}
      >
       <div className="container d-flex justify-content-between align-items-center" style={{ maxWidth: '1200px' }}>
        {/* Logo */}
        <div className="d-flex align-items-center justify-content-center mx-auto" style={{ flex: 1 }}>
          <img
            src={logo} 
            alt="Logo"
            style={{ width: '125px', height: '100px', marginRight: '10px', borderRadius: '50px'}} 
          />
        </div>

          <nav style={{ flex: 3}}>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a href="/" className="nav-link text-white fs-6 fw-semibold mx-2">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link text-white fs-6 fw-semibold mx-2">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/tutorials" className="nav-link text-white fs-6 fw-semibold mx-2">
                  Tutorials
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link text-white fs-6 fw-semibold mx-2">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a href="/login" className="btn btn-light text-dark fw-bold fs-6 px-3 mx-2">
                  Login
                </a>
              </li>
              <li>
                <form className="d-flex" style={{ flex: 1, marginLeft: '10px' }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here..."
                    style={{
                      borderWidth: '3px',
                      borderRadius: '15px',
                      marginLeft: '10px',
                      width: '200px',
                    }}
                  />
                  <button
                    type="submit"
                    className="btn fw-bold"
                    style={{ borderRadius: '15px', width: '80px', backgroundColor: '#84A7A1', borderWidth: '2px', borderColor: '#0E2954' }}
                  >
                    Search
                  </button>
                </form>
              </li>
            </ul>
          </nav>
        </div>
        {/* Running Text at the Bottom */}
        <div
          className="running-text"
          style={{
            backgroundColor: '#1F6E8C',
            color: 'white',
            padding: '10px 0',
            width: '100%',
            height: '30%',
            overflow: 'hidden',
            position: 'center',
            fontWeight: 'bold',
          }}
        >
          <div
            className="marquee"
            style={{
              whiteSpace: 'nowrap',
              animation: 'scroll 35s linear infinite',
              fontSize: '1rem',
              fontFamily: "'Roboto', sans-serif",
              textAlign: 'center',
            }}
          >
            <span>Enhance your skills with top-notch online courses | Learn from the best instructors | Explore new topics every day | Achieve your learning goals with us!</span>
          </div>
        </div>

        <style>
          {`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
        </style>
      </header>
      <main style={{ paddingTop: '5%' }}>
      </main>
    </>
  );
}

export default Header;
