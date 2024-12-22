import React from "react";
import "./style.css";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, image, githubLink }) => {
  return (
    <div className="project-card">
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub className="github-icon" /> View on GitHub
        </a>
      </div>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
