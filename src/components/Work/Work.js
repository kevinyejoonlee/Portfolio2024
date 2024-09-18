import React, { useState } from 'react';
import './Work.css';


// import workpng from "../../assets/symbols/Work.png";
// import downloadCSV from "../../assets/symbols/downloadCSV.png";


const jobs = {


  ctrl: {
    Company: 'CTRL + Y',
    Title: "Web Developer",
    date: "October 2023 – Jan 2024",
    details: [
        "• Developed and launched a responsive website using Vue.Js by incorporating design elements and accessibility features.",
        "• Led the design and implementation of user-centric features to enhance the mobile user interface, resulting in improved usability and engagement.",
        "• Collaborated with teams to resolve development issues and drive continuous improvement of project outcomes.",
        "• Created a dedicated sponsor blurb section with dynamic elements for an engaging home landing experience."
      ]
  
  },

  WLU: {
    Company: 'Wilfrid Laurier University',
    Title: 'Programming Instructor',
    date: "May 2023 – October 2023",
    details: [
        "• Facilitated student’s learning one-on-one and in group settings, teaching Data Structures and Algorithms, Python, Java, Digital Electronics, and Assembly programming concepts, improving student’s understanding and practical skills.",
        "• Evaluated and orchestrated weekly laboratory sessions for over 60 students, providing feedback and fostering active engagement, enhancing hands-on learning and student participation.",
        "• Collaborated with the lead professor to prepare and organize instructional materials, resources, and activities for over 500 students, enhancing the quality and structure of the course content."
      ]
    },

    Extra: {
    Company: 'Other',
    Title: 'Extracuricular & Certifications',
    date: "",
    details: [
      "• Jarvis Tech Hackathon - 2nd Place",
      "• Full Stack Web Development Bootcamp Udemy - Dr. Angela Yu",
      "• Laurier Campus Ambassador - Jarvis Consulting Group",
      "• Kingdom Come - Praise Leader & Small Groups Leader",
      "• Sheepgate Fellowship Church - Turkey Missions & Earthquake Relief Work"]
    
  
  
  }
};

function WorkExperience() {
  const [activeJob, setActiveJob] = useState('ctrl');
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
        <p className="paragraph">Here are my experiences.</p>
      </div>
        <div className="workExperience_container">
        
            {WorkExperience()}
        </div>
    </section>
  )
}

export default Work;



