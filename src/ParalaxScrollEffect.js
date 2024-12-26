import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dr_samal from "./assets/dr.sailesh_kumar_samal.jpg";
import Navbar from "./components/navbar.js";
import analysisRprt from "./assets/crop.jpg";
import "./App.css";

const ParallaxScrollEffect = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    navigate("/journey"); // Navigate to the '/journey' route
  };

  return (
    <div className={`container ${scrolled ? "scrolled" : ""}`}>
      <div className="white-div">
        <div className="white-div-content">
          <div className="welcome">Welcome</div>
          <div className="name-txt">Dr. Sailesh Kumar Samal</div>
          <div className="desigs">
            <h3>Co-Founder & CEO, Inflanova AB</h3>
            <h3>Senior Researcher Karolinska Institutet</h3>
            <h3>Adjunct fac./Prof - IIT Ropar</h3>
          </div>
        </div>
        <div className="scroll_txt">Scroll</div>
      </div>
      <div className="black-div">
        <div className="black-div-content">
          <img src={dr_samal} alt="Dr.Sailesh Kumar Samal" />
        </div>
      </div>
      <div className={`behind-the-scene ${scrolled ? "visible" : ""}`}>
        <Navbar />
        <div className="layer-top">
          <div className="about">
            <h1>About</h1>
            <p>
            Dr. Shailesh Kumar Samal is a leading authority in immunotherapy and biotechnology, with dual Ph.D. degrees in Medical Sciences from Karolinska Institutet and Biochemistry from Maastricht University. As a serial entrepreneur, he has founded and led several biotech companies, including Inflanova AB. Dr. Samal has collaborated with Nobel laureates worldwide and is a nominated member of Sigma Xi, The Scientific Research Honor Society, known for its prestigious membership that includes 200 Nobel laureates. Sigma Xi, founded in 1886, honors excellence in scientific research and fosters collaboration among scientists and engineers. Dr. Samal also serves as an adjunct professor at IIT Ropar, where he is the youngest professor across all IITs. His pioneering work in developing vaccines and diagnostics for chronic inflammatory conditions reflects his deep commitment to advancing science and education.
            </p>
          </div>
          <div className="image-container">
            <img src={dr_samal} alt="Dr. Sailesh Kumar Samal" />
          </div>
        </div>
        <div className="layer-btm">
          <div className="card1">
          <div className="total-citations"> 47 </div>
            <div className="card-desc">Published Researches</div>
          </div>
          <div className="card2">
            <div className="total-citations"> 406 </div>
            <div className="card-desc">Total citations</div>
          </div>
          <div className="card3">
            <div className="work">
            Every great achievement starts with a dream. From humble beginnings to breaking barriers, this journey has been fueled by perseverance, passion, and an unwavering belief in the power of possibilities. Through countless challenges and lessons learned, each step forward has been a testament to resilience and growth.
            </div>
            <div className="journey-button" onClick={handleClick}>
              View Journey
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxScrollEffect;
