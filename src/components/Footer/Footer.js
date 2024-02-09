import React from 'react';
import './Footer.css';

var current_year = new Date().getFullYear();

const Footer = () => {
  return (
   
    <section id='Footer'>
        <div class="footer_links_container">
          <a href="">About</a>
          <a href="">Experience</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <div class="copyright">© {current_year} Kevin Yejoon Lee. All rights reserved.</div>
        </div>


    </section>
    
  )
}

export default Footer;
