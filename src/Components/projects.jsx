import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "My personal portfolio built with React and modern UI.",
      tech: "React, CSS",
    },
    {
      title: "Todo App",
      desc: "A simple task manager with add/delete functionality.",
      tech: "React, LocalStorage",
    },
    {
      title: "Weather App",
      desc: "Shows real-time weather using API integration.",
      tech: "React, API",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>
        My <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <span>{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;