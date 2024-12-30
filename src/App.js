import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParallaxScrollEffect from "./ParalaxScrollEffect";
import Skills from "./pages/Journey/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import News from "./pages/news/news";
import Error404 from "./pages/Error/Error";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParallaxScrollEffect />} />
        <Route path="/updates" element={<News />} />
        <Route path="/journey" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
