import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-top border-dark border-5 bg-secondary text-black py-4">
      <div className="container text-center">
        <p className="fs-6 text-white mt-3 mb-4 fw-normal">© 2024 Learn Loop. All rights reserved.</p>
        <div className="d-flex justify-content-center align-items-center">
          <a href="https://facebook.com" className="fs-5 text-primary mx-3" aria-label="Facebook" target="-blank">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" className="fs-5 text-danger mx-3" aria-label="Instagram" target="-blank">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com" className="fs-5 text-info mx-3" aria-label="Twitter" target="-blank">
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="fs-6 text-white mt-3 mb-4 fw-normal">Follow us on social media for updates and offers!</p>
      </div>
    </footer>
  );
}

export default Footer;
