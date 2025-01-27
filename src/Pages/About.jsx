import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import mission from '../assets/Images/mission.png';
import choose from '../assets/Images/choose.png';
import alex from '../assets/Images/alex.png';
import jamie from '../assets/Images/jamie.png';
import taylor from '../assets/Images/taylor.png';
import { motion } from 'framer-motion';
import about_back from '../assets/Images/about_back.png';


const About = () => (
  <div style={{
    position: 'relative',
  }} >
  <div className="container py-5" style={{ position: 'relative', zIndex: 1,}}>
    {/* Header Section */}
    <motion.div 
    className="text-center mb-3" 
    whileHover={{scale: 1.1}}
    style={{borderRadius: '10px', backgroundColor: '	#FFF8DC'}}>
      <h1 className="display-4  fw-bold" style={{color:" #2F4F4F"}}>About Us</h1>
      <p className="lead text-dark fw-bold">
        Empowering learners worldwide by providing accessible, high-quality education that breaks barriers and creates opportunities. 
        We use innovative technology to offer personalized learning experiences, catering to diverse needs. 
      </p>
      
    </motion.div>

    <motion.div 
    className="bg-white d-flex align-items-center justify-content-between flex-wrap p-4"
    whileHover={{scale: 1.1}}
    style={{borderRadius: '10px'}}>
      {/* Mission Image on Left side */}
         <motion.div className="col-md-5 mb-4 mb-md-0 " 
                    style={{
                    animation: 'slideAnimation 2s infinite',
                      animationDelay: '2s',
                        }}            
                    transition={{ repeat: Infinity, repeatType: "loop", duration: 2}}
                    >
        <img 
          src={mission}
          alt="Mission" 
          className="img-fluid rounded shadow"
          style={{width: '70%', height: 'auto',}}
        />
      </motion.div>
      {/* Mission Text */}
      <div className="col-md-7"
          style={{ textAlign: "left", paddingLeft: "20px" }}>
        <h2 className="h3 mb-3 fw-bold" style={{color: '#000080'}}>Our Mission</h2>
        <p className="text-dark">
          Our mission is to make learning accessible to everyone by offering a wide range of tutorials and courses. 
          Whether you're a beginner or an expert, we have resources tailored to help you grow and succeed.
        </p>
      </div>
    </motion.div>

    <br />
    <motion.div 
    className="row align-items-center mb-5"  
    whileHover={{scale: 1.1}} 
    style={{borderRadius: '10px', backgroundColor: '	#FAFAD2'}}>
      {/* Why Choose Us Text */}
      <motion.div className="col-md-7 order-md-2">
        <h2 className="h3 mb-3 fw-bold" style={{color: ' #4B0082'}}>Why Choose Us?</h2>
        <ul className="list-unstyled text-dark">
          <li>     
          <i className="bi bi-check-circle text-success me-2"></i> Expert instructors with industry experience</li>
          <li><i className="bi bi-check-circle text-success me-2"></i> Comprehensive and up-to-date content</li>
          <li><i className="bi bi-check-circle text-success me-2"></i> Flexible learning at your own pace</li>
          <li><i className="bi bi-check-circle text-success me-2"></i> Community-driven learning environment</li>
        </ul>
      </motion.div>
      {/* Right Section with Image */}
      <motion.div className="col-md-5 order-md-1 mb-4 mb-md-0" whileHover={{ scale: 1.1 }}>
        <img 
          src={choose}
          alt="Why Choose Us" 
          className="img-fluid rounded shadow"
          style={{transform: 'rotate(325deg)', width: '70%', height: 'auto',}}
        />
      </motion.div>
    </motion.div>

    {/* Join Us Section */}
     <motion.div className="text-center"  whileHover={{scale: 1.1}} >
     <img 
          src={about_back}
          alt="Mission" 
          className="img-fluid rounded shadow"
          style={{width: '40%', height: 'auto', marginLeft: '700px', transform: 'rotate(30deg)', filter: 'blur(2px)', opacity: 0.8,}}
        />
      <h2 className="h3 fw-bold" style={{color: ' #800000'}}>Join Us!!!</h2>
      <p className="text-dark">
        Be a part of our growing community of learners and educators. Together, we can make knowledge accessible to all.
      </p><br />
      <button className="btn btn-dark btn-lg px-4">
        <a  href="/Login" className="text-white text-decoration-none">Get Started</a>
      </button>
    </motion.div>
    </div>

    <br />
    <div style={{backgroundColor: '	#FFF8DC'}}>
    {/* Testimonials Section */}
    <div className="mt-5"  whileHover={{scale: 1.1}} >
      <h2 className="h3 mb-4 text-center fw-bold" style={{color: '#006400'}}>What Our Learners Say....</h2>
      <div className="row text-center">
        <motion.div className="col-md-4"  whileHover={{scale: 1.1}} >
          <div className="card shadow-sm">
            <img 
              src={alex}
              alt="User 1" 
              className="card-img-top rounded-circle mx-auto mt-3" 
              style={{ width: '100px', height: '100px' }}
            />
            <div className="card-body">
              <p className="card-text text-muted">
                "The courses here are amazing! I've learned so much in such a short time."
              </p>
              <h5 className="card-title text-dark">- Alex M.</h5>
            </div>
          </div>
        </motion.div>
        <motion.div className="col-md-4"  whileHover={{scale: 1.1}} >
          <div className="card shadow-sm">
            <img 
              src={jamie}
              alt="User 2" 
              className="card-img-top rounded-circle mx-auto mt-3" 
              style={{ width: '100px', height: '100px' }}
            />
            <div className="card-body">
              <p className="card-text text-muted">
                "Flexible and comprehensive content. Perfect for working professionals!"
              </p>
              <h5 className="card-title text-dark">- Jamie R.</h5>
            </div>
          </div>
        </motion.div>
        <motion.div className="col-md-4"  whileHover={{scale: 1.1}} >
          <div className="card shadow-sm">
            <img 
              src={taylor} 
              alt="User 3" 
              className="card-img-top rounded-circle mx-auto mt-3" 
              style={{ width: '100px', height: '100px' }}
            />
            <div className="card-body" >
              <p className="card-text text-muted">
                "Great instructors and community. 
                <br />Highly recommend!"
              </p>
              <h5 className="card-title text-dark">- Taylor S.</h5>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
</div>
);

export default About;
