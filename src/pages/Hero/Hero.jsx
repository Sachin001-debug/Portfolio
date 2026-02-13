
import "./Hero.css";
import HeroImage from "../../assets/ChatGPT Image Jan 14, 2026, 04_34_59 PM.png";
import HeroVideo from "../../assets/herovideo.mp4";



const Hero = ({setShowForm}) => {
  

  return (
    <>
      <div className="hero" id="hero">
        {/* Background video */}
        <video className="hero-video" autoPlay loop muted>
          <source src={HeroVideo} type="video/mp4" />
        </video>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-text fade-in">
            <h1>Hi, I'm Sachin Kharel</h1>
            <h3>Fullstack Developer</h3>
            <p>Creating interactive and engaging experience for web platforms...</p>

            <div className="hero-btn">
              <button className="hireme" onClick={() => setShowForm(true)}>
                Hire Me!
              </button>
              <button className="contact">Contact</button>
            </div>

            <div className="hero-data">
              <div className="data-container">
                <p className="number">1.5+</p>
                <span>year in dev</span>
              </div>

              <div className="data-container">
                <p className="number">30+</p>
                <span>small and big projects</span>
              </div>

              <div className="data-container">
                <p className="number">∞</p>
                <span>Forever Learning</span>
              </div>
            </div>
          </div>

          <div className="hero-img fade-in">
            <img src={HeroImage} alt="Animated Hero" />
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Hero;
