import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const InstructorProfile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#84A7A6" }}>
      <motion.div 
        className="p-5 rounded-lg shadow-lg text-white w-full max-w-md mx-auto"
        style={{ backgroundColor: "#2E8A99" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.img 
            src="https://via.placeholder.com/120" 
            alt="Profile" 
            className="rounded-full mb-4 border-4 border-white mx-auto"
            style={{ width: "120px", height: "120px" }}
            whileHover={{ scale: 1.1 }}
          />
          <h2 className="text-2xl font-bold">Dr. Smith</h2>
          <p className="text-sm opacity-80">drsmith@instructor.com</p>
        </div>
        <p className="mt-4 text-center text-lg">Experienced educator guiding students through the world of technology.</p>
      </motion.div>
    </div>
  );
};

export default InstructorProfile;
