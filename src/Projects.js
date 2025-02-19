import React from 'react';
import './Projects.css'; // Ensure you have a CSS file for styling

function Projects() {
  const projectList = [
    {
      title: 'Ludo Game',
      description: 'A fully functional multiplayer Ludo game built using Android Studio and Jetpack Compose.',
      techStack: 'Kotlin, Jetpack Compose, Firebase',
      link: 'https://github.com/yourusername/ludo-game',
    },
    {
      title: 'Aviator Game',
      description: 'A high-stakes Aviator-style game with multiplayer support and real-money transactions.',
      techStack: 'Flutter, Firebase, Dart',
      link: 'https://github.com/yourusername/aviator-game',
    },
    {
      title: 'Educational Website',
      description: 'A GeeksforGeeks-style website offering educational content, tutorials, and coding challenges.',
      techStack: 'React, Node.js, MongoDB, Express.js',
      link: 'https://your-website.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      techStack: 'React, CSS, JavaScript',
      link: 'https://your-portfolio.com',
    },
    {
      title: 'E-commerce App',
      description: 'A sample of WebSite that shows the services online for clients.',
      techStack: 'Flutter, Firebase, Stripe API',
      link: 'https://github.com/yourusername/ecommerce-app',
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
