import React from 'react';
import NavBar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home" style={{ height: '100vh', background: '#f4f4f4' }}>
        <h1>Welcome to My Portfolio</h1>
      </section>
      <section id="about" style={{ height: '100vh', background: '#e4e4e4' }}>
        <h1>About Me</h1>
      </section>
      <section id="projects" style={{ height: '100vh', background: '#d4d4d4' }}>
        <h1>Projects</h1>
      </section>
      <section id="contact" style={{ height: '100vh', background: '#c4c4c4' }}>
        <h1>Contact Me</h1>
      </section>
    </div>
  );
}

export default App;