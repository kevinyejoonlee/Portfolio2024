import React, { useState, useEffect } from 'react';
import './Introduction.css';

const Introduction = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 903px)").matches);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id='Introduction'>
        <h1 className="name_title">
          {isMobile ? "Kevin Lee" : "Kevin (Ye-Joon) Lee"}
        </h1>
        <h1 className="job_title">
          {isMobile ? "Aspiring 10x SWE" : "Aspiring 10x Software Engineer"}
        </h1>npm
        <div className="maxwidth-60">
          <h1 className="paragraph">
            {isMobile ? (
              <a href="https://www.bible.com/bible/111/ROM.5.8">Romans 5:8<br></br>But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.</a>
            ) : (
              "Romans 5:8 - But God demonstrates his own love for us in this: While we were still sinners, Christ died for us."
            )}
          </h1>
        </div>

        <div className="socialMediaMenu_Container">
          {/* Your existing social media links */}
        </div>
    </section>
  );
}

export default Introduction;