import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import back from '../assets/Images/background.png';

const Login = () => {
  const [role, setRole] = useState(''); // Role selection: Student or Instructor
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (!resetEmail) {
      setError('Please enter your email address to reset your password');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(resetEmail)) {
      setError('Invalid email address');
      return;
    }

    setError('');
    alert(`Password reset link sent to ${resetEmail}`);
    setShowForgotPassword(false);
  };

  const handleNewPassword = (e) => {
    e.preventDefault();

    if (!newPassword) {
      setError('Please enter a new password');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password should be at least 6 characters long');
      return;
    }

    setError('');
    alert('Password has been reset successfully!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Validation
    if (!role) {
      setError('Please select a role (Student or Instructor)');
      return;
    }

    if (!email || !password) {
      setError('Please fill out all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }

    setError('');
    console.log(`Role: ${role}, Form Submitted:`, formData);
    alert(`Login successful as ${role}`);
  };

  return (
    <div className="d-flex position-relative flex-column min-vh-100">
      {/* Background */}
      <div
        className="position-absolute top-5 left-0 w-100 h-100"
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          zIndex: -1,
        }}
      ></div>
      <h1 className="bg-dark text-white text-center py-3 fw-normal">Login here to Enroll Courses</h1>
      {/* Main content */}
      <main className="flex-grow-1 d-flex justify-content-center align-items-center" style={{opacity: 0.7}}>
        <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '500px', borderRadius: '20px' }}>
          <div className="card-header bg-dark text-white text-center fs-3 fw-bold py-3">
            Select Role
          </div>
          <div className="card-body bg-light py-4">
            <div className="mb-4">
              <label className="form-label fw-bold">Are you a Student or an Instructor?</label>
              <select
                className="form-select"
                value={role}
                onChange={handleRoleChange}
                required
              >
                <option value="">Select a role</option>
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
              </select>
            </div>

            {role && (
              <>
                <h3 className="text-center mb-4 text-dark fw-bold">Login as {role}</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 fw-bold">
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
                  <div className="mb-3 fw-bold">
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
                  <button type="submit" className="btn btn-primary fs-5 fw-bold w-100">
                    Login
                  </button>
                </form>
                <div className="text-center fs-5 fw-bold mt-3">
                  <p>
                    Don't have an account? <a href="/Registration">Sign up</a>
                  </p>
                  <p>
                    <button
                      className="btn btn-link p-0 text-primary"
                      onClick={() => setShowForgotPassword(true)}
                    >
                      Forgot Password?
                    </button>
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="card-footer text-center bg-dark text-white py-3">
            <small>Powered by LearnLoop</small>
          </div>
        </div>
      </main>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Forgot Password</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowForgotPassword(false)}
                ></button>
              </div>
              <div className="modal-body">
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleForgotPassword}>
                  <div className="mb-3">
                    <label htmlFor="resetEmail" className="form-label">
                      Enter your email
                    </label>
                    <input
                      type="email"
                      id="resetEmail"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Reset Link
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
