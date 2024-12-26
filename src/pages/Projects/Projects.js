import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import project1Image from "../../assets/disease.jpeg";
import project2Image from "../../assets/medicine.jpeg"; 
import Navbar from "../../components/navbar";
import './project.css'
const Projects = () => {
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
      description: " desc.",
      image: project2Image,
      githubLink: "https://github.com/username/ecommerce-app",
    },
  ];

  return (
    
    <div className="projects-container">
      <Navbar />
      <h1>My Projects</h1>
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default Projects;
