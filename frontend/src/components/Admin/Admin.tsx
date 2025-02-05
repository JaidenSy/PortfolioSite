import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../static/Admin.css';

const Admin = () => {
  const [skill, setSkill] = useState({ skillName: '', image: '', description: '' });
  const [project, setProject] = useState({ title: '', description: '', image: '', liveLink: '', repoLink: '' });
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [showSkills, setShowSkills] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/skills')
      .then(response => setSkills(response.data))
      .catch(error => console.error('Error fetching skills:', error));

    axios.get('http://localhost:8080/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleSkillChange = (e) => {
    const { name, value } = e.target;
    setSkill({ ...skill, [name]: value });
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const addSkill = () => {
    axios.post('http://localhost:8080/api/skills', skill)
      .then(() => {
        setSkill({ skillName: '', image: '', description: '' });
        return axios.get('http://localhost:8080/api/skills');
      })
      .then(response => setSkills(response.data))
      .catch(error => console.error('Error adding skill:', error));
  };

  const addProject = () => {
    axios.post('http://localhost:8080/api/projects', project)
      .then(() => {
        setProject({ title: '', description: '', image: '', liveLink: '', repoLink: '' });
        return axios.get('http://localhost:8080/api/projects');
      })
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error adding project:', error));
  };

  const deleteSkill = (id: number) => {
    axios.delete(`http://localhost:8080/api/skills/${id}`)
      .then(() => {
        setSkills(skills.filter((_, index) => index !== id));
      })
      .catch(error => console.error('Error deleting skill:', error));
  };

  const deleteProject = (id: number) => {
    axios.delete(`http://localhost:8080/api/projects/${id}`)
      .then(() => {
        setProjects(projects.filter((_, index) => index !== id));
      })
      .catch(error => console.error('Error deleting project:', error));
  };

  const toggleShowSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <div>
        <h3>Add Skill</h3>
        <input type="text" name="skillName" value={skill.skillName} onChange={handleSkillChange} placeholder="Skill Name" />
        <input type="text" name="image" value={skill.image} onChange={handleSkillChange} placeholder="Image URL" />
        <input type="text" name="description" value={skill.description} onChange={handleSkillChange} placeholder="Description" />
        <button onClick={addSkill}>Add Skill</button>
      </div>
      <div>
        <h3>Add Project</h3>
        <input type="text" name="title" value={project.title} onChange={handleProjectChange} placeholder="Title" />
        <input type="text" name="description" value={project.description} onChange={handleProjectChange} placeholder="Description" />
        <input type="text" name="image" value={project.image} onChange={handleProjectChange} placeholder="Image URL" />
        <input type="text" name="liveLink" value={project.liveLink} onChange={handleProjectChange} placeholder="Live Link" />
        <input type="text" name="repoLink" value={project.repoLink} onChange={handleProjectChange} placeholder="Repository Link" />
        <button onClick={addProject}>Add Project</button>
      </div>
      <div className="table-container">
        <div className="table-header">
          <h3>{showSkills ? 'Skills' : 'Projects'}</h3>
          <label className="switch">
            <input type="checkbox" checked={showSkills} onChange={toggleShowSkills} />
            <span className="slider round"></span>
          </label>
        </div>
        <table>
          <thead>
            <tr>
              <th>{showSkills ? 'Skill Name' : 'Title'}</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {showSkills ? skills.map((skill, index) => (
              <tr key={index}>
                <td>{skill.skillName}</td>
                <td>{skill.description}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => deleteSkill(index)}>Delete</button>
                </td>
              </tr>
            )) : projects.map((project, index) => (
              <tr key={index}>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => deleteProject(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;