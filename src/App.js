import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
        <Route path="/Dr_Sailesh_Samal_Portfolio" element={<ParallaxScrollEffect />} />
        <Route path="/Dr_Sailesh_Samal_Portfolio/updates" element={<News />} />
        <Route path="/Dr_Sailesh_Samal_Portfolio/journey" element={<Skills />} />
        <Route path="/Dr_Sailesh_Samal_Portfolio/project" element={<Projects />} />
        <Route path="/Dr_Sailesh_Samal_Portfolio/contact" element={<Contact />} />
        <Route path="/*" element={<Navigate to="/" replace/>} />
      </Routes>
    </Router>
  );
};

export default App;
