import React, { useState } from "react";
import "./CookiePolicy.css"; 
import cookieImage from "../assets/QD.png"; 


const CookiesPolicy = () => {
  const [isVisible, setIsVisible] = useState(true); 

  if (!isVisible) return null; 

  const cookieTypes = [
    { name: "Performance Cookies", description: "Used to collect information on how users interact with the quality control dashboard, helping to improve performance.", duration: "Up to 2 years" },
    { name: "Analytics Cookies", description: "Used to track user behavior for improving site performance.", duration: "Up to 2 years" },
    { name: "Functional Cookies", description: "Used to enhance functionality, such as remembering language preferences.", duration: "Session-based" },
    { name: "Essential Cookies", description: "Necessary for the website to function properly, like login authentication.", duration: "Session-based" },
  ];

  return (
    <div className="cookies-policy-page">
      
      <div className="cookie-image-container">
        <img src={cookieImage} alt="Cookie Illustration" className="cookie-image" />
      </div>
      <h1 id="cp-h1" className="fade-in">Cookies Policy</h1>
      <p id="cp-p" className="fade-in">Our website uses cookies to enhance your experience. Below is a list of cookies we use and their purposes.</p>

      {/* Introduction Section */}
      <section className="intro-section fade-in">
        <h2 id="cp-h2">What Are Cookies?</h2>
        <p id="cp-p">
          Cookies are small text files that are placed on your device when you visit a website. They are used to store information such as login credentials, user preferences, and browsing history.
        </p>
        <p id="cp-p">
          Cookies help us enhance your browsing experience by remembering your preferences and enabling certain website functionalities.
        </p>
      </section>

      {/* Cookie Types Table */}
      <section className="cookie-types fade-in">
        <h2 id="cp-h2">Types of Cookies We Use</h2>
        <table className="cookies-table">
          <thead>
            <tr>
              <th>Cookie Type</th>
              <th>Description</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {cookieTypes.map((cookie, index) => (
              <tr key={index}>
                <td>{cookie.name}</td>
                <td>{cookie.description}</td>
                <td>{cookie.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* How to Control Cookies Section */}
      <section className="control-cookies fade-in">
        <h2 id="cp-h2">How to Control Cookies</h2>
        <p id="cp-p">
          You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and parts of this website may no longer be fully accessible.
        </p>
        <ul>
          <li>
            <strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings. You can disable cookies, delete existing ones, or set your browser to notify you when cookies are being used.
          </li>
          <li>
            <strong>Cookie Settings:</strong> You can also manage your cookie preferences directly through our Cookie Settings panel on the website. This allows you to choose the types of cookies you want to accept.
          </li>
        </ul>
      </section>

      {/* Third-Party Cookies Section */}
      <section className="third-party-cookies fade-in">
        <h2 id="cp-h2">Third-Party Cookies</h2>
        <p id="cp-p">
          Our website may contain links to third-party websites or services that use cookies. These third-party cookies are not controlled by us and are subject to the privacy policies of the respective third parties.
        </p>
      </section>

      {/* Privacy Policy Link */}
      <section className="privacy-policy-link fade-in">
        <p id="cp-p">
          For more detailed information on how we use your data, please refer to our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </section>

      {/* Contact Information */}
      <section className="contact-info fade-in">
        <h2 id="cp-h2">Contact Us</h2>
        <p id="cp-p">
          If you have any questions or concerns about our Cookies Policy, please feel free to contact us at:
        </p>
        <p id="cp-p">Email: <a href="mailto:contactqualidash@gmail.com">contactqualidash@gmail.com</a></p>
        <p id="cp-p">Phone: +91-9876543210</p>
      </section>
    </div>
  );
};

export default CookiesPolicy;
