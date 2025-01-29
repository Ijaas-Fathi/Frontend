import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct hook for navigation in React Router v6+

// A mock function to check if the user is logged in
//const checkLoggedIn = () => {
  // Replace with actual login check logic (e.g., checking localStorage or context)
  //return localStorage.getItem('isLoggedIn') === 'true';
//};

const Enrollment = () => {
  const [student_id, setStudent_id] = useState('');
  const [course_id, setCourse_id] = useState('');
  const [enrollment_date, setEnrollment_date] = useState('');
  const [completion_status, setCompletion_status] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!checkLoggedIn()) {
      navigate('/login');
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      student_id,
      course_id,
      enrollment_date,
      completion_status,
    });
  };

  return (
    <div className="container">
      <h2 className="text-center" style={{ color: "#2a5298", fontWeight: "bold" }}>
        Enrollment Form
      </h2>

      {isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="student_id">Student ID:</label>
            <input
              type="text"
              id="student_id"
              className="form-control"
              value={student_id}
              onChange={(e) => setStudent_id(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="course_id">Tutorial ID:</label>
            <input
              type="text"
              id="course_id"
              className="form-control"
              value={course_id}
              onChange={(e) => setCourse_id(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="enrollment_date">Enrollment Date:</label>
            <input
              type="date"
              id="enrollment_date"
              className="form-control"
              value={enrollment_date}
              onChange={(e) => setEnrollment_date(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="completion_status">Completion Status:</label>
            <select
              id="completion_status"
              className="form-control"
              value={completion_status}
              onChange={(e) => setCompletion_status(e.target.value)}
              required
            >
              <option value="">Select Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Not Started">Not Started</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit Enrollment
          </button>
        </form>
      ) : (
        <div className="text-center">
          <p>Please log in to access the enrollment page.</p>
        </div>
      )}
    </div>
  );
};

export default Enrollment;
