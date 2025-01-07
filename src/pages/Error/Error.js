import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./style.css";

const Error404 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you're looking for doesn't exist or has been moved.
          Please check the URL or go back to the homepage.
        </p>
        {/* <button onClick={handleGoHome} className="go-home-button">
          Go to Home
        </button> */}
        <Link to="/" className="go-home-button">Go back to Home</Link>
      </div>
    </div>
  );
};

export default Error404;
