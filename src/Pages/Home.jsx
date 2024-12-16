import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from "../assets/Images/image1.png";
import image2 from '../assets/Images/image2.png'; 

const Home = () => (
  <div className="home">
    {/* Hero Section */}
    <div className="hero-section text-center bg-light py-5">
      <h1 className="display-4 fw-bold">Unlock Your Potential Here!!!</h1>
      <p className="lead">You can learn from top instructors across a wide range of subjects and enhance your skills by accessing thousands of online courses. 
        These courses are designed to cater to various learning levels, from beginners to advanced learners. 
        By enrolling in these courses, you get the opportunity to learn at your own pace, acquire new knowledge, and stay updated with the latest industry trends and technologies. 
        Whether you're looking to improve your professional skills, explore new hobbies, or advance in your career, 
        these courses provide valuable resources and insights from experienced educators and experts in the field..</p>
      <button className="btn btn-primary btn-lg"><a className='text-white' href='/Tutorials'>Browse Courses</a></button>
    </div>

    {/* Categories Section */}
    <div className="categories-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Popular Categories</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="category bg-primary text-white text-center py-3 rounded">Business</div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="category bg-success text-white text-center py-3 rounded">Technology</div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="category bg-info text-white text-center py-3 rounded">Art & Design</div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div className="category bg-warning text-white text-center py-3 rounded">Health & Fitness</div>
          </div>
        </div>
      </div>
    </div>

    {/* Featured Section */}
    <div className="featured-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Featured Courses</h2>
        <div className="row">
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card mb-3 shadow">
          <a href='CourseDetails'><img src={image1} className="card-img-top" alt="React for Beginners" /></a>
            <div className="card-body">
              <h5 className="card-title">React for Beginners</h5>
              <p className="card-text">
                Learn the fundamentals of React and start building modern web applications.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card mb-3 shadow">
            <a href='CourseDetails'><img src={image2} className="card-img-top" alt="Mastering Photoshop" /></a>
            <div className="card-body">
              <h5 className="card-title">Mastering Photoshop</h5>
              <p className="card-text">
                Enhance your design skills with this comprehensive Photoshop course.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
);

export default Home;
