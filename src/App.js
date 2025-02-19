import React from 'react';
import './App.css';
import Services from './Services';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import profilePic from './Assets/A.png';


function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
    
    >
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-buttons">
          <li><button className="nav-button" onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button className="nav-button" onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button className="nav-button" onClick={() => scrollToSection('services')}>Services</button></li>
          <li><button className="nav-button" onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button className="nav-button" onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-container">
        <img src={profilePic} alt="Jameel Ahmed" className="profile-picture" />
        <div className="home-text">
          <h1>Jameel Ahmed</h1>
          <p><b>Full Stack Developer | Mobile App Developer</b></p>

        </div>
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
