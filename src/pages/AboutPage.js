
import React from 'react';

// Components
import Navbar from "../components/Navbar/Navbar.js";
import Introduction from "../components/Introduction/Introduction.js";
import ImageCollage from "../components/ImageCollage/ImageCollage.js";
import Skills from "../components/skills/skills.js";
import Footer from "../components/Footer/Footer.js";


function AboutPage() {
  return (
    <page>
      <Navbar/>
      <Introduction/>
      <ImageCollage/>
      <Skills/>  
      <Footer/>
    </page>
  );
}

export default AboutPage;
