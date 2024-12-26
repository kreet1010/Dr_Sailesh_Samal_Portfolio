import React,{useState} from "react";
import NewsCard from "../../components/newsCard/newsCard";
import project1Image from "../../assets/disease.jpeg";
import project2Image from "../../assets/medicine.jpeg";
import Navbar from "../../components/navbar";
import "./news.css";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
      title: "DEF",
      description: "Another very long desc.",
      image: project2Image,
      githubLink: "https://github.com/username/ecommerce-app",
    },
    {
      title: "DEF",
      description: "Another very long desc.",
      image: project2Image,
      githubLink: "https://github.com/username/ecommerce-app",
    },
    {
      title: "DEF",
      description: "Another very long desc.",
      image: project2Image,
      githubLink: "https://github.com/username/ecommerce-app",
    },
    {
      title: "ABC",
      description: "A veryyyyyyyyy longgggggggggg descriptionnnnnnnnn.",
      image: project1Image,
      githubLink: "https://github.com/username/portfolio-website",
    },
  ];

  const filteredProjects = projectData.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (

    <div className="projects-container">
      <Navbar />
      <h1>My Projects</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search article by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="news-cards">
      {filteredProjects.map((project, index) => (
          <NewsCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
