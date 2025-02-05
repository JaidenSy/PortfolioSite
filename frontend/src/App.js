import React from 'react';
import NavBar from './components/Navbar/Navbar.tsx';
import SkillCarousel from './components/SkillCarousel/SkillCarousel.tsx';
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
];

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="about" style={{ height: '100vh', background: '#e4e4e4', paddingTop: '80px' }}>
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
      <section id="skills" style={{ height: '100vh', background: '#c4c4c4' }}>
        <h1>Skills</h1>
        <SkillCarousel skills={skills} />
      </section>
      <section id="projects" style={{ height: '100vh', background: '#d4d4d4' }}>
        <h1>Projects</h1>
      </section>
      <section id="contact" style={{ height: '100vh', background: '#a4a4a4' }}>
        <h1>Contact Me</h1>
      </section>
    </div>
  );
}

export default App;