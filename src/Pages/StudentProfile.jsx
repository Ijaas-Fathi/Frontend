import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import stu1 from "../assets/Images/stu1.png";
import axios from "axios";
import { FaSignOutAlt } from "react-icons/fa";

const StudentProfile = ({ studentId }) => {
  const [courses, setCourses] = useState([]);
  const [studentInfo, setStudentInfo] = useState({
    fullName: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    // Fetch enrolled courses and student info when the component mounts
    const fetchData = async () => {
      try {
        // Fetch student courses
        const coursesResponse = await axios.get(`http://localhost:8080/api/students/${studentId}/courses`, { withCredentials: true });
        setCourses(coursesResponse.data);

        // Fetch student details (name, username, email)
        const studentResponse = await axios.get(`http://localhost:8080/api/students/${studentId}`, { withCredentials: true });
        setStudentInfo({
          fullName: studentResponse.data.fullName,
          username: studentResponse.data.username,
          email: studentResponse.data.email,
        });
      } catch (error) {
        console.error("Error fetching student data or courses", error);
      }
    };

    fetchData();
  }, [studentId]);

  const handleEnrollCourse = async (courseId) => {
    try {
      await axios.post(`http://localhost:8080/api/students/${studentId}/enroll/${courseId}`, {}, { withCredentials: true });
      // Refresh courses list after enrollment
      const response = await axios.get(`http://localhost:8080/api/students/${studentId}/courses`, { withCredentials: true });
      setCourses(response.data);
    } catch (error) {
      console.error("Error enrolling in course", error);
    }
  };

  const handleLogout = () => {
    window.location.href = "/"; // Redirect to home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary mt-4">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl relative">
        <button
          className="absolute btn btn-danger d-flex align-items-center" style={{ marginLeft: "1150px", marginTop: "5px" }}
          onClick={handleLogout}
        >
          <FaSignOutAlt className="me-2" /> Logout
        </button>

        <h2 className="text-2xl fw-bold mb-6" style={{ textAlign: "center", color: "#0E2954", fontSize: "40px" }}>
          STUDENT PROFILE
        </h2>

        <div className="w-1/3 flex justify-left items-center p-8 text-gray-900 rounded-l-lg">
          <img
            src={stu1}
            alt="Profile"
            className="rounded-lg border-4 border-white"
            style={{ marginLeft: "500px", marginTop: "15px", width: "25%", height: "25%", objectFit: "auto" }}
          />
        </div>

        <div className="w-2/3 p-8 bg-[#F9F9F9] rounded-r-lg text-center">
          <div className="bg-[#F1F0EB] p-4 rounded-lg text-gray-900">
            <p className="mb-4"><strong>Full Name:</strong> {studentInfo.fullName}</p>
            <p className="mb-4"><strong>Username:</strong> {studentInfo.username}</p>
            <p className="mb-4"><strong>Email:</strong> {studentInfo.email}</p>
          </div>

          <h3 className="text-xl font-semibold mt-6">Enrolled Courses</h3>
          {courses.length > 0 ? (
            <ul className="list-group mb-4">
              {courses.map((course) => (
                <li key={course._id} className="list-group-item">
                  {course.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No enrolled courses yet.</p>
          )}

          <a href="/Tutorials">
            <button
              className="btn btn-dark mt-2 mb-3 text-light"
              onClick={() => handleEnrollCourse(1)} // Pass the courseId dynamically
            >
              Enroll New Course
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;  