import React from "react";
import "./Hirepopup.css";

const HirePopup = ({ showForm, setShowForm }) => {
 
  if (!showForm) return null;

  return (
    
    <div className="hire-form">
      <div className="form-box">
        <h2>Hire Me</h2>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="tel" placeholder="Phone Number" />
        <textarea placeholder="Project Details"></textarea>

        <div className="form-actions">
          <button className="send">Send</button>
          <button className="close" onClick={() => setShowForm(false)} > Close  </button>
        </div>
      </div>
    </div>
  );
};

export default HirePopup;
