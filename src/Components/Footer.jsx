import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscriber Email:", email);
      setMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <footer
      className="border-top border-dark border-5 py-4"
      style={{ backgroundColor: "#2F4F4F" }}
    >
      <div className="container">
        <div className="row">
        <div className="col-md-4 text-white mb-3">
          <h5 className="fw-bold">Feel free to reach out for any queries or assistance.
          </h5>
          <p className="fs-6">
            <strong>Phone:</strong> +1 (234) 567-8900 <br />
            <strong>Email:</strong> contact@learnloop.com <br />
            <strong>Address:</strong> 123, Learn Loop St, New York, USA <br />
            <strong>Hotline:</strong> +1 (800) 123-4567 <br />
          </p>
        </div>
          <div className="col-md-4 text-white text-center mb-3" style={{borderLeft: '3px solid #fff'}}>
            <h5 className="fw-bold">Follow Us</h5>

            <div className="d-flex justify-content-center align-items-center mb-2">
              <a
                href="https://facebook.com"
                className="fs-5 text-primary mx-3"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="fs-5 text-danger mx-3"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="fs-5 text-info mx-3"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} />
              </a>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <a
                  href="https://linkedin.com"
                  className="fs-5 text-primary mx-3"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" style={{ fontSize: "24px" }}></i>
                </a>
                <a
                  href="https://youtube.com"
                  className="fs-5 text-danger mx-3"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube" style={{ fontSize: "24px" }}></i>
                </a>
                <a
                  href="https://wa.me/1234567890" 
                  className="fs-5 text-success mx-3"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp" style={{ fontSize: "24px" }}></i>
                </a>
              </div></div>

          <div className="col-md-4 text-white text-right" style={{borderLeft: '3px solid #fff'}}>
            <h5 className="fw-bold">Subscribe to Our Newsletter</h5>
            <form onSubmit={handleSubmit} className="mt-4 text-right" style={{width: '100%'}}>
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary btn-sm">
                Subscribe
              </button>
            </form>
            {message && <p className="mt-2 fs-6">{message}</p>}
          </div>
        </div>
        <p className="text-center fs-6 text-white mt-3 mb-0 fw-normal">
          © 2024 Learn Loop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
