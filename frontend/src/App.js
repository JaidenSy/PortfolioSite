import React from 'react';
import NavBar from './components/Navbar/Navbar.tsx';
import SkillCarousel from './components/SkillCarousel/SkillCarousel.tsx';
import Projects from './components/Projects/Projects.tsx';
import './App.css';

const skills = [
  {
    skillName: 'React.js',
    image: '/images/react.png',
    description: 'A JavaScript library for building user interfaces.',
  },
  {
    skillName: 'Golang',
    image: '/images/golang.png',
    description: 'A statically typed, compiled programming language designed at Google.',
  },
  {
    skillName: 'Python',
    image: '/images/python.png',
    description: 'A high-level, interpreted programming language with dynamic semantics.',
  },
  {
    skillName: 'React.js',
    image: '/images/react.png',
    description: 'A JavaScript library for building user interfaces.',
  },
  {
    skillName: 'Golang',
    image: '/images/golang.png',
    description: 'A statically typed, compiled programming language designed at Google.',
  },
  {
    skillName: 'Python',
    image: '/images/python.png',
    description: 'A high-level, interpreted programming language with dynamic semantics.',
  },
];

function App() {
  return (
    <div className="App">
      <NavBar />
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
        <Projects />
      </section>
      <section id="contact" className="section contact">
        <h1>Contact Me</h1>
      </section>
    </div>
  );
}

export default App;