import React, { useState, useEffect } from 'react';
import './CookieConsent.css';
import cookieImage from '../assets/QD.png'; 

const CookieConsent = ({ toggleSettings }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true); 
    }
  }, []);

  const handleConsent = (choice) => {
    console.log(`User chose: ${choice}`);
    if (choice === 'I want to choose') {
      toggleSettings(); 
    }
    localStorage.setItem('cookieConsent', choice); 
    setIsVisible(false); 
  };

  return (
    isVisible && (
      <>
        <div className="overlay"></div>
        <div className="cookie-consent">
          <div className="cookie-content">
            <img
              src={cookieImage}
              alt="Cute cookie illustration"
              className="cookie-image"
            />
            <h2 id="cc-p">Hi there!</h2>
            <p id="cp-p">
              At Qulidash, we use cookies on our site: they help us keep our website
              secure, give you a better experience, and show more relevant
              advertising.
            </p>
            <div className="cookie-buttons">
              <button onClick={() => handleConsent('No, thanks')}>No, thanks</button>
              <button onClick={() => handleConsent('I want to choose')}>
                I want to choose
              </button>
              <button onClick={() => handleConsent('OK!')} className="ok-button">
                OK!
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default CookieConsent;
