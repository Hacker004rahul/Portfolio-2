import React from "react";

function Projects() {
  const projects = [
    {
      title: "Student Management System",
      technology: "React, Node.js, MongoDB",
      description: "A web application to manage student records."
    },
    {
      title: "Weather App",
      technology: "React, OpenWeather API",
      description: "Displays live weather updates."
    },
    {
      title: "Portfolio Website",
      technology: "HTML, CSS, React",
      description: "A personal portfolio showcasing skills and projects."
    }
  ];

  return (
    <div className="card">
      <h2>💻 Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p><strong>Technology:</strong> {project.technology}</p>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;