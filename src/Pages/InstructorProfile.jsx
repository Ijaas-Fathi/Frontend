import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const InstructorProfile = () => {
  const [instructorData, setInstructorData] = useState({});
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "Instructor") {
      navigate("/login");
      return;
    }

    const fetchInstructorData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/instructor/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setInstructorData(data.instructor);
          setCourses(data.courses);
        } else {
          setError("Failed to fetch instructor data.");
        }
      } catch (error) {
        setError("Error fetching instructor data.");
        console.error("Error fetching instructor data", error);
      }
    };

    fetchInstructorData();
  }, [navigate]);

  const handleUploadTutorial = () => {
    navigate("/UploadTutorialPage");
  };

  return (
    <div className="min-h-screen d-flex flex-column align-items-center justify-content-center bg-light">
      <h1 className="text-center mb-5" style={{ fontFamily: "Montserrat", color: "#2E8A99" }}>
        INSTRUCTOR PROFILE
      </h1>

      <div className="p-5 rounded-lg shadow-lg w-100 max-w-4xl bg-light d-flex flex-column flex-lg-row">
        {error && <div className="alert alert-danger w-100">{error}</div>}

        {/* Left Section - Full Name, Username, Bio */}
        <div className="d-flex flex-column align-items-start text-left w-50 p-4">
         
          <h2 className="text-2xl font-bold">{instructorData.fullName}</h2>
          <p><strong>Username:</strong> {instructorData.username}</p>
          <p><strong>Email:</strong> {instructorData.email}</p>
          <p className="mt-3">
            <strong>Description:</strong> {instructorData.bio || "Experienced educator guiding students through the world of technology."}
          </p>
          <button className="btn btn-primary mt-4" onClick={handleUploadTutorial}>
            Upload Tutorial
          </button>
        </div>

        <div className="border-start border-dark mx-3"></div>

        {/* Right Section - Uploaded Courses */}
        <div className="w-50 p-4">
          <h3 className="text-lg font-bold mb-3">Uploaded Course Details: </h3>
          {courses.length > 0 ? (
            <div className="row">
              {courses.map((course, index) => (
                <div key={index} className="col-12 mb-4">
                  <div className="card">
                    <img
                      src={course.coverImage || "https://via.placeholder.com/300"}
                      className="card-img-top"
                      alt={course.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{course.title}</h5>
                      <p className="card-text">{course.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No courses uploaded yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
