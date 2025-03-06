import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const InstructorProfile = () => {
  const [instructorData, setInstructorData] = useState({});
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstructorData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/instructor/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        className="p-5 rounded-lg shadow-lg w-full max-w-md mx-auto"
        style={{ backgroundColor: "#84A7A1", color: "black", textAlign: "left" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}
        <div>
          <motion.img
            src={instructorData.profileImage || "https://via.placeholder.com/120"}
            alt="Profile"
            className="rounded-full mb-4 border-4 border-dark"
            style={{ width: "120px", height: "120px" }}
            whileHover={{ scale: 1.1 }}
          />
          <h2 className="text-2xl font-bold">Full Name: {instructorData.fullName}</h2>
          <p>{instructorData.email}</p>
        </div>
        <p className="mt-4 text-lg fs-4">
          Description: {instructorData.bio || "Experienced educator guiding students through the world of technology."}
        </p>
        <div className="mt-5">
          <h3 className="text-lg font-bold mb-3">Uploaded Course Details: </h3>
          {courses.length > 0 ? (
            <ul className="list-group">
              {courses.map((course, index) => (
                <li key={index} className="list-group-item bg-light text-dark mb-2">
                  {course.title} - {course.description}
                </li>
              ))}
            </ul>
          ) : (
            <p>No courses uploaded yet.</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default InstructorProfile;
