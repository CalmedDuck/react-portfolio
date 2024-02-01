import React from 'react';
import Project from '../components/Project/Project';
import './Portfolio.css'; // Ensure this path is correct
import image1 from '../images/fureverfriends.jpg';
import image2 from '../images/livelocal.jpg';
import image3 from '../images/pwa.png';
import image4 from '../images/mongo.png';
import image5 from '../images/spoons.png';

// Project data with 'hasLiveDemo' property
const projectsData = [
  {
    title: "Furever Friends",
    description: "A compassionate pet adoption service designed with a secure, user-friendly interface. Built with Handlebars, JavaScript, Express.js, MySQL, Sequelize, and Tailwind CSS, this platform offers a streamlined process for pet listing and adoption.",
    imageUrl: image1,
    projectUrl: "https://pure-scrubland-49342-080c7f0b82aa.herokuapp.com/",
    repoUrl: "https://github.com/Rounderr21/FureverFriends?tab=readme-ov-file",
    hasLiveDemo: true // Added hasLiveDemo property
  },
  {
    title: "Spoons",
    description: "A culinary networking app where recipes are shared and cherished. Developed using React, GraphQL, MongoDB, and the Render platform, Spoons connects food lovers and preserves the legacy of diverse cuisines.",
    imageUrl: image5,
    projectUrl: "https://spoons.onrender.com",
    repoUrl: "https://github.com/TylerJMalone/recipe-tracker?tab=readme-ov-file",
    hasLiveDemo: true // Added hasLiveDemo property
  },
  {
    title: "Live Local",
    description: "Discover your world with Live Local, a one-stop resource for exploring local cuisines, sights, and music. Using Google Maps and Shazam APIs, the app offers personalized recommendations within your vicinity, enhancing the exploration experience with intuitive navigation and immersive musical discoveries. Built with a collaborative spirit, the team mastered complex API integrations and version control to deliver a seamless user journey.",
    imageUrl: image2,
    projectUrl: "https://rounderr21.github.io/Live_Local/",
    repoUrl: "https://github.com/Rounderr21/Live_Local",
    hasLiveDemo: true // Added hasLiveDemo property
  },
  {
    title: "Progressive Web App Text Editor",
    description: "A Progressive Web Application (PWA) offering offline functionality and data persistence, Text Editor PWA is tailored for developers seeking a reliable text editing solution. Emphasizing accessibility and performance, the application leverages modern web capabilities like service workers and IndexedDB for a seamless, always-available user experience.",
    imageUrl: image3,
    projectUrl: "https://pwa-texteditor-7j42.onrender.com/",
    repoUrl: "https://github.com/CalmedDuck/PWA-texteditor",
    hasLiveDemo: true // Added hasLiveDemo property
  },
  {
    title: "Mongo Social Network API",
    description: "A comprehensive back-end for social networking, this project presents a RESTful API built with Node.js, Express.js, and MongoDB. It supports user interactions, posts, and friend connections, showcasing a robust implementation of server-side technologies and database management. The API's thoughtful design facilitates a rich social media infrastructure, ready to be paired with a dynamic front-end.",
    imageUrl: image4,
    repoUrl: "https://github.com/CalmedDuck/Social_Network_API_Mongo",
    hasLiveDemo: false // This project does not have a live demo
  },
  // ... other project data
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      {projectsData.map((project, index) => (
       <Project
       key={index}
       title={project.title}
       imageUrl={project.imageUrl}
       projectUrl={project.projectUrl}
       repoUrl={project.repoUrl}
       description={project.description} // Pass the description here
       hasLiveDemo={project.hasLiveDemo}
     />
      ))}
    </div>
  );
};

export default Portfolio;
