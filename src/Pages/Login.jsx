import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    contact: '',
    preferredStudy: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, contact, preferredStudy } = formData;

    // Validation
    if (!email || !password || !contact || !preferredStudy) {
      setError('Please fill out all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }

    if (!/^\+?[1-9]\d{1,14}$/.test(contact)) {
      setError('Invalid contact number. Include the country code for WhatsApp.');
      return;
    }

    setError('');
    console.log('Form Submitted:', formData);
    alert('Login successful');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: '400px' }}>
        <h1 className="text-center mb-4">Login</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact Number (WhatsApp preferred)
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your WhatsApp number with country code (e.g., +1234567890)"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="preferredStudy" className="form-label">
              Preferred Field of Study
            </label>
            <select
              id="preferredStudy"
              name="preferredStudy"
              value={formData.preferredStudy}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select a field</option>
              <option value="Technology">Technology</option>
              <option value="Business">Business</option>
              <option value="Art & Design">Art & Design</option>
              <option value="Health & Fitness">Health & Fitness</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <p>
            Don't have an account? <a href="/Registration">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
