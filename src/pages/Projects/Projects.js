import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import project1Image from "../../assets/disease.jpeg"; // Example local image
import project2Image from "../../assets/medicine.jpeg"; // Example local image

const Projects = () => {
  const projectData = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built using React and Tailwind CSS.",
      image: project1Image,
      githubLink: "https://github.com/username/portfolio-website",
    },
    {
      title: "E-commerce App",
      description: "A full-stack e-commerce application with MERN stack.",
      image: project2Image,
      githubLink: "https://github.com/username/ecommerce-app",
    },
  ];

  return (
    <div className="projects-container">
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
