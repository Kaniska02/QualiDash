import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';
import aboutImage from '../assets/header-bg.webp';
import companyVideo from '../assets/abt.mp4'; 
import i1 from "../assets/tcs.png";
import i2 from "../assets/Schneider_Electric.png";
import i3 from "../assets/Hexagon.webp";
import i4 from "../assets/GE-Symbol.png";
import i5 from "../assets/ford.jpg";
import i6 from "../assets/Bosch_Rexroth.png";
import i7 from "../assets/Cognex.png";
import { FaArrowUp } from 'react-icons/fa'; 
import founderImage from "../assets/founder.jpeg"; 
import { Link } from 'react-router-dom'; 

const images = [i1, i2, i3, i4, i5, i6, i7];

function About() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    fadeIn: { opacity: [0, 1] },
    slideInLeft: { x: [-100, 0], opacity: [0, 1] },
    slideInRight: { x: [100, 0], opacity: [0, 1] },
    bounceIn: {
      scale: [0.5, 1.1, 1],
      opacity: [0, 1],
    },
    valuesFadeIn: { y: [100, 0], opacity: [0, 1] },
  };
  
  const sectionTransition = {
    duration: 1.5,
    ease: 'easeInOut',
  };
  

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={animationVariants}
        transition={sectionTransition}
      >
        <img
          src={aboutImage}
          alt="Manufacturing Excellence"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Ensuring Perfection, Empowering Production</h1>
        </div>
      </motion.div>

      {/* About Us Section */}
      <motion.section
        className="about-section abt-container"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={animationVariants}
        transition={sectionTransition}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="about-heading">About Us</h2>
        <p>
          Welcome to <strong className="strong">QUALIDASH</strong>—your trusted partner in automated product quality
          control for manufacturing industries. With over 10 years of expertise, we specialize
          in leveraging real-time analytics, AI-driven insights, and intuitive dashboards to
          streamline quality control processes.
        </p><br></br>
        <p>
          In today’s fast-paced manufacturing world, ensuring flawless product quality is critical
          to meeting customer demands and industry standards. At <strong>QualiDash</strong>, we
          are committed to helping industries achieve unparalleled efficiency and accuracy,
          empowering them to redefine quality and exceed expectations. Let us transform your
          manufacturing operations into a benchmark of excellence!
        </p>
      </motion.section>

      {/* our features section*/ }
      <motion.section
  className="values-section abt-container"
  initial="hidden"
  whileInView="visible"
  exit="exit"
  variants={animationVariants}
  transition={sectionTransition}
  viewport={{ once: true, amount: 0.5 }}
>
  <h2 className="values-heading">Our Features</h2>
  <ul className="custom-list">
    <li>
      <strong>Batch Tracking:</strong> Tracks each batch's production data, allowing easy identification of defects or irregularities.
    </li>
    <li>
      <strong>Quality Reports:</strong> Generates detailed quality reports, including pass/fail rates, defect types, and trends over time.
    </li>
    <li>
      <strong>User Permissions:</strong> Different access levels for production managers, quality control engineers, and operators.
    </li>
    <li>
      <strong>Audit Trail:</strong> Maintains a log of quality checks and corrective actions for compliance and auditing purposes.
    </li>
  </ul>
</motion.section>


      {/* Our Story Section */}
      <motion.section
        className="story-section abt-container"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={animationVariants}
        transition={sectionTransition}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="story-heading">Our Story</h2>
        <p>
          At <strong className="strong">QualiDash</strong>, we identified a significant gap in manufacturing systems:
          manual quality control processes that cause delays, inaccuracies, and production losses.
        </p><br></br>
        <p>
          Our innovative solution seamlessly integrates into manufacturing workflows to deliver
          instant defect detection, live data-driven dashboards, and actionable insights to optimize
          productivity and reduce errors.
        </p><br></br>
        <p>
          Designed for small-scale manufacturers and large enterprises alike, QualiDash is
          revolutionizing quality control to ensure production excellence and efficiency.
        </p>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="vision-section abt-container"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={animationVariants}
        transition={sectionTransition}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="vision-heading">Our Vision</h2>
        <p>
          We strive to make zero-defect manufacturing a reality, enabling industries to deliver
          superior products while minimizing costs and resource waste.
        </p>
        <ul className="custom-list">
          <li>Empowering manufacturers with smart automation to eliminate inefficiencies.</li>
          <li>Using AI-based analysis for real-time quality monitoring.</li>
          <li>Providing scalable dashboards tailored for industries of all sizes.</li>
        </ul>
      </motion.section>

      {/* Company Video Section */}
      <motion.section
        className="company-video-section abt-container"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={animationVariants}
        transition={sectionTransition}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="company-video-heading">Our Work</h2>
        <p>📽 Watch Our Work in Action</p>
        <video width="100%" controls>
          <source src={companyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="values-section abt-container"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={animationVariants}
        transition={sectionTransition}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="values-heading">Our Values</h2>
        <ul className="custom-list">
          <li>
            <strong>Innovation:</strong> Pioneering advanced technologies for a smarter future.
          </li>
          <li>
            <strong>Integrity:</strong> Building trust through transparent and reliable solutions.
          </li>
          <li>
            <strong>Collaboration:</strong> Partnering with manufacturers to drive success.
          </li>
          <li>
            <strong>Excellence:</strong> Commitment to delivering top-notch quality at every step.
          </li>
        </ul>
      </motion.section>
  
      {/* Promise Section */}
      <motion.section
          className="promise-section"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={animationVariants}
          transition={sectionTransition}
          viewport={{ once: true, amount: 0.5 }}
        >
        <div className="testimonial-container">
          <div className="testimonial-text">
            <blockquote>
              <p>
                <h1>&#8220;</h1><b>We go the extra mile to meet your needs and proactively work with you to achieve the results you want. Your success is our success.</b>
              </p>
            </blockquote>
            <cite>
              Grace<br />
              Founder and Executive Chairman, QualiDash
            </cite ><br></br>
            <a href="#" className="promise-link" onClick={scrollToTop}><Link to="/galpromise">The QualiDash promise</Link></a>
          </div>
          <div className="testimonial-image">
            <img src={founderImage} alt="Grace" />
          </div>
        </div>
      </motion.section>

      {/* Collaborations Section */}
      <div id="sponsors">
        <div className="h2">
          <h1 className="home1">Our Collaborations</h1>
          <div className="image-slider">
            <div className="image-slider-track">
              {images.concat(images).map((image, index) => (
                <div className="slide" key={index}>
                  <img id="home-img" src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default About;
