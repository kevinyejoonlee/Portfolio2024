import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom'; 
import sun from "../../assets/symbols/sun.svg";
import moon from "../../assets/symbols/moon.svg";

const Navbar = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  var [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const icon = document.getElementById("toggle_icon");
    icon.src = theme === 'light' ? moon : sun;
    document.body.classList.toggle("light_theme", theme === 'dark');
    localStorage.setItem('theme', theme); 
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme); 
      return newTheme;
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);

  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };


  return (
    <nav className='Navbar'>
      <div></div>

      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem Home">Home</Link>
        <NavLink to="/experience" className="desktopMenuListItem" activeClassName="activeLink">Experience</NavLink>
        <NavLink to="/projects" className="desktopMenuListItem" activeClassName="activeLink">Projects</NavLink>
        <NavLink to="https://drive.google.com/file/d/1F0GIoTV6Afzt9QKBjEwUmrRSdOtqbLVS/view?usp=sharing" className="desktopMenuListItem" activeClassName="activeLink">Resume</NavLink> 
      </div>

      <button class="Hamburger" onClick={toggleMenu}>
        Menu
        <svg viewBox="0 0 8 6" aria-hidden="true" className="Hamburger_icon">
          <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>

      <div className={`HamburgerMenu ${isMenuOpen ? '' : 'hidden'}`}>
        <div>
          <h1 class="navtitle">Navigation</h1>

          <button class="exit-button" onClick={toggleMenu}>
            <svg width="1rem" height="1rem" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path class="exit_icon" d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5" stroke="#000000"/></svg>
          </button>
        </div>
        
          <NavLink to="/" className="HamburgerMenuItem" activeClassName="actactiveLinkive" onClick={handleMenuItemClick}>Home</NavLink>
          <NavLink to="/experience" className="HamburgerMenuItem" activeClassName="activeLink" onClick={handleMenuItemClick}>Experience</NavLink>
          <NavLink to="/projects" className="HamburgerMenuItem" activeClassName="activeLink" onClick={handleMenuItemClick}>Projects</NavLink>
          <NavLink to="https://drive.google.com/file/d/1F0GIoTV6Afzt9QKBjEwUmrRSdOtqbLVS/view?usp=sharing" className="HamburgerMenuItem" onClick={handleMenuItemClick} >Resume</NavLink> 
      </div>
       
      <button onClick={toggleTheme} id="apperance_b">
        <img id="toggle_icon" className="apperance_icon" src={theme === 'light' ? moon : sun} alt="Toggle theme" />
      </button>
    </nav>
  );
};

export default Navbar;
