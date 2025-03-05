import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Tutorials = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/videos")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
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
        {courses.map((course) => (
          <div className="col" key={course._id}>
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
                src={course.coverImageUrl}
                alt={course.title}
                className="card-img-top"
                style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: "#0E2954", fontWeight: "bold" }}>
                  {course.title}
                </h5>
                <p className="card-text" style={{ color: "#000", fontWeight: "bold" }}>
                  {course.description}
                </p>
                <p className="card-text" style={{ color: "#000", fontWeight: "bold" }}>
                  Price: ${course.price}
                </p>
                <Link
                  to={`/tutorials/${course._id}`}
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
