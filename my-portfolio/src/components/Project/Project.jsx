import React from 'react';
import './Project.css'; // Ensure this path is correct

const Project = ({ title, imageUrl, projectUrl, repoUrl, description, hasLiveDemo }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-description">{description}</p> {/* Display the description here */}
        <div className="project-links">
          {hasLiveDemo && (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
          )}
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
