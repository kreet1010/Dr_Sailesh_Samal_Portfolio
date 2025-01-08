import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import project1Image from "../../assets/disease.jpeg";
import project2Image from "../../assets/medicine.jpeg";
import Navbar from "../../components/navbar/navbar"
import './project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  // Step 1: Set up the search state
  const [searchQuery, setSearchQuery] = useState("");

  const projectData = [
    {
      title: "ABC",
      description: "A veryyyyyyyyy longgggggggggg descriptionnnnnnnnn.",
      image: project1Image,
      githubLink: "https://github.com/username/portfolio-website",
    },
    {
      title: "DEF",
      description: "Another very long desc.",
      image: project2Image,
      githubLink: "https://github.com/username/ecommerce-app",
    },
    {
      title: "IJKF",
      description: "A short description.",
      image: project2Image,
      githubLink: "https://github.com/username/ecommerce-app",
    },
  ];

  const filteredProjects = projectData.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="projects-container">
      <Navbar />
      <div className="top-of-page">
        <h1>My Projects</h1>
        <div className="inp">
          <input
            type="text"
            placeholder="Search Projects"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
          />
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>
      </div>


      <div className="projs">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              githubLink={project.githubLink}
            />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
