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
            className="text-center mb-4"
            style={{
              background: "linear-gradient(to right, #1e3c72, #2a5298)", 
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              color: "#fff", 
            }}
          >
            Our Tutorials
          </h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {tutorials.map((tutorial) => (
              <div className="col" key={tutorial.id}>
                <div
                  className="card shadow-lg h-100 border-0"
                  style={{
                    background: "linear-gradient(to bottom, #1e3c72, #2a5298)", 
                    color: "#fff", 
                    borderRadius: "15px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
                 }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)'; 
                    e.target.style.opacity = '0.9'; 
                    e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)'; 
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)'; 
                    e.target.style.opacity = '1'; 
                    e.target.style.boxShadow = 'none'; 
                  }}
                >
                  <div className="card-body text-center">
                    <h5
                      className="card-title text-white"
                      style={{
                        background: "linear-gradient(to right, #2c3e50, #3498db)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "bold",
                        color: "#fff", 
                      }}
                    >
                      {tutorial.title}
                    </h5>
                    <p
                      className="card-text"
                      style={{
                        background: "linear-gradient(to right, #6dd5ed, #2193b0)", 
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "bold",
                        color: "#fff", 
                      }}
                    >
                      Click to learn more about this tutorial.
                    </p>
                    <Link
                      to={`/tutorials/${tutorial.id}`}
                      className="btn btn-light mt-3"
                      style={{
                        background: "linear-gradient(to right, #0f2027, #2c5364)", 
                        color: "#fff", 
                        fontWeight: "bold",
                        border: "none",
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