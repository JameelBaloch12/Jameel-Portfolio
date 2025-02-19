import React from "react";

const About = () => {
  const servicesData = [
    { title: "Web Development", description: "Building responsive and dynamic websites using modern frameworks like React and Angular." },
    { title: "Mobile App Development", description: "Creating high-performance mobile applications using Flutter and React Native." },
    { title: "Backend Development", description: "Developing robust server-side applications with Node.js and Express." },
    { title: "Database Management", description: "Handling and optimizing databases with MySQL, MongoDB, and Firebase." },
  ];

  return (
    <div style={{ padding: "50px" }}>
    
      <h3>Services:</h3>
      <div>
        {servicesData.map((service, index) => (
          <div key={index} style={{ marginBottom: "50px", padding: "12px", border: "9px solid #ddd", borderRadius: "5px" }}>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <h3>Contact:</h3>
      <p>jameelahmedbozdar112@gmail.com</p>
    </div>
  );
};

export default About;
