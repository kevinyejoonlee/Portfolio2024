import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom'; // Import NavLink
import sun from "../../assets/symbols/sun.svg";
import moon from "../../assets/symbols/moon.svg";

const Navbar = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const icon = document.getElementById("toggle_icon");
    icon.src = theme === 'dark' ? moon : sun;
    document.body.classList.toggle("dark_theme", theme === 'dark');
    localStorage.setItem('theme', theme); 
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme); 
      return newTheme;
    });
  };

  return (
    <nav className='Navbar'>
      <div></div>

      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem Home" >Home</Link>
        <NavLink to="/experience" className="desktopMenuListItem" activeClassName="activeLink">Experience</NavLink>
        <NavLink to="/projects" className="desktopMenuListItem " activeClassName="activeLink">Projects</NavLink>
        <NavLink to="https://drive.google.com/file/d/1F0GIoTV6Afzt9QKBjEwUmrRSdOtqbLVS/view?usp=sharing" className="desktopMenuListItem" activeClassName="activeLink">Resume</NavLink> 
      </div>

      <button onClick={toggleTheme} id="apperance_b">
        <img id="toggle_icon" className="apperance_icon" src={theme === 'light' ? sun : moon} alt="Toggle theme" />
      </button>
    </nav>
  );
};

export default Navbar;
