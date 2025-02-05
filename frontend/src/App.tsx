import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/Navbar/Navbar.tsx';
import SkillCarousel from './components/SkillCarousel/SkillCarousel.tsx';
import Projects from './components/Projects/Projects.tsx';
import Admin from './components/Admin/Admin.tsx';
import './App.css';
import { Skill, Project } from './constants/types';

const App = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/skills')
      .then((response) => setSkills(response.data))
      .catch((error) => console.error('Error fetching skills:', error));

    axios.get('http://localhost:8080/api/projects')
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={
            <>
              <section id="about" className="section about">
                <div className="about-content">
                  <div className="about-text">
                    <h1>About Me</h1>
                    <p>
                      Hi, I'm Jaiden Sy, a passionate developer with expertise in React.js, Python, Golang, and other various modern web technologies.
                      I love building scalable and user-friendly applications that solve real-world problems. I'm always eager to learn new technologies and improve my skills.
                    </p>
                  </div>
                  <div className="about-photo">
                    <img src="/images/Github-Universe-Profile.png" alt="Jaiden Profile Pic" />
                  </div>
                </div>
              </section>
              <section id="skills" className="section skills">
                <h1>Skills</h1>
                <SkillCarousel skills={skills} />
              </section>
              <section id="projects" className="section projects">
                <h1>Projects</h1>
                <Projects projects={projects} />
              </section>
              <section id="contact" className="section contact">
                <h1>Contact Me</h1>
              </section>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;