import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import image1 from "../assets/Images/image1.png";
import image2 from '../assets/Images/image2.png'; 
import { motion } from 'framer-motion';
import back1 from '../assets/Images/back1.png'; 
import back2 from '../assets/Images/back2.png'; 


const Home = () => {
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const images = [back1, back2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  
    return () => clearInterval(interval);
    }, [images.length]);


  return(
  <div className="home"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
        
        }}>
    {/* Hero Section */}
    <motion.div className="hero-section text-center py-5"
       initial="hidden"
       animate="visible"
       variants={slideInVariants}
       transition={{ duration: 1 }}
    >
      <h1 className="display-4 fw-bold">Unlock Your Potential Here!!!</h1>
      <p className="lead">You can learn from top instructors across a wide range of subjects and enhance your skills by accessing thousands of online courses. 
        These courses are designed to cater to various learning levels, from beginners to advanced learners. 
        By enrolling in these courses, you get the opportunity to learn at your own pace, acquire new knowledge, and stay updated with the latest industry trends and technologies. 
        Whether you're looking to improve your professional skills, explore new hobbies, or advance in your career, 
        these courses provide valuable resources and insights from experienced educators and experts in the field..</p>
      <button className="btn btn-primary btn-lg"><a className='text-white' href='/Tutorials'>Browse Courses</a></button>
    </motion.div>

    {/* Categories Section */}
    <motion.div
        className="categories-section py-5"
        initial="hidden"
        animate="visible"
        variants={slideInVariants}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="container">
          <h2 className="text-center mb-4">Popular Categories</h2>
          <div className="row">
            <motion.div className="col-md-3 col-sm-6 mb-3" whileHover={{ scale: 1.1 }}>
              <div className="category bg-danger text-white text-center fw-bold py-3 fs-5 rounded">React</div>
            </motion.div>
            <motion.div className="col-md-3 col-sm-6 mb-3" whileHover={{ scale: 1.1 }}>
              <div className="category bg-primary text-white text-center fw-bold py-3 fs-5 rounded">Business</div>
            </motion.div>
            <motion.div className="col-md-3 col-sm-6 mb-3" whileHover={{ scale: 1.1 }}>
              <div className="category bg-success text-white text-center fw-bold py-3 fs-5 rounded">Technology</div>
            </motion.div>
            <motion.div className="col-md-3 col-sm-6 mb-3" whileHover={{ scale: 1.1 }}>
              <div className="category bg-info text-white text-center fw-bold py-3 fs-5 rounded">Art & Design</div>
            </motion.div>
            <motion.div className="col-md-3 col-sm-6 mb-3" whileHover={{ scale: 1.1 }}>
              <div className="category bg-warning text-white text-center fw-bold py-3 fs-5 rounded">Health & Fitness</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
  
    <motion.div className="featured-section py-5 bg-light"
     initial="hidden"
     animate="visible"
     variants={slideInVariants}
     transition={{ duration: 1, delay: 1 }}
     >
      <div className="container">
        <h2 className="text-center mb-4">Featured Courses</h2>
        <div className="row">
        <motion.div className="col-md-6 d-flex align-items-stretch" whileHover={{ scale: 1.05 }}>
        <div className="card mb-3 shadow">
          <a href='Tutorials'><img src={image1} className="card-img-top" alt="React for Beginners" /></a>
            <div className="card-body">
              <h5 className="card-title">React for Beginners</h5>
              <p className="card-text">
                Learn the fundamentals of React and start building modern web applications.
              </p>
            </div>
          </div>
          </motion.div>
        <motion.div className="col-md-6 align-items-stretch" whileHover={{ scale: 1.05 }} >
          <div className="card mb-3 shadow">
            <a href='Tutorials'><img src={image2} className="card-img-top" alt="Mastering Photoshop" /></a>
            <div className="card-body">
              <h5 className="card-title">Graphic Designing</h5>
              <p className="card-text">
              Creativity Meets Precision✨</p><p>Design Your Vision!!.              
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </motion.div>
  </div>
);
};
export default Home;
