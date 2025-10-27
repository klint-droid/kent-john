import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "BMI Calculator App",
    description: "A simple BMI calculator with login/signup using HTML, CSS, and JavaScript.",
    link: "https://yourlink.com",
    image: "/images/bmi.jpg"
  },
  {
    title: "C Vending Machine",
    description: "Console-based vending machine simulation written in C using file handling.",
    link: "https://github.com/yourrepo",
    image: "/images/vending.jpg"
  },
  {
    title: "Checkers Game",
    description: "A terminal-based Checkers game with multi-capture and account system.",
    link: "https://github.com/yourrepo",
    image: "/images/checkers.jpg"
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <img src={p.image} alt={p.title} className="project-image" />
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
