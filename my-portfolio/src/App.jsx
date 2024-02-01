import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutMe from './pages/AboutMe'; // Import the AboutMe component
import Portfolio from './pages/Portfolio'; // Import the Portfolio component
import Contact from './components/Contact/contact';
import Resume from './components/Resume/Resume';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
        <Route path="/" element={<AboutMe />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
   
         
        </Routes>
      </main>
    </Router>
  );
};

export default App;
