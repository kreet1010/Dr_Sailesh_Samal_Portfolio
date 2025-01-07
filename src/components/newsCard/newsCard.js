import React from "react";
import "./newsCard.css";
import { FaRegNewspaper } from "react-icons/fa";

const NewsCard = ({ title, description, image, githubLink }) => {
    return (
        <div className="news-card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FaRegNewspaper className="github-icon" /> View Complete Article
                </a>
            </div>

        </div>
    );
};

export default NewsCard;
