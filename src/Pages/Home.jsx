import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../assets/Images/image1.png";
import image2 from '../assets/Images/image2.png'; 
import { motion } from 'framer-motion';
import back1 from '../assets/Images/back1.png'; 
import back2 from '../assets/Images/back2.png'; 
import back3 from '../assets/Images/back3.png'; 
import back4 from '../assets/Images/back4.png'; 
import reactBasic from '../assets/Images/reactBasic.png';
import fin from '../assets/Images/finance.png';
import cyber from '../assets/Images/cyber.png';
import yoga from '../assets/Images/yoga.png';
import graphic from '../assets/Images/graphic.png';

const Home = () => {
  const images = [back1, back2, back3, back4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval); 
  }, [images.length]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const imageStyle = {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    transition: "transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 1s ease-in-out",
    transform: "scale(1)",
  };

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 10,
  };

  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
      const [color, setColor] = useState('black');

      useEffect(() => {
        const colors = ["#0E2954", "#1F6E8", "#2E8A99", "#84A7A1"];
        let index = 1;

        const interval = setInterval(() => {
          setColor(colors[index]);
          index = (index + 1) % colors.length;
        }, 5000);

        return () => clearInterval(interval);
      }, []);
    
      const categories = [
        { name: 'React', img: reactBasic },
        { name: 'Business', img: fin },
        { name: 'Technology', img: cyber },
        { name: 'Art & Design', img: yoga },
        { name: 'Health & Fitness', img: graphic },
      ];

  return(
 <div className='bg-white'>
  <div className="home" style={{ position: 'relative', overflow: 'hidden' }}>
    {/* Hero Section */}
    <motion.div className="hero-section text-center py-5"
       initial="hidden"
       animate="visible"
       variants={slideInVariants}
       transition={{ duration: 1 }}
    >
      <motion.div
        className="categories-section py-5"
        initial="hidden"
        animate="visible"
        variants={slideInVariants}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
      <div className="home" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
        {/* Left Arrow */}
        <button 
          onClick={handlePrevious} 
          style={{ ...arrowStyle, left: '10px' }}>
          &#8249;
        </button>
        <img 
          src={images[currentImageIndex]} 
          alt={`Slide ${currentImageIndex + 1}`} 
          style={imageStyle} 
        />
         <button 
          onClick={handleNext} 
          style={{ ...arrowStyle, right: '10px' }}>
          &#8250;
        </button>
        </div>
      </div>
    </div>
      <motion.div style={{backgroundColor: '#CDE8E5'}} whileHover={{ scale: 1.1 }}>
      <h1 className="display-4 fw-bold"
        style={{
        fontFamily: "Pacifico, cursive", color: '#16325B', marginTop: '50px'}}>Unlock Your Potential Here!!!</h1>
        <br /><p className="lead fw-bold" >You can learn from top instructors across a wide range of subjects and enhance your skills by accessing thousands of online courses. 
        These courses are designed to cater to various learning levels, from beginners to advanced learners.</p>
       </motion.div>
      </motion.div>
        <motion.div
        className="categories-section py-5"
        initial="hidden"
        animate="visible"
        variants={slideInVariants}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="container">
          <h2 className="text-center fw-bold fs-1"
            style={{
              backgroundSize: 'contain',
              padding: '10px 20px',
              borderRadius: '30px',
              width: '50%',
              margin: 'auto',
              fontFamily: 'Montserrat',
              color: '#2E8A99',
            }}>
            POPULAR CATEGORIES
          </h2>
          <motion.div className="categories-section py-5" 
                      style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative' }}>
            <motion.div
              style={{ display: 'flex', gap: '30px' }}
              animate={{ x: ['0%', '-100%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            >
              {categories.concat(categories).map((category, index) => (
                <div key={index} className="category-card" 
                     style={{ display: 'flex', 
                     alignItems: 'center', 
                     padding: '15px 30px', 
                     backgroundColor: '#84A7A1', 
                     borderRadius: '10px', 
                     color: 'white', fontSize: '1.2rem', fontWeight: 'bold' 
                     }}>
                  <img src={category.img} alt={category.name} style={{ height: '200px', width: '200px', marginRight: '10px' }} />
                  {category.name}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    
      <motion.div className="featured-section py-5"
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ duration: 1, delay: 1 }}
      >
        <div className="container">
          <motion.h2 
            className="text-center mb-4" 
            style={{backgroundColor: '#CDE8E5',borderRadius: '10px', fontWeight: 'bold', color: ' #0E2954'}} 
            whileHover={{ scale: 1.05 }}>
            Featured Courses</motion.h2>
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
  </div>
);
};
export default Home;
