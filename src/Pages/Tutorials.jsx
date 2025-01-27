import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Tutorials = () => {
  const tutorials = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Advanced React" },
    { id: 3, title: "React with TypeScript" },
    { id: 4, title: "Entrepreneurship 101" },
    { id: 5, title: "Financial Management for Businesses" },
    { id: 6, title: "Machine Learning Basics" },
    { id: 7, title: "Cybersecurity Essentials" },
    { id: 8, title: "Graphic Design Fundamentals" },
    { id: 9, title: "Digital Illustration Masterclass" },
    { id: 10, title: "Yoga for Beginners" },
    { id: 11, title: "Strength Training Essentials" },
  ];

  return (
    <div className="container-fluid py-5">
        <h1
        className="display-4 fw-bold text-center mb-4 text-dark" style={{backgroundColor: '#5DC4B3', padding: '5px', borderRadius: '15px'}}>
        Our Tutorials
        </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {tutorials.map((tutorial) => (
          <div className="col" key={tutorial.id}>
            <div
              className="card shadow-sm h-100 border-0"
              style={{
                backgroundColor: "#F5FFFA", 
                color: "#333", 
                borderRadius: "15px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <div className="card-body text-center">
                <h5
                  className="card-title"
                  style={{
                    color: "#2F4F4F", 
                    fontWeight: "bold",
                  }}
                >
                  {tutorial.title}
                </h5>
                <p
                  className="card-text"
                  style={{
                    color: "#6c757d", 
                    fontWeight: "bold",
                  }}
                >
                  Click to learn more about this tutorial.
                </p>
                <Link
                  to={`/tutorials/${tutorial.id}`}
                  className="btn btn-outline-white mt-3"
                  style={{
                    color: "#008B8B", 
                    borderColor: "#008B8B", 
                    fontWeight: "bold",
                  }}
                >
                  View Tutorial
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Tutorials;
