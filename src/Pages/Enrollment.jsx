import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 

// A mock function to check if the user is logged in
const checkLoggedIn = () => {
  // Replace with actual login check logic (e.g., checking localStorage or context)
  return localStorage.getItem('isLoggedIn') === 'true';
};

const Enrollment = () => {
  const [studentId, setStudentId] = useState('');
  const [tutorialId, setTutorialId] = useState('');
  const [enrollmentDate, setEnrollmentDate] = useState('');
  const [completionStatus, setCompletionStatus] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // Check if the user is logged in on component mount
    if (!checkLoggedIn()) {
      // Redirect to login page if not logged in
      history.push('/login');
    } else {
      setIsLoggedIn(true);
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic (e.g., send the data to an API or update state)
    console.log({
      studentId,
      tutorialId,
      enrollmentDate,
      completionStatus,
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
            <label htmlFor="studentId">Student ID:</label>
            <input
              type="text"
              id="studentId"
              className="form-control"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tutorialId">Tutorial ID:</label>
            <input
              type="text"
              id="tutorialId"
              className="form-control"
              value={tutorialId}
              onChange={(e) => setTutorialId(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="enrollmentDate">Enrollment Date:</label>
            <input
              type="date"
              id="enrollmentDate"
              className="form-control"
              value={enrollmentDate}
              onChange={(e) => setEnrollmentDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="completionStatus">Completion Status:</label>
            <select
              id="completionStatus"
              className="form-control"
              value={completionStatus}
              onChange={(e) => setCompletionStatus(e.target.value)}
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
