import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import stu1 from "../assets/Images/stu1.png";
import { FaSignOutAlt } from "react-icons/fa";

const StudentProfile = () => {
  const [username, setUsername] = useState(""); // State to hold the username

  useEffect(() => {
    // Get the username from localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username"); 
    window.location.href = "/"; 
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl relative">
        <button
          className="absolute btn btn-danger d-flex align-items-center"
          style={{ marginLeft: '1150px', marginTop: '5px' }}
          onClick={handleLogout}
        >
          <FaSignOutAlt className="me-2" /> Logout
        </button>

        <h2 className="text-2xl fw-bold mb-6" style={{ textAlign: 'center', color: '#0E2954', fontSize: '40px' }}>
          USER PROFILE
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
            <p className="mb-4"><strong>Username:</strong> {username || "Not logged in"}</p>
          </div>
        </div>
        <a href="/Tutorials">
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-dark mt-2 mb-3 text-light"
              onClick={() => handleEnrollCourse(1)}
            >
              Enroll New Course
            </button>
          </div>
        </a>

      </div>
    </div>
  );
};

export default StudentProfile;
