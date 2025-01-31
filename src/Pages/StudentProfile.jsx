import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentProfile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <motion.div 
        className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <div className="w-1/3 bg-[#A3A28F] flex flex-col items-center justify-center p-8 text-gray-900 rounded-l-lg">
          <motion.img 
            src="https://via.placeholder.com/150" 
            alt="Profile" 
            className="rounded-lg border-4 border-white mb-4"
            style={{ width: "140px", height: "180px", objectFit: "cover" }}
            whileHover={{ scale: 1.1 }}
          />
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-sm opacity-80">Los Angeles, CA</p>
        </div>

        <div className="w-2/3 p-10 bg-[#F9F9F9] rounded-r-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">User Profile</h2>
          <div className="bg-[#F1F0EB] p-4 rounded-lg text-gray-900">
            <p className="mb-2"><strong>Full Name:</strong> John Doe</p>
            <p className="mb-2"><strong>Username:</strong> johndoe123</p>
            <p className="mb-2"><strong>Email:</strong> johndoe@student.com</p>
          </div>
          
          <motion.button 
            className="mt-5 text-red-600 font-semibold hover:underline flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            Edit Profile →
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentProfile;
