import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import reactBasic from '../assets/Images/reactBasic.png';
import advReact from '../assets/Images/advReact.png';
import tsReact from '../assets/Images/tsReact.png';
import ent from '../assets/Images/enterpreneur.png';
import fin from '../assets/Images/finance.png';
import ml from '../assets/Images/machine.png';
import cyber from "../assets/Images/cyber.png";
import graphic from "../assets/Images/graphic.png";
import digital from "../assets/Images/digital.png";
import yoga from "../assets/Images/yoga.png";
import strength from "../assets/Images/strength.png";

const Tutorials = () => {
  const tutorials = [
    { id: 1, title: "React Basics", image: reactBasic },
    { id: 2, title: "Advanced React", image: advReact },
    { id: 3, title: "React with TypeScript", image: tsReact },
    { id: 4, title: "Entrepreneurship 101", image: ent },
    { id: 5, title: "Financial Management for Businesses", image: fin },
    { id: 6, title: "Machine Learning Basics", image: ml },
    { id: 7, title: "Cybersecurity Essentials", image: cyber },
    { id: 8, title: "Graphic Design Fundamentals", image: graphic },
    { id: 9, title: "Digital Illustration Masterclass", image: digital },
    { id: 10, title: "Yoga for Beginners", image: yoga },
    { id: 11, title: "Strength Training Essentials", image: strength },
  ];

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#84A7A1' }}>
      <h1 className="display-4 fw-bold text-center mb-4" style={{ padding: '5px', borderRadius: '15px', color: '#000' }}>
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
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={tutorial.image}
                alt={tutorial.title}
                className="card-img-top"
                style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: "#0E2954", fontWeight: "bold" }}>
                  {tutorial.title}
                </h5>
                <p className="card-text" style={{ color: "#000", fontWeight: "bold" }}>
                  Click to learn more about this tutorial.
                </p>
                <Link
                  to={`/tutorials/${tutorial.id}`}
                  className="btn btn-outline-white mt-3"
                  style={{ color: "#2E8A99", borderColor: "#2E8A99", fontWeight: "bold" }}
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
