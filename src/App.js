import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Animations.css';

// Components
import Navbar from "./components/Navbar/Navbar.js";
import Introduction from "./components/Introduction/Introduction.js";
import ImageCollage from "./components/ImageCollage/ImageCollage.js";
import Skills from "./components/skills/skills.js";
import Footer from "./components/Footer/Footer.js";

// pages
import AboutPage from "./pages/AboutPage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import ExperencePage from "./pages/ExperiencePage.js";




function App() {
  return (

    <div className="white_background">
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<AboutPage/>}></Route>
          <Route path="/experience" element={<ExperencePage/>}></Route>
          <Route path="/projects" element={<ProjectsPage/>}></Route>
          <Route path="/" element={<ProjectsPage/>}></Route>
        </Routes>

      </Router>
    </div>
  </div>
  );
}

export default App;








