import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import stu1 from "../assets/Images/stu1.png";
import axios from "axios";

const StudentProfile = ({ userId }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch enrolled courses when the component mounts
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/students/${userId}/courses`, { withCredentials: true });
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses", error);
      }
    };

    fetchCourses();
  }, [userId]);

  const handleEnrollCourse = async (courseId) => {
    try {
      await axios.post(`http://localhost:8080/api/students/${userId}/enroll/${courseId}`, {}, { withCredentials: true });
      // Refresh courses list after enrollment
      const response = await axios.get(`http://localhost:8080/api/students/${userId}/courses`, { withCredentials: true });
      setCourses(response.data);
    } catch (error) {
      console.error("Error enrolling in course", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <motion.div
        className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        <div className="w-1/3 flex justify-left items-center p-8 text-gray-900 rounded-l-lg">
          <motion.img
            src={stu1}
            alt="Profile"
            className="rounded-lg border-4 border-white"
            style={{ marginLeft: "125px", marginTop: "15px", width: "50%", height: "50%", objectFit: "auto" }}
            whileHover={{ scale: 1.1 }}
          />
        </div>

        <div className="w-2/3 p-8 bg-[#F9F9F9] rounded-r-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">User Profile</h2>
          <div className="bg-[#F1F0EB] p-4 rounded-lg text-gray-900">
            <p className="mb-4"><strong>Full Name:</strong> John Doe</p>
            <p className="mb-4"><strong>Username:</strong> johndoe123</p>
            <p className="mb-4"><strong>Email:</strong> johndoe@student.com</p>
          </div>

          <h3 className="text-xl font-semibold mt-6">Enrolled Courses</h3>
          {courses.length > 0 ? (
            <ul className="list-group mb-4">
              {courses.map((course) => (
                <li key={course.id} className="list-group-item">
                  {course.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No enrolled courses yet.</p>
          )}

          <motion.button
            className="mt-1 mb-5 text-red-600 font-semibold hover:underline"
            whileHover={{ scale: 1.1 }}
            style={{ backgroundColor: 'black', color: 'white' }}
          >
            Edit Profile →
          </motion.button>

          <button
            className="btn btn-primary mt-3"
            onClick={() => handleEnrollCourse(1)} 
          >
            Enroll New Course
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentProfile;
