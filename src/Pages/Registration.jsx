import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Registration = () => {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
    bio: '', 
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setError('');
    setSuccessMessage('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      first_name,
      last_name,
      email,
      userName,
      password,
      confirmPassword,
      bio,
    } = formData;

    if (!role) {
      setError('Please select a role (Student or Instructor)');
      return;
    }

    if (
      !first_name ||
      !last_name ||
      !email ||
      !userName ||
      !password ||
      !confirmPassword ||
      (role === 'Instructor' && !bio)
    ) {
      setError('Please fill out all required fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    setSuccessMessage('');

    const url =
      role === 'Student'
        ? 'http://localhost:8080/api/students'
        : 'http://localhost:8080/api/instructors';

    const data = {
      firstName: first_name,
      lastName: last_name,
      email,
      userName: userName,
      password,
      ...(role === 'Instructor' && { bio }),
    };

    try {
      const response = await axios.post(url, data, { withCredentials: true });
      setSuccessMessage(`Registration Successful as ${role}!`);
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        userName: '',
        password: '',
        confirmPassword: '',
        bio: '',
      });
      setRole('');
      // Optionally redirect to login or another page
      setTimeout(() => (window.location.href = '/login'), 2000);
    } catch (error) {
      setError(
        error.response?.data?.message || 'Error during registration. Please try again.'
      );
      console.error(error);
    }
  };

  return (
    <div className="d-flex position-relative flex-column min-vh-100" style={{opacity: 0.9}} >
    <p className="bg-dark text-white text-center py-3 fw-normal" style={{ marginTop: '50px' }}>
        <h2 style={{fontSize: '40px'}}>Welcome to the Registration Page</h2>
      </p>
      <div className="d-flex justify-content-center align-items-center flex-grow-1 fw-bold">
        <div
          className="card shadow-lg bg-light p-4 rounded"
          style={{ width: '100%', maxWidth: '600px'}}
        >
          <h1 className="text-center mb-3 bg-dark" style={{borderRadius: '5px', color: "white", height: '60px'}}>
            Registration</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">
                Select Role
              </label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={handleRoleChange}
                className="form-select"
                required
              >
                <option value="">Choose a role</option>
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
              </select>
            </div>
            {role && (
              <>
                <div className="mb-3">
                  <label htmlFor="first_name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="last_name" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
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
                  <label htmlFor="userName" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your username"
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
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                {role === 'Instructor' && (
                  <div className="mb-3">
                    <label htmlFor="bio" className="form-label">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Write a short bio"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                )}
                <div style={{ marginBottom: '20px', fontSize: '0.9rem' }}>
                  <input type="checkbox" id="terms" required style={{ marginRight: '10px' }} />
                  <label htmlFor="terms">
                    By signing up, you agree to our{' '}
                    <a href="/terms" target="_blank" rel="noopener noreferrer">
                      Terms of Use
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>.
                  </label>
                </div>
                <button type="submit" className="btn btn-primary fs-5 w-100 fw-bold">
                  Register Now
                </button>
            <div className="text-center fs-5 fw-bold mt-3">
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>  
            </>
            )}         
          </form>
            <div className="card-footer text-center bg-dark text-white py-3">
            <small>Powered by LearnLoop</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
