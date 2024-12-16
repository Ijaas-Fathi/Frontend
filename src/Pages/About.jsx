import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => (
  <div className="container py-5">
    <div className="text-center mb-5">
      <h1 className="display-4 text-primary fw-bold">About Us</h1>
      <p className="lead text-muted fw-bold">Empowering learners worldwide by providing accessible, 
        high-quality education that breaks barriers and creates opportunities. 
        We use innovative technology to offer personalized learning experiences, catering to diverse needs. 
        Our mission is to make education a universal right, fostering a global community of empowered individuals.</p>
    </div>
    <div className="row">
      <div className="col-md-6">
        <h2 className="h3 mb-3 text-success fw-bold">Our Mission</h2>
        <p>
          Our mission is to make learning accessible to everyone by offering a wide range of tutorials and courses. 
          Whether you're a beginner or an expert, we have resources tailored to help you grow and succeed.
        </p>
      </div>
      <div className="col-md-6">
        <h2 className="h3 mb-3 text-info fw-bold">Why Choose Us?</h2>
        <ul className="list-unstyled">
          <li><i className="bi bi-check-circle text-success"></i> Expert instructors with industry experience</li>
          <li><i className="bi bi-check-circle text-success"></i> Comprehensive and up-to-date content</li>
          <li><i className="bi bi-check-circle text-success"></i> Flexible learning at your own pace</li>
          <li><i className="bi bi-check-circle text-success"></i> Community-driven learning environment</li>
        </ul>
      </div>
    </div>
    <div className="text-center mt-5">
      <h2 className="h3 mb-4 text-warning fw-bold">Join Us</h2>
      <p>
        Be a part of our growing community of learners and educators. Together, we can make knowledge accessible to all.
      </p>
      <button className="btn btn-dark btn-lg"><a className='text-white' href='/Login'>Get Started</a></button>
    </div>
  </div>
);

export default About;
