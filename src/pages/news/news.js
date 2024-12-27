import React, { useState } from "react";
import NewsCard from "../../components/newsCard/newsCard";
import Navbar from "../../components/navbar";
import "./news.css";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const projectData = [
    {
      title: "Project A",
      description: "This is a description for Project A.",
      location: "New York",
      date: "2024-01-01",
      image: "https://via.placeholder.com/150",
      githubLink: "https://github.com/username/project-a",
    },
    {
      title: "Project B",
      description: "This is a description for Project B.",
      location: "Los Angeles",
      date: "2024-02-15",
      image: "https://via.placeholder.com/150",
      githubLink: "https://github.com/username/project-b",
    },
    {
      title: "Project C",
      description: "This is a description for Project B.",
      location: "Los Angeles",
      date: "2024-02-15",
      image: "https://via.placeholder.com/150",
      githubLink: "https://github.com/username/project-b",
    },
    {
      title: "Project D",
      description: "This is a description for Project B.",
      location: "Los Angeles",
      date: "2024-02-15",
      image: "https://via.placeholder.com/150",
      githubLink: "https://github.com/username/project-b",
    },
    {
      title: "Project E",
      description: "This is a description for Project B.",
      location: "Los Angeles",
      date: "2024-02-15",
      image: "https://via.placeholder.com/150",
      githubLink: "https://github.com/username/project-b",
    },
    {
      title: "Project F",
      description: "This is a description for Project B.",
      location: "Los Angeles",
      date: "2024-02-15",
      image: "https://via.placeholder.com/150",
      githubLink: "https://github.com/username/project-b",
    },
    {
      title: "Project G",
      description: "This is a description for Project B.",
      location: "Los Angeles",
      date: "2024-02-15",
      image: "https://via.placeholder.com/150",
      githubLink: "https://github.com/username/project-b",
    },
    {
      title: "Project H",
      description: "This is a description for Project B.",
      location: "Los Angeles",
      date: "2024-02-15",
      image: "https://via.placeholder.com/150",
      githubLink: "https://github.com/username/project-b",
    },
    {
      title: "Project I",
      description: "This is a description for Project B.",
      location: "Los Angeles",
      date: "2024-02-15",
      image: "https://via.placeholder.com/150",
      githubLink: "https://github.com/username/project-b",
    },
    {
      title: "Project J",
      description: "This is a description for Project B.",
      location: "Los Angeles",
      date: "2024-02-15",
      image: "https://via.placeholder.com/150",
      githubLink: "https://github.com/username/project-b",
    },
  ];
  const filteredProjects = projectData
    .filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortOption === "date") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortOption === "location") {
        return a.location.localeCompare(b.location);
      }
      return 0;
    });

  return (

    <div className="projects-container">
      <Navbar />
      <h1>Articles & Updates</h1>
      <div className="search-bar">
        <div className="search">
          <input
            type="text"
            placeholder="Search article by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="sort-by">
          <div className="sort-by">
            <label htmlFor="sort">Sort By:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">None</option>
              <option value="title">Title</option>
              <option value="date">Date</option>
              <option value="location">Location</option>
            </select>
          </div>
        </div>
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
