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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate saving the form data (e.g., store in local storage or send to backend)
    localStorage.setItem("contactFormResponse", JSON.stringify(formData));

    // Update response status
    setResponseStatus("Your message has been submitted and saved!");

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center mb-5">
        Have any questions? Reach out to us and we’ll get back to you as soon as possible.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Contact Info */}
          <div className="contact-info mb-4">
            <h3>Get in Touch</h3>
            <p>Email: <a href="mailto:info@tutorialapp.com">info@tutorialapp.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+123-456-7890</a></p>
          </div>

          {/* Response Status */}
          {responseStatus && (
            <div className="alert alert-success">
              <p>{responseStatus}</p>
            </div>
          )}

          {/* Contact Form */}
          <div className="contact-form-container">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block mt-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
