import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom'; 
var current_year = new Date().getFullYear();

const Footer = () => {
  return (
   
    <section id='Footer'>
        <div class="footer_links_container">
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/experience" activeClassName="activeLink">Experience</NavLink>
          <NavLink to="/projects" activeClassName="activeLink">Projects</NavLink>
          <NavLink to="https://drive.google.com/file/d/1qezEVVV9De76aoAdJ1X0Ib05PZ0K7A84/view?usp=sharing"  activeClassName="activeLink">Resume</NavLink> 
          <div class="copyright">© {current_year} Kevin Yejoon Lee. All rights reserved.</div>
        </div>


    </section>
    
  )
}

export default Footer;
