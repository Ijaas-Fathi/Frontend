import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import stu1 from "../assets/Images/stu1.png";

const StudentProfile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <motion.div
        className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center" 
            style={{marginTop: '100px', marginTop: '70px', fontWeight: 'bold'}}>User Profile</h2>
        {/* Left Section - Profile Picture */}
        <div className="w-1/3 flex justify-left items-center p-8 text-gray-900 rounded-l-lg">
          <motion.img
            src={stu1}
            alt="Profile"
            className="rounded-lg border-4 border-white"
            style={{marginLeft: '125px', marginTop: '15px', width: "50%", height: "50%", objectFit: "auto" }}
            whileHover={{ scale: 1.1 }}
          />
        </div>

        {/* Right Section - User Details */}
        <div className="w-2/3 p-8 bg-[#F9F9F9] rounded-r-lg text-center">
          <div className="bg-[#F1F0EB] p-4 rounded-lg text-gray-900">
            <p className="mb-4"><strong>Full Name:</strong> John Doe</p>
            <p className="mb-4"><strong>Username:</strong> johndoe123</p>
            <p className="mb-4"><strong>Email:</strong> johndoe@student.com</p>
          </div>

          {/* Edit Profile Button */}
          <motion.button
            className="mt-1 mb-5 text-red-600 font-semibold hover:underline flex items-center"
            whileHover={{ scale: 1.1 }}
            style={{ backgroundColor: 'black', color: 'white' }}
          >
            Edit Profile →
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentProfile;
