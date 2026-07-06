import React from "react";
import "./App.css";

import StudentDetails from "./components/StudentDetails";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Activities from "./components/Activities";

function App() {
  return (
    <div className="portfolio-shell">
      <nav className="navbar">
        <a href="#about" className="brand">
          Rahul Jangir
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#activities">Activities</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">Aspiring Full-Stack Developer</p>
          <h1>Building modern web experiences with creativity and purpose.</h1>
          <p className="hero-text">
            I’m a passionate MCA student who enjoys crafting interactive React apps,
            scalable web solutions, and polished user interfaces.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/cv.txt" download>
              Download CV
            </a>
            <a
              className="btn btn-secondary"
              href="https://github.com/Hacker004rahul"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>
        <div className="hero-badge"><h2>Technologiaa</h2>MCA • React • Node.js • MongoDB •<br></br>
        <br></br>
          Express • JavaScript  💻</div>
      </header>

      <main className="container">
        <section id="about">
          <StudentDetails />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="activities">
          <Activities />
        </section>
      </main>
    </div>
  );
}

export default App;