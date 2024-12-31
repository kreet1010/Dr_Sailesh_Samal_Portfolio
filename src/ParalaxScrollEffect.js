import React from "react";
import dr_samal from "./assets/dr.sailesh_kumar_samal.jpg";
import Navbar from "./components/navbar.js";
import analysisRprt from "./assets/crop.jpg";
import "./App.css";

const ParallaxScrollEffect = () => {

  return (
    <div className="landing">
      <Navbar />
      <div className="parallax1">
        <div className="filter">
          <div className="intro">
            <h1>Dr. Shailesh Kumar Samal</h1>
            <h3>Co-Founder & CEO, Inflanova AB</h3>
            <h3>Senior Researcher Karolinska Institutet</h3>
            <h3>Adjunct fac./Prof - IIT Ropar</h3>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="text">
          <h1>The Text</h1>
          <p>
            In the heart of a bustling city, there lies a hidden gem—a small, unassuming café that has become a sanctuary for those seeking solace from the chaos of urban life. The aroma of freshly brewed coffee mingles with the soft hum of conversation, creating an atmosphere that is both comforting and invigorating. The walls are adorned with local artwork, each piece telling a story of its own, while the shelves are lined with books waiting to be discovered by curious minds.
            The café's owner, an elderly gentleman with a twinkle in his eye, greets each patron with a warm smile and a friendly word. He knows most of his customers by name, and their preferences are etched in his memory. Regulars come not just for the coffee, but for the sense of community that the café fosters. Strangers become friends over shared tables, and the worries of the outside world seem to melt away with each sip of the rich, dark brew.

            As the sun sets and the city lights begin to twinkle, the café transforms into a cozy haven, where dreams are nurtured, and stories are shared. It is a place where time slows down, and the simple pleasures of life are savored.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxScrollEffect;
