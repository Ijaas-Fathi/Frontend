import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseStatus, setResponseStatus] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactFormResponse", JSON.stringify(formData));

    setResponseStatus("Your message has been submitted and saved!");
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container py-5">
      <h1
        className="text-center mb-4"
        style={{
          background: "linear-gradient(to right, #1e3c72, #2a5298)", // Gradient for the heading
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
        }}
      >
        Contact Us
      </h1>
      <p className="text-center mb-5" style={{ color: "#333" }}>
        Have any questions? Reach out to us and we’ll get back to you as soon as possible.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="contact-info mb-4 p-4 rounded shadow-sm" style={{ background: "linear-gradient(to right, #6dd5ed, #2193b0)" }}>
            <h3 className="text-white">Get in Touch</h3>
            <p className="text-white">Email: <a href="mailto:info@tutorialapp.com" className="text-white">info@tutorialapp.com</a></p>
            <p className="text-white">Phone: <a href="tel:+1234567890" className="text-white">+123-456-7890</a></p>
          </div>

          {responseStatus && (
            <div className="alert alert-success mb-4">
              <p>{responseStatus}</p>
            </div>
          )}

          <div className="contact-form-container p-4 rounded shadow-lg" style={{ background: "linear-gradient(to right, #a1c4fd, #c2e9fb)" }}>
            <h3 className="text-center" style={{ color: "#2a5298", fontWeight: "bold" }}>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="text-dark">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ borderColor: "#1e3c72" }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="text-dark">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ borderColor: "#1e3c72" }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="text-dark">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ borderColor: "#1e3c72" }}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-danger btn-block text-white mt-3" style={{ background: "#2a5298", borderColor: "#1e3c72" }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
