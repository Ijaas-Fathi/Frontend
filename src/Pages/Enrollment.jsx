import React, { useState } from 'react';

const Enrollment = () => {
  const [student_id, setStudent_id] = useState('');
  const [course_id, setCourse_id] = useState('');
  const [enrollment_date, setEnrollment_date] = useState('');
  const [completion_status, setCompletion_status] = useState('');

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

      <div
        className="form-container"
        style={{
          backgroundColor: '#84A7A1',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
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
      </div>
    </div>
  );
};

export default Enrollment;
