import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

import './Projects.css';
import link from "../../assets/symbols/link.svg";
import autoscore from "../../assets/symbols/autoscore.png";
import memegame from "../../assets/symbols/memegame.jpg";
import portfolio from "../../assets/symbols/portfolio.jpg";
import ctrl_y from "../../assets/symbols/ctrl_y.jpg";
import todo from "../../assets/symbols/todo.jpeg";
// import comingSoon from "../../assets/symbols/coming_soon.png"; 
import Türkyie from "../../assets/symbols/turkey.jpg"; 
import TeamFlow from "../../assets/symbols/TeamFlow.jpeg"; 


const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current.forEach(ref => {
      VanillaTilt.init(ref, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    });
  }, []);

  const projects = [
    
    {
      image: TeamFlow,
      title: "TeamFlow",
      description: "TeamFlow is a Remote Collaboration Platform that allows a team to work together in real-time. The platform uses collaborative document editing, enabling multiple users to edit documents simultaneously and efficiently.",
      skills: ["#React/Redux", "#WebSocket's, WebRTC", "#PostgreSQL", "#Django Restful APIs"],
      githubLink: "https://github.com/kevinyejoonlee/Remote-Collaboration-Platform",
      liveLink: ""
    },{
      image: autoscore,
      title: "AutoScore",
      description: "This project aids teaching assistance by automating the process of grading assignments for a Java course, marking the code, and seamlessly submitting the grades to MyLearningSpace.",
      skills: ["#JFrames", "#AbstractSyntaxTrees", "#JUnitTesting", "#Agile"],
      githubLink: "https://github.com/kevinyejoonlee/AutoScore",
      liveLink: ""
    },
    {
      image: ctrl_y,
      title: "CTRL + Y",
      description: "UW Designathon 2023 repo CTRL + y is a designathon with the focus of designing innovative solutions for the rapidly evolving future of tech.",
      skills: ["#Vue.js", "#DesignathonGroup"],
      githubLink: "https://github.com/uwctrl-y/uwctrly",
      liveLink: "https://ctrlplusy.ca/"
    }
    ,
    {
      image: memegame,
      title: "Meme-Memory",
      description: "Meme-Memory is an innovative and fun memory game that combines the classic challenge of 'Simon Says' with the vibrant culture of internet memes.",
      skills: ["#jQuery", "#HTML", "#CSS"],
      githubLink: "https://github.com/kevinyejoonlee/Meme-Memory-Game",
      liveLink: "https://kevinyejoonlee.github.io/Meme-Memory-Game/"
    },
    {
      image: Türkyie,
      title: "Fundraiser Tracker",
      description: " A website that connects to Google Sheets to generate a doughnut chart for tracking fundraising progress.",
      skills: ["#React.js", "#GoogleSheetsAPI"],
      githubLink: "https://github.com/kevinyejoonlee/Turkey-Fundraise-Website",
      liveLink: "https://kevinyejoonlee.github.io/Turkey-Fundraise-Website/"
    },
    {
      image: todo,
      title: "To Do List",
      description: "Created a to do list application. Using Express.js and EJS. Replicated client and server side requests and responses.",
      skills: ["#Express.js", "#EmbeddedJavaScript", "#HTTP"],
      githubLink: "https://github.com/kevinyejoonlee/to-do-list",
      liveLink: ""
    }
    ,{
      image: portfolio,
      title: "Portfolio Website",
      description: "Developed a portfolio web application tailored to showcase professional and creative work in a visually engaging and organized manner. Inspired by Tailwind UI Spotlight.",
      skills: ["#React.js", "#Node.js", "#Firebase", "#InspiredByTailwindUI"],
      githubLink: "https://github.com/kevinyejoonlee/Kevin_Portfolio2024",
      liveLink: "https://kevinyejoonlee.com/"
    }
  ];

  return (
    <section id='Body'>
      <div className="maxwidth-60 margin-title">
        <h1 className='name_title'>Projects</h1>
        <h1 className="paragraph">
          Here are my projects.
        </h1>
      </div>

      <section className="Projects_Container">
        {projects.map((project, index) => (
          <div className="Project_items" key={index} ref={el => projectRefs.current[index] = el}>
            <h1 className="project_title">{project.title}</h1>
            <img className="project_image" src={project.image} alt={project.title} />
            <p className="project_description">{project.description}</p>
            <div className="project_skills">{project.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
            <div className="buttons_container">
              {project.liveLink && (
                <a href={project.liveLink} className="button see_live">See Live</a>
              )}
              <a className="github_link" href={project.githubLink}>
                <img className="linkImg" src={link} alt="Link icon" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Projects;
