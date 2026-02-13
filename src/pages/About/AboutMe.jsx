import React, { useEffect, useRef, useState } from "react";
import "./AboutMe..css";

const AboutMe = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) setLeftVisible(true);
            if (entry.target === rightRef.current) setRightVisible(true);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 } 
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <div className="about-container">
      <div
        ref={leftRef}
        className={`about-left ${leftVisible ? "fade-in-component" : ""}`}
      >
        <h2>About Me</h2>
        <p>
          I'm a passionate <strong>MERN Stack Developer</strong> who loves
          building full-stack web applications.
        </p>
        <p>
          I work with MongoDB, Express.js, React, Node.js, HTML, and CSS to
          create scalable and modern web solutions.
        </p>
      </div>

      <div
        ref={rightRef}
        className={`about-right ${rightVisible ? "fade-in-component" : ""}`}
      >
        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML"
          />
          <p>HTML</p>
        </div>

        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
          />
          <p>CSS</p>
        </div>

        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <p>JavaScript</p>
        </div>

        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <p>React</p>
        </div>

        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node"
          />
          <p>Node.js</p>
        </div>

        <div className="tech-item express">
          <img
            src="https://camo.githubusercontent.com/c11f7ea3562755c1f38c4f21228c71772b6eb34365ee97802fe17028cee29ffc/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67"
            alt="Express"
          />
          <p>Express</p>
        </div>

        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
          />
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
