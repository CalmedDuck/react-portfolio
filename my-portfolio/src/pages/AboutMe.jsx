import React from 'react';
import './AboutMe.css'; // Ensure this path is correct
import profilePic from '../../src/profilepicture.png';

const AboutMe = () => {
    return (
      <div className="about-me">
        <div className="about-me-container">
          <div className="about-me-image">
            {/* Replace 'path-to-your-image.jpg' with your actual image path */}
            <img src={profilePic} alt="Profile" />
          </div>
          <div className="about-me-text">
            <h2>Brock Williams</h2>
            <p>Fullstack Web Developer</p>
            <p>I am Brock Williams, a Fullstack Web Developer with a deep-rooted love for crafting elegant and efficient web applications. My journey in web development has been driven by a desire to merge aesthetics with functionality, creating experiences that resonate with users and meet practical needs. I specialize in HTML, CSS, JavaScript, and React, and I'm well-versed in backend technologies. My projects range from interactive sites to sophisticated software solutions. I am dedicated to continuous learning and improvement, always exploring new technologies and methodologies to enhance my work. I thrive on challenges that allow me to push the envelope and expand my horizons in the ever-evolving landscape of web development.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutMe;



