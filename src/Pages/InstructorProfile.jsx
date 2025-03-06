import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import instructorImage from "../assets/Images/instructorImage.png"; 

const InstructorProfile = () => {
  const [username, setUsername] = useState(""); 

  useEffect(() => {
    // Get the username from localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  

  const handleUploadTutorial = () => {
    window.location.href = "/UploadTutorialPage"; // Navigate to the upload tutorial page
  };

  return (
    <div className="bg-white min-h-screen mt-3 flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl relative">
        <h2 className="text-2xl fw-bold mb-6" style={{ textAlign: 'center', color: '#0E2954', fontSize: '40px' }}>
          INSTRUCTOR PROFILE
        </h2>

        <div className="w-1/3 flex justify-left items-center p-8 text-gray-900 rounded-l-lg">
          <img
            src={instructorImage} 
            alt="Instructor Profile"
            className="rounded-lg border-4 border-white"
            style={{ marginLeft: "500px", marginTop: "15px", width: "25%", height: "25%", objectFit: "auto" }}
          />
        </div>

        <div className="w-2/3 p-8 bg-[#F9F9F9] rounded-r-lg text-center">
          <div className="bg-[#F1F0EB] p-4 rounded-lg text-gray-900">
            <p className="mb-4"><strong>Username:</strong> {username || "Not logged in"}</p>
          </div>

          {/* Upload Tutorial Button */}
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-dark mt-2 mb-3 text-light"
              onClick={handleUploadTutorial}
            >
              Upload Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
