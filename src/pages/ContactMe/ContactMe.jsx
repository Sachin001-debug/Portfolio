import React from "react";
import "./ContactMe.css";
import Twitter from "../../assets/twitter_icon.png";
import Facebook from "../../assets/facebook_icon.png";
import Linkdien from "../../assets/linkedin_icon.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ContactMe = () => {
  return (
    <div className="contact-me" id="contact">
      <div className="contact-info">
        <h1>Contact Me</h1>

        <span>
          <i className="fa-solid fa-phone"></i> +977 9748807614
        </span>

        <span>
          <i className="fa-solid fa-envelope"></i> kharelsachin91@gmail.com
        </span>

        <div className="socailmedia">
          <a href="https://www.facebook.com/share/195rnW8zaU/"  target="_blank" rel="noopener noreferrer">
          <img src={Facebook} alt="" />
          </a>
          <img src={Twitter} alt="" />
          <a href="https://www.linkedin.com/in/sachin-kharel-6740382b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <img src={Linkdien} alt="" />
          </a>
        </div>
      </div>

      <div className="contact-form">
        <h3>Get In Touch</h3>

        <form>
          <input type="text" placeholder="Your Phone Number" required />

          <input type="email" placeholder="Your Email Address" required />

          <textarea
            placeholder="Describe your project or message..."
            rows="5"
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
