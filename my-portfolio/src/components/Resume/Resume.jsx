import React from 'react';
import './Resume.css'; // Make sure the CSS file is in the correct path
import resumeFile from '../../assets/Resume.pdf'; // Update with the correct path to your resume file

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <p>Download my resume and view my professional experience and skills.</p>
      <a href={resumeFile} download="Resume.pdf" className="resume-download-btn">Download Resume</a>
      <h3>Proficiencies</h3>
      <ul className="proficiency-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>GraphQL</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Bootstrap</li>
        <li>Express.js</li>
        {/* ... other proficiencies */}
      </ul>
    </div>
  );
};

export default Resume;
