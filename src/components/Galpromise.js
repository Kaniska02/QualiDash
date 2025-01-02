import React from "react";
import "./Galpromise.css";
import founderImage from "../assets/founder.jpeg"; 

const Galpromise = () => {
  return (
    <div className="promise-container">
      <header className="header">
        <h1 className="title">The QualiDash Promise</h1>
      </header>

      <main className="content">
        <p className="welcome-message">
          Welcome to QualiDash! I’m really glad you are here. From the very beginning, we’ve worked hard to build a special solution with one simple mantra: Empowered manufacturers create superior products. Our mission is to make it easy for manufacturers to deliver exceptional quality while optimizing processes.
        </p>

        <p className="belief">
          We believe that you deserve to achieve precision, consistency, and efficiency in quality control—no matter the scale of your operations, whether you’re a small facility or a global manufacturing leader. We also believe that every manufacturer deserves access to cutting-edge tools that are reliable, intuitive, and cost-effective.
        </p>

        <p className="quote-intro">And we make this happen, every day.</p>

        <section className="quote-section">
          <blockquote className="quote">
            <p>
              " We go the extra mile to meet your needs and proactively work with you to achieve the results you want. Your success is our success."
            </p>
          </blockquote>
        </section>

        <p className="additional-info">
          We deliver intuitive and modern products designed with the end-user in mind. That means they are easy to try, easy to buy, and easy to use—even without any prior training or expertise.
        </p>

        <div className="image-container">
          <img src={founderImage} alt="Girish Mathrubootham" className="responsive-img" />
          <p className="final-message">
            We promise to provide the right tools to help you create consistently superior products and build customer trust.
            <br /><br />
            We are in the business of redefining manufacturing quality, empowering you to achieve excellence every step of the way.
            <br /><br />
            Regards,
            <br /><br />
            Grace
            <br />
            Founder and Executive Chairman
          </p>
        </div>
      </main>
    </div>
  );
};

export default Galpromise;