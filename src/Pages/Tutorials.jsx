import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Tutorials = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Use for navigation

  useEffect(() => {
    fetch("http://localhost:8080/api/videos")  
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#84A7A1' }}>
      <h1 className="display-4 fw-bold text-center mb-4" style={{ color: '#000' }}>
        Our Tutorials
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div className="col" key={video._id}>
              <div className="card shadow-sm h-100 border-0"
                style={{
                  backgroundColor: "#F5FFFA",
                  color: "#333",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img
                  src={video.coverImageUrl}
                  alt={video.title}
                  className="card-img-top"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color: "#0E2954", fontWeight: "bold" }}>
                    {video.title}
                  </h5>
                  <p className="card-text" style={{ color: "#000", fontWeight: "bold" }}>
                    {video.description}
                  </p>
                  <p className="card-text" style={{ color: "#000", fontWeight: "bold" }}>
                    Price: ${video.price}
                  </p>
                  <button
                    className="btn btn-outline-primary mt-3"
                    style={{ fontWeight: "bold" }}
                    onClick={() => navigate(`/player/${video._id}`, { state: { video } })}
                  >
                    View Tutorial
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col text-center">
            <h5 className="text-dark">No tutorials available</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tutorials;
