import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import back from '../assets/Images/background.png';

const Registration = () => {
  const [role, setRole] = useState(''); // Role selection: Student or Instructor
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    bio: '', // Instructor specific
  });
  const [error, setError] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setError(''); // Clear any previous errors
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      first_name,
      last_name,
      email,
      username,
      password,
      confirmPassword,
      bio,
    } = formData;

    // Validation
    if (!role) {
      setError('Please select a role (Student or Instructor)');
      return;
    }

    if (
      !first_name ||
      !last_name ||
      !email ||
      !username ||
      !password ||
      !confirmPassword ||
      (role === 'Instructor' && (!bio || rating === 0))
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
    const submissionData = { ...formData, rating };
    console.log(`Registration Successful for ${role}:`, submissionData);
    alert(`Registration Successful as ${role}!`);
  };

  return (
    <div className="d-flex position-relative flex-column min-vh-100">
      {/* Background */}
      <div
        className="position-absolute top-0 left-0 w-100 h-100"
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          zIndex: -1,
        }}
      ></div>
      <header className="text-white text-center py-3 shadow-lg">
        <h2>Welcome to the Registration Page</h2>
      </header>
      <div className="d-flex justify-content-center align-items-center flex-grow-1 fw-bold">
        <div className="card shadow-lg bg-light p-4 rounded" style={{ width: '100%', maxWidth: '600px', opacity: 0.7}}>
          <h1 className="text-center mb-4">Registration</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Select Role</label>
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
                  <label htmlFor="first_name" className="form-label">First Name</label>
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
                  <label htmlFor="last_name" className="form-label">Last Name</label>
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
                  <label htmlFor="email" className="form-label">Email</label>
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
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your preferred username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
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
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
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

                {/* Instructor-specific fields */}
                {role === 'Instructor' && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="bio" className="form-label">Bio</label>
                      <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Write a short bio about yourself"
                        rows="3"
                        required
                      ></textarea>
                    </div></>)}    
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
            </>
            )}
            <button type="submit" className="btn btn-primary fs-5 w-100 fw-bold">Register Now</button>
          </form>
          <div className="text-center fs-5 fw-bold mt-3">
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
