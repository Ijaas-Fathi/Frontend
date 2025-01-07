import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import image1 from "../assets/Images/image1.png";
import image2 from '../assets/Images/image2.png'; 
import { motion } from 'framer-motion';
import back1 from '../assets/Images/back1.png'; 
import back2 from '../assets/Images/back2.png'; 
import back3 from '../assets/Images/back3.png'; 
import back4 from '../assets/Images/back4.png'; 


const Home = () => {
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const images = [back1, back2, back3, back4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  
    return () => clearInterval(interval);
    }, [images.length]);

      const [color, setColor] = useState('grey');

      useEffect(() => {
        const colors = ['#03295d', '#930702', '#065d03', '#2b035d'];
        let index = 0;

        const interval = setInterval(() => {
          setColor(colors[index]);
          index = (index + 1) % colors.length;
        }, 5000);

        return () => clearInterval(interval);
      }, []);
    


  return(
  <div className="home" style={{ position: 'relative', overflow: 'hidden' }}>
  <div className="home"
        style={{ position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,          
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'auto',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 1s ease-in-out',
          filter: 'blur(2px)',
          zIndex: -1,
        }}></div>
    {/* Hero Section */}
    <motion.div className="hero-section text-center py-5"
       initial="hidden"
       animate="visible"
       variants={slideInVariants}
       transition={{ duration: 1 }}
    >
      <h1 className="display-4 fw-bold"
      style={{
        fontFamily: "Pacifico, cursive",     color: '#DC143C', }}>Unlock Your Potential Here!!!</h1>
      <p className="lead fw-bold">You can learn from top instructors across a wide range of subjects and enhance your skills by accessing thousands of online courses. 
        These courses are designed to cater to various learning levels, from beginners to advanced learners.</p>
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
          <h2 className="text-center mb-4 fw-bold fs-1"
          style={{
            backgroundSize: 'contain',
            padding: '10px 20px',
            borderRadius: '30px',
            width: '50%',
            marginLeft: '300px',
            backgroundColor: '#dfe0e7',
            fontFamily: 'Montserrat',
            color: color,
          }}>POPULAR CATEGORIES</h2>
          <div className="row">
            <motion.div className="col-md-3 col-sm-6 mb-3" whileHover={{ scale: 1.1 }}>
              <div className="category text-white text-center fw-bold py-3 fs-5 rounded" style={{backgroundColor: '#5F9EA0'}}>React</div>
            </motion.div>
            <motion.div className="col-md-3 col-sm-6 mb-3" whileHover={{ scale: 1.1 }}>
              <div className="category text-white text-center fw-bold py-3 fs-5 rounded" style={{backgroundColor: '#DAA520'}}>Business</div>
            </motion.div>
            <motion.div className="col-md-3 col-sm-6 mb-3" whileHover={{ scale: 1.1 }}>
              <div className="category text-white text-center fw-bold py-3 fs-5 rounded" style={{backgroundColor: '#8B4513'}}>Technology</div>
            </motion.div>
            <motion.div className="col-md-3 col-sm-6 mb-3" whileHover={{ scale: 1.1 }}>
              <div className="category text-white text-center fw-bold py-3 fs-5 rounded" style={{backgroundColor: '#DB7093'}}>Art & Design</div>
            </motion.div>
            <motion.div className="col-md-3 col-sm-6 mb-3" whileHover={{ scale: 1.1 }}>
              <div className="category text-white text-center fw-bold py-3 fs-5 rounded"  style={{backgroundColor: '#B22222'}}>Health & Fitness</div>
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
          <a href='Tutorials'><img src={image1} className="card-img-top" alt="React for Beginners"/></a>
            <div className="card-body">
              <h5 className="card-title">React for Beginners</h5>
              <p className="card-text"  style={{backgroundSize: 'auto'}}>
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
