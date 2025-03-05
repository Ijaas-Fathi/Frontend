import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const video = location.state?.video; // Get video details from state

  if (!video) {
    return <div className="text-center py-5">Video not found!</div>;
  }

  return (
    <div className="container py-5">
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back to Tutorials
      </button>
      <div className="card shadow-lg p-3 border-0" style={{ backgroundColor: "#F5FFFA" }}>
        <h2 className="text-center" style={{ color: "#0E2954", fontWeight: "bold" }}>
          {video.title}
        </h2>
        <p className="text-center" style={{ color: "#333", fontWeight: "bold" }}>
          {video.description}
        </p>
        <video width="100%" height="500px" controls autoPlay>
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Player;
