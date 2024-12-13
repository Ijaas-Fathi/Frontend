import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Home from './Pages/Home';
import About from './Pages/About';
// import Contact from './Pages/Contact';
// import TutorialDetails from './Pages/TutorialDetails';
// import Tutorials from './Pages/Tutorials';
// import Registration from './Pages/Registration';
// import CourseDetails from './Pages/CourseDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /><br />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/tutorials" element={<Tutorials />}/>
          <Route path="/tutorials/:id" element={<TutorialDetails />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/courseDetails" element={<CourseDetails />} /> */}
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
