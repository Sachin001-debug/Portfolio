import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Photo1 from "../../assets/photo1.png";
import Photo2 from "../../assets/photo2.png";
import Photo3 from "../../assets/photo3.png";
import Photo4 from "../../assets/photo4.png";
import Photo5 from "../../assets/photo5.png";
import Photo6 from "../../assets/photo6.png";
import Photo7 from "../../assets/photo7.png";
import Photo8 from "../../assets/photo8.png";

const Projects = () => {
  const aboutRef = useRef(null);
  const showcaseRef = useRef(null);
  const galleryRef = useRef(null);

  const [aboutVisible, setAboutVisible] = useState(false);
  const [showcaseVisible, setShowcaseVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === aboutRef.current) setAboutVisible(true);
            if (entry.target === showcaseRef.current) setShowcaseVisible(true);
            if (entry.target === galleryRef.current) setGalleryVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    [aboutRef, showcaseRef, galleryRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [aboutRef, showcaseRef, galleryRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const row1 = [Photo1, Photo2, Photo3, Photo4];
  const row2 = [Photo5, Photo8, Photo7, Photo6];

  return (
    <section className="aboutme" id="projects">
      <div className="content-wrapper">
        {/* Left column */}
        <div className="left-column">
          <div
            ref={aboutRef}
            className={`about ${aboutVisible ? "fade-in-component" : ""}`}
          >
            <h3>Projects</h3>
            <h3>Let's Work Together!</h3>
            <p>
              I am a motivated full-stack developer focused on building clean,
              responsive, and productive web applications. I am committed to
              continuous learning and delivering high-quality digital experiences
              through thoughtful design and efficient code.
            </p>

            <div className="cards">
              <div className="card">
                <a
                  href="https://github.com/Sachin001-debug/AuthUser"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-code"></i>
                  <span>Authentication</span>
                </a>
              </div>
              <div className="card">
                <a
                  href="https://github.com/Sachin001-debug/E-com_Website_Tomato"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-layer-group"></i>
                  <span>Fullstack Projects</span>
                </a>
              </div>
              <div className="card">
                <a
                  href="https://github.com/Sachin001-debug/E-com_Website_Tomato"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-desktop"></i>
                  <span>Frontend Projects</span>
                </a>
              </div>
            </div>

            <button className="cv">Download CV</button>
          </div>
        </div>

        {/* Right column */}
        <div className="right-column">
          <div
            ref={showcaseRef}
            className={`project-showcase ${showcaseVisible ? "fade-in-component" : ""}`}
          >
            <button className="project-showcase-button">Clones</button>
            <button className="project-showcase-button">Frontend</button>
            <button className="project-showcase-button">Ecommerce</button>
          </div>

          <div
            ref={galleryRef}
            className={`gallery ${galleryVisible ? "fade-in-component" : ""}`}
          >
            <h1 className="gallery-text">Gallery</h1>

            <div className="row1">
              {row1.map((src, i) => (
                <div
                  key={i}
                  className="gallery-item fade-in-component"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <img src={src} alt={`Project ${i + 1}`} />
                </div>
              ))}
            </div>

            <div className="row2">
              {row2.map((src, i) => (
                <div
                  key={i}
                  className="gallery-item fade-in-component"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <img src={src} alt={`Project ${i + 5}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;