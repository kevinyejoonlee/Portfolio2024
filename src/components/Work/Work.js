import React, { useState } from 'react';
import './Work.css';


import workpng from "../../assets/symbols/Work.png";
import downloadCSV from "../../assets/symbols/downloadCSV.png";


const jobs = {


  kc: {
    Company: 'Kingdom Come',
    Title: 'Software Developer ',
    date: "Jan 2024 – Present",
    details: [
        "•	Assisting a lead developer in devising solutions to automate club operations and streamlining routine administrative tasks.",
       "• Engineered a novel application that converts music lyrics into dynamic slideshows, enhancing the visual experience of song presentations and performances.",
       "• Implemented an interactive feedback system within the club’s app, allowing for real-time member engagement and continuous improvement of club activities."
      ]
  
  },

  ctrl: {
    Company: 'CTRL + Y',
    Title: "Web Developer",
    date: "October 2023 – Jan 2024",
   
    details: ["• Built a dedicated sponsor blurb section with interactive elements using Vue.js for the home landing page.",
        "• Collaborated with teams to quickly resolve development issues and enhance continuous improvement of project outcomes",
        "• Employed media CSS techniques for responsive design, achieving high consistency across various browsers and devices",
        "• Assigned to lead the design and implementation of user-centric features to enhance the mobile user interface on the website"]
  
  },

  WLU: {
    Company: 'Wilfrid Laurier University',
    Title: 'Teaching & Instructional Lab Assistant, Exam Proctor ',
    date: "May 2023 – October 2023",
    details: [
        "• Managed the grading process of assignments, personalized feedback for 75+ students within a 3-day turnaround.",
        "• Focused on providing teaching assistance for courses that matched personal academic interests, like Python, Java, Digital Electronics, & Assembly programming.",
        "• Evaluated and orchestrated weekly laboratory sessions for a diverse group of 30+ students, providing insightful feedback and fostering active engagement.",
        "• Selected by the Administrator for exceptional academic performance, lead to a return invitation for another term."
      ],

  Chatime: {
    Company: 'Kinc',
    Title: 'Softwae Developer ',
    date: "Jan 202– Present",
    details: [
        "•	Axvising solutions to automate club operations and streamlining routine administrative tasks.",
        
      ]
      
      },
  
  }
};

function WorkExperience() {
  const [activeJob, setActiveJob] = useState('kc');
  return (

    <div className="job_Container">
      <div className='job_buttons'>
        {Object.keys(jobs).map((jobKey) => (
          <button  key={jobKey} onClick={() => setActiveJob(jobKey)} className={activeJob === jobKey ? 'activebutton' : ''}>
            {jobs[jobKey].Company}
          </button>
        ))}
      </div>

        <div id='details_container'>
            <h1 className="activeJobTitle">{jobs[activeJob].Title}</h1>
            <span className="date">{jobs[activeJob].date}</span>
            {jobs[activeJob].details.map((detail, index) => (
                <p className="bulletpoints" key={index}>{detail}</p>
            ))}
        </div>
    </div>
  );
}


const Work = () => {
  return (
    <section id='work'>
      <div className="maxwidth-60">
        <h1 className="title">Experience</h1>
        <p className="paragraph">Here are a few of my work experiences.</p>
      </div>
        <div className="workExperience_container">
        
            {WorkExperience()}
        </div>
    </section>
  )
}

export default Work;



// future
{/* <button id="downloadButton">Download CSV <img id="downloadpng" src={downloadCSV} alt="download svg"></img></button> */}

{/* <div class="contact_container">
            <img class= "svg" src="" alt="Email Kevin"></img>
            <h1 >Email.</h1>
            <p>Send a direct Email to Kevin.</p>
            <input class= "input" type="text" placeholder="Your Email"></input>
            <input class= "input body" type="text" placeholder="Message"></input>
            <button >Send</button>
        </div> */}