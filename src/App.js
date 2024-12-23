import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParallaxScrollEffect from "./ParalaxScrollEffect";
import Skills from "./pages/Journey/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParallaxScrollEffect />} />
        <Route path="/journey" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
