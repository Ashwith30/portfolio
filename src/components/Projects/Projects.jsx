import { useState } from "react";
import "./Projects.css";

function Projects() {

  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      name: "Event Management System",
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800",
      desc: "A web platform to manage events, registrations and scheduling with efficient backend logic.",
      github: "#"
    },
    {
      name: "Socratic AI",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
      desc: "AI based intelligent learning assistant that helps users understand concepts interactively.",
      github: "#"
    },
    {
      name: "StartupSync",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
      desc: "Platform connecting startup teams with collaboration tools and smart project workflows.",
      github: "#"
    },
    {
      name: "High Speed Compression",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
      desc: "Optimized Huffman based compression system designed for high-speed network environments.",
      github: "#"
    },
    {
      name: "Medical Chatbot",
      img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=800",
      desc: "Healthcare assistant chatbot that provides medical term explanations and basic guidance.",
      github: "#"
    },
    {
      name: "Accent Detection",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800",
      desc: "ML model that detects regional accent patterns from speech signals.",
      github: "#"
    },
    {
      name: "Hospital Management",
      img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800",
      desc: "System for managing patient records, appointments and hospital operations.",
      github: "#"
    }
  ];

  return (
    <section className="projects-section">

      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">

            <img src={p.img} alt={p.name} />

            <div className="project-overlay">
              <span onClick={() => setActiveProject(p)}>ℹ</span>
            </div>

            <p className="project-name">{p.name}</p>

          </div>
        ))}
      </div>

      {activeProject && (
  <div className="project-modal">

    <div className="project-popup">

      <img
        src={activeProject.img}
        alt={activeProject.name}
        className="popup-image"
      />

      <div className="popup-content">

        <h3>{activeProject.name}</h3>

        <p>{activeProject.desc}</p>

        <a
          href={activeProject.github}
          target="_blank"
          className="github-btn"
        >
          View GitHub
        </a>

      </div>

      <span
        className="popup-close"
        onClick={() => setActiveProject(null)}
      >
        ✕
      </span>

    </div>

  </div>
)}
    </section>
  );
}

export default Projects;