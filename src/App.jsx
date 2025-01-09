import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Tutorials from './Pages/Tutorials';
import TutorialDetails from './Pages/TutorialDetails';
import Registration from './Pages/Registration';
import Enrollment from './Pages/Enrollment';
import Instructor from './Pages/Instructor';
import SiteBackground from './assets/Images/SiteBackground.png';

function App() {
    const backgroundStyle = {
    background: `url(${SiteBackground}) no-repeat center center fixed`,
    backgroundSize: "cover",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  };

  return (
    <div style={backgroundStyle}>
    <Router>
      <div className="App">
        <Header /><br />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/tutorials/:id" element={<TutorialDetails />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path='/instructor' element={<Instructor />} />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </Router></div>
  );
}

export default App;
