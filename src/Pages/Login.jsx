import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginback from '../assets/Images/loginback.png';

const Login = () => {
  const [role, setRole] = useState(''); // Role selection: Student or Instructor
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // Validation
    if (!role) {
      setError('Please select a role (Student or Instructor)');
      return;
    }

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    setError('');

    try {
      // Make a POST request to the backend
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
        },
        body: JSON.stringify({
          username,
          password,
          role,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();

      // Handle successful login
      if (data.token) {
        // Store the token and username in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', username); // Store the username

        // Navigate based on role
        if (role === 'Instructor') {
          navigate('/InstructorProfile');
        } else {
          navigate('/StudentProfile');
        }
      } else {
        throw new Error('Login failed. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="d-flex position-relative flex-column min-vh-100" style={{ backgroundImage: `url(${loginback})` }}>
      <h1 className="bg-dark text-white text-center py-3 fw-normal" style={{ marginTop: '50px' }}>Login here...</h1>

      {/* Main content */}
      <main className="flex-grow-1 d-flex justify-content-center align-items-center" style={{ opacity: 0.9 }}>
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
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="username"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter the username"
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
