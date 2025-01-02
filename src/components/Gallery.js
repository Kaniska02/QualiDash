import React, { useEffect, useState } from "react";
import "./Gallery.css";
import galleryImage from "../assets/gallerytop.jpeg";
import teamImage1 from "../assets/team1.jpeg";
import teamImage2 from "../assets/team2.jpeg";
import teamImage3 from "../assets/team3.jpeg";
import teamImage4 from "../assets/team4.jpeg";
import teamImage5 from "../assets/team5.jpeg";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { FaArrowUp } from 'react-icons/fa'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  faRobot,
  faChartBar,
  faCog,
  faSlidersH,
  faLeaf,
  faCogs,
  faClock,
  faExpand,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegStar } from "@fortawesome/free-regular-svg-icons";

const teamImages = [teamImage1, teamImage2, teamImage3, teamImage4, teamImage5];
const galleryImages = [img1, img2, img3];
const galleryTexts = [
  <>
    <h3 id="gal-txt"><b>Visuals of the Dashboard</b></h3>
    <ul>
      <li> <span className="g-black-text"><b>Interactive Graphs and Charts:</b></span> Display key performance indicators (KPIs), defect trends, and quality metrics in a visually appealing way to highlight the dashboard's data-driven insights.</li>
      <li> <span className="g-black-text"><b>Real-Time Monitoring Screens:</b></span> Showcase live updates of quality control processes to emphasize the dashboard’s dynamic capabilities.</li>
      <li> <span className="g-black-text"><b>Customization Options:</b></span> Illustrate the ability to tailor the dashboard view with widgets, themes, and personalized layouts.</li>
    </ul>
  </>,
  <>
    <h3 id="gal-txt"><b>Technology in Action</b></h3>
    <ul>
      <li> <span className="g-black-text"><b>AI-Powered Quality Detection:</b></span> Include visuals or videos of AI systems identifying and classifying defects with precision.</li>
      <li> <span className="g-black-text"><b>Integration of IoT Devices:</b></span> Highlight how IoT devices capture real-time data, showcasing sensors and connected systems in manufacturing.</li>
      <li> <span className="g-black-text"><b>Automation Workflows:</b></span> Show how automation tools streamline repetitive tasks and enhance overall efficiency.</li>
    </ul>
  </>,
  <>
    <h3 id="gal-txt"><b>Comparison of Manual vs. Automated Quality Control</b></h3>
    <ul>
      <li> <span className="g-black-text"><b>Efficiency Gains:</b></span> Visual comparisons of task completion times for manual versus automated processes, such as product inspections.</li>
      <li> <span className="g-black-text"><b>Accuracy Improvements:</b></span> Charts or infographics demonstrating reduced error rates with automated quality control systems.</li>
      <li> <span className="g-black-text"><b>Cost and Resource Savings:</b></span> Illustrate resource allocation before and after automation, showing financial and time-saving benefits.</li>
    </ul>
  </>
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
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
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentGalleryIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentGalleryIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="g-gallery-container">
      {/* Full-width image section */}
      <div className="g-full-width-image-container">
        <img src={galleryImage} alt="Gallery" className="g-full-width-image" />
      </div>

      {/* Our Team section */}
      <div className="g-team-section">
        <h2 className="g-team-title">Our Team</h2>
        <div className="g-carousel-container">
          {teamImages.map((image, index) => (
            <div
              key={index}
              className={`g-carousel-image-wrapper ${index === currentImageIndex ? "g-active" : ""}`}
            >
              <img
                src={image}
                alt={`Team ${index + 1}`}
                className="g-carousel-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="g-services-section">
        <div className="g-services-container">
          <h2 className="g-section-title">What We Do?</h2>
          <div className="g-service-item">
            <div className="g-service-icon-container">
              <FontAwesomeIcon icon={faRobot} className="g-service-icon" />
              <h3 className="g-service-title">Automated Quality Control</h3>
            </div>
            <p className="g-service-description">
              Leverage AI and IoT systems for real-time quality checks,
              ensuring every product meets industry standards.
            </p>
          </div>
          <div className="g-service-item">
            <div className="g-service-icon-container">
              <FontAwesomeIcon icon={faChartBar} className="g-service-icon" />
              <h3 className="g-service-title">Data Insights and Analytics</h3>
            </div>
            <p className="g-service-description">
              Provide intuitive dashboards displaying detailed insights like
              defect tracking, performance metrics, and process optimization.
            </p>
          </div>
          <div className="g-service-item">
            <div className="g-service-icon-container">
              <FontAwesomeIcon icon={faCog} className="g-service-icon" />
              <h3 className="g-service-title">Streamline Manufacturing Processes</h3>
            </div>
            <p className="g-service-description">
              Automate repetitive tasks, improve operational efficiency, and
              minimize errors using robotics and advanced automation tools.
            </p>
          </div>
          <div className="g-service-item">
            <div className="g-service-icon-container">
              <FontAwesomeIcon icon={faSlidersH} className="g-service-icon" />
              <h3 className="g-service-title">Customizable Solutions</h3>
            </div>
            <p className="g-service-description">
              Develop tailored solutions to align with specific manufacturing
              needs and goals.
            </p>
          </div>
          <div className="g-service-item">
            <div className="g-service-icon-container">
              <FontAwesomeIcon icon={faLeaf} className="g-service-icon" />
              <h3 className="g-service-title">Sustainability Focus</h3>
            </div>
            <p className="g-service-description">
              Optimize resources and reduce waste, contributing to eco-friendly
              manufacturing.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="g-services-container g-why-choose-us">
          <h2 className="g-section-title">Why Choose Us?</h2>
          <div className="g-service-item">
            <div className="g-service-icon-container">
              <FontAwesomeIcon icon={faRegStar} className="g-service-icon" />
              <h3 className="g-service-title">Proven Expertise</h3>
            </div>
            <p className="g-service-description">
              Backed by years of experience in manufacturing and quality
              assurance, we deliver results that matter.
            </p>
          </div>
          <div className="g-service-item">
            <div className="g-service-icon-container">
              <FontAwesomeIcon icon={faCogs} className="g-service-icon" />
              <h3 className="g-service-title">Efficiency and Precision</h3>
            </div>
            <p className="g-service-description">
              Reduce costs, enhance productivity, and ensure defect-free
              products with our automated systems.
            </p>
          </div>
          <div className="g-service-item">
            <div className="g-service-icon-container">
              <FontAwesomeIcon icon={faClock} className="g-service-icon" />
              <h3 className="g-service-title">Real-Time Monitoring</h3>
            </div>
            <p className="g-service-description">
              Access real-time insights into your manufacturing process through
              our robust dashboards.
            </p>
          </div>
          <div className="g-service-item">
            <div className="g-service-icon-container">
              <FontAwesomeIcon icon={faExpand} className="g-service-icon" />
              <h3 className="g-service-title">End-to-End Support</h3>
            </div>
            <p className="g-service-description">
              From setup to execution and beyond, our team is here to support
              you every step of the way.
            </p>
          </div>
          <div className="g-service-item">
            <div className="g-service-icon-container">
              <FontAwesomeIcon icon={faChartLine} className="g-service-icon" />
              <h3 className="g-service-title">Scalability</h3>
            </div>
            <p className="g-service-description">
              Our solutions grow with your business, adapting to evolving
              manufacturing demands.
            </p>
          </div>
        </div>
      </div>

      {/* Image and Content Section */}
      <div className="g-image-content-section">
        <button className="g-nav-button" onClick={handlePrev}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="g-image-content-wrapper">
          <img
            src={galleryImages[currentGalleryIndex]}
            alt={`Gallery item ${currentGalleryIndex + 1}`}
            className="g-gallery-image"
          />
          <div className="g-content">
            <p>{galleryTexts[currentGalleryIndex]}</p>
          </div>
        </div>
        <button className="g-nav-button" onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
       {/* Scroll-to-Top Button */}
            {showScrollButton && (
              <button className="scroll-to-top" onClick={scrollToTop}>
                <FaArrowUp />
              </button>
            )}
    </div>
  );
};

export default Gallery;
