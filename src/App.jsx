import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Tutorials from './Pages/Tutorials';
import Player from './Pages/Player'; // Import new Player page
import Registration from './Pages/Registration';
import Enrollment from './Pages/Enrollment';
import UploadTutorialPage from './Pages/UploadTutorialPage';
import StudentProfile from './Pages/StudentProfile';
import InstructorProfile from './Pages/InstructorProfile';
import SiteBackground from './assets/Images/SiteBackground.png';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundStyle = {
    background: `url(${SiteBackground}) no-repeat center ${50 + offsetY * 0.1}% fixed`,
    backgroundSize: "cover",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  };

  return (
    <div style={backgroundStyle}>
      <Router>
        <Header /><br />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/player/:id" element={<Player />} /> 
          <Route path="/registration" element={<Registration />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path='/UploadTutorialPage' element={<UploadTutorialPage />} />
          <Route path='/studentProfile' element={<StudentProfile />} />
          <Route path='/instructorProfile' element={<InstructorProfile />} />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
