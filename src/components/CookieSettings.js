import React, { useEffect, useState } from "react";
import "./CookieSettings.css";
import cookieImage from "../assets/QD.png"; 
import { Link, useNavigate } from "react-router-dom"; 

const CookieSettings = ({ toggleSettings }) => {
  const [isHiding, setIsHiding] = useState(false);
  const [isChecked, setIsChecked] = useState({
    "Performance-cookies": false,
    "analytics-cookies": false,
    "functional-cookies": false,
  });
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenCookiePopup");
    if (!hasSeenPopup) {
      toggleSettings(true); 
    }
  }, [toggleSettings]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setIsChecked((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleClose = () => {
    setIsHiding(true); 
    setTimeout(() => {
      toggleSettings(false); 
      localStorage.setItem("hasSeenCookiePopup", "true"); 
    }, 500); 
  };

  const handleSaveSettings = () => {
    if (Object.values(isChecked).includes(true)) {
      setIsHiding(true); 
      setTimeout(() => {
        toggleSettings(false); 
        localStorage.setItem("hasSeenCookiePopup", "true"); 
      }, 500);
    } else {
      setErrorMessage("Please select at least one cookie preference.");
    }
  };

  const handlePolicyLinkClick = () => {
    setIsHiding(true); 
    setTimeout(() => {
      toggleSettings(false); 
      localStorage.setItem("hasSeenCookiePopup", "true"); 
      navigate("/cookie-policy"); 
    }, 500); 
  };

  return (
    <>
      <div className="cookie-settings-overlay"></div>
      <div className={`cookie-settings-box ${isHiding ? "hide" : "show"}`}>
        <div className="cookie-settings-content">
          {/* Cookie image */}
          <img src={cookieImage} alt="Cookie Illustration" className="cookie-image" />
          {/* Close button */}
          <span className="close-button" onClick={handleClose}>&times;</span>
          <h1 id="cs-h1">Cookie Settings</h1>
          <p id="cs-p">Here you can customize your cookie preferences:</p>
          <div>
            <label>
              <input
                type="checkbox"
                name="Performance-cookies"
                checked={isChecked["Performance-cookies"]}
                onChange={handleCheckboxChange}
              />
              Performance Cookies
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="analytics-cookies"
                checked={isChecked["analytics-cookies"]}
                onChange={handleCheckboxChange}
              />
              Analytics Cookies
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="functional-cookies"
                checked={isChecked["functional-cookies"]}
                onChange={handleCheckboxChange}
              />
              Functional Cookies
            </label>
          </div>

          {errorMessage && <p id="cs-p" className="error-message">{errorMessage}</p>}
          <button onClick={handleSaveSettings}>Save Settings</button>

          <div className="cookies-policy">
            <p id="cs-p">
              By using this site, you consent to our use of cookies. For more information, please visit our{" "}
              <Link to="/cookie-policy" onClick={handlePolicyLinkClick}>Cookie Policy</Link> page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieSettings;
