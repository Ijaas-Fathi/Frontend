import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import contact from '../assets/Images/contact.png';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      console.log("Response Status:", response.status); // Log the status code
      const result = await response.json(); // Parse the response as JSON
      console.log("Backend Response:", result); // Log the response for debugging
  
      if (response.ok) {
        setResponseStatus(result); // Set success message
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setResponseStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error); // Log the error for debugging
      setResponseStatus("An error occurred. Please try again.");
    }
  };
  return (
    <div style={{ marginTop: '48px', backgroundColor: '#D1E3DF' }}>
      <div>
        <h1
          className="text-center mb-4"
          style={{
            color: "#0B2447",
            fontWeight: "bold",
          }}
        >
          Contact Details....
        </h1>
        <p className="text-center mb-5" style={{ color: "#333", fontSize: '25px' }}>
          Have any questions? Reach out to us and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img
            src={contact}
            alt="Contact"
            className="img-fluid rounded mb-4 shadow"
            style={{ marginTop: '150px', maxHeight: "300px", width: "100%", objectFit: "cover", transform: "rotate(345deg)", transition: "transform 0.5s ease" }}
          />
        </div>

        <div className="col-md-8">
          <div
            className="contact-info mb-4 p-4 rounded shadow-sm"
            style={{ background: " #8BBCC9" }}
          >
            <h3 className="fs-5 fw-bold" style={{ color: '' }}>Get in Touch</h3>
            <p className="text-dark fs-6 fw-bold">
              Email:{" "}
              <a href="mailto:info@tutorialapp.com" className="text-dark">
                info@tutorialapp.com
              </a>
            </p>
            <p className="text-dark fs-6 fw-bold">
              Phone:{" "}
              <a href="tel:+1234567890" className="text-dark">
                +123-456-7890
              </a>
            </p>
          </div>

          {responseStatus && (
            <div className="alert alert-success mb-4">
              <p>{responseStatus}</p>
            </div>
          )}

          <div
            className="contact-form-container p-4 rounded shadow-lg"
            style={{ background: " #A1C9D6" }}
          >
            <h3
              className="text-center"
              style={{ color: " #195973", fontWeight: "bold" }}
            >
              Leave us a Message✉️
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="text-dark fw-bold">
                  Name:{" "}
                </label>
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
                <label htmlFor="email" className="text-dark fw-bold">
                  Email:
                </label>
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
                <label htmlFor="message" className="text-dark fw-bold">
                  Message:
                </label>
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
              <button
                type="submit"
                className="btn btn-danger btn-block text-white mt-3 fw-bold fs-5"
                style={{ background: "#2E8A99", borderColor: "#1e3c72" }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;