import React, { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaArrowUp } from 'react-icons/fa'; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import video from "../assets/video1.mp4";
import video1 from "../assets/abt.mp4";
import video2 from "../assets/video.mp4";
import i1 from "../assets/tcs.png";
import i2 from "../assets/Schneider_Electric.png";
import i3 from "../assets/Hexagon.webp";
import i4 from "../assets/GE-Symbol.png";
import i5 from "../assets/ford.jpg";
import i6 from "../assets/Bosch_Rexroth.png";
import i7 from "../assets/Cognex.png";
import pharma from '../assets/tab.webp'; 
import auto from '../assets/car-assembly.webp'; 
import elec from '../assets/cnn.webp'; 
import benefit1 from "../assets/key1.jpeg";
import benefit2 from "../assets/key5.jpeg";
import benefit3 from "../assets/key3.webp";
import benefit4 from "../assets/key6.webp";
import benefit5 from "../assets/privacy.jpg";
import future1 from "../assets/future4.webp";
import future2 from "../assets/iot.webp";
import future3 from "../assets/future1.webp";
import future4 from "../assets/future3.jpg";
import future5 from "../assets/future5.webp";

import "./Home.css";
const images = [i1, i2, i3, i4, i5, i6, i7];

const futureTrends = [
  {
    title: "AI-Powered Quality Control",
    content: "Artificial Intelligence (AI) is revolutionizing the AQC field by enabling systems to learn from data and predict quality issues before they occur. AI-driven quality checks are expected to become more common and accurate.",
    image: future3,
  },
  {
    title: "Integration of IoT in AQC",
    content: "Internet of Things (IoT) sensors are being integrated into production lines to monitor quality in real-time. This allows for immediate corrective actions, reducing downtime and improving product quality.",
    image: future2,
  },
  {
    title: "Predictive Analytics",
    content: "Predictive analytics is helping businesses forecast potential quality issues by analyzing patterns in historical production data. This can significantly reduce defects and improve production efficiency.",
    image: future4,
  },
  {
    title: "Cloud-Based AQC Solutions",
    content: "Cloud technology is enabling businesses to manage their quality control systems remotely. Cloud-based AQC platforms allow for real-time monitoring, data analysis, and easier collaboration between teams.",
    image: future1,
  },
  {
    title: "Automation and Robotics",
    content: "The future of AQC will likely involve more automated processes and robotics. Robots equipped with AI will take over repetitive quality checks, allowing human workers to focus on more complex tasks.",
    image: future5,
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const totalImages = futureTrends.length; 
  const intervalRef = useRef(null);

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
  

  const benefits = [
    {
      text: "Increased Efficiency: 24/7 operation, rapid inspection, and consistency boost production.",
      image: benefit1, 
    },
    {
      text: "Improved Data Accuracy: Precision data ensures high-quality products.",
      image: benefit3, 
    },
    {
      text: "Enhanced Safety: Reduces workplace accidents and ensures safer products.",
      image: benefit2, 
    },
    {
      text: "Reduced Human Error: Standardized processes reduce defects.",
      image: benefit4, 
    },
    {
      text: "Cost Savings: Less waste, fewer recalls, and reduced staffing overheads.",
      image: benefit5, 
    },
  ];

  const challenges = [
    {
      title: "High Initial Investment",
      content:
        "The implementation of AQC systems requires significant upfront investment in software, hardware, and training. This can be a barrier for smaller businesses.",
    },
    {
      title: "Integration Complexity",
      content:
        "Integrating AQC systems with existing production lines and enterprise resource planning (ERP) systems can be complex, requiring significant time and technical expertise.",
    },
    {
      title: "Maintenance Requirements",
      content:
        "AQC systems need regular maintenance and updates to stay efficient. This can add to the operational costs and may require specialized technical support.",
    },
    {
      title: "Specialized Training",
      content:
        "Employees need to be trained to use AQC tools effectively. This requires time, effort, and sometimes additional resources to upskill workers.",
    },
  ];

  const caseStudies = [
    {
      title: "Pharmaceutical Industry",
      description: "Ensured precision in tablet production.",
      image: pharma, 
    },
    {
      title: "Automotive",
      description: "Enhanced accuracy in vehicle assembly.",
      image: auto, 
    },
    {
      title: "Electronics",
      description: "Detected microscopic flaws in circuit boards.",
      image: elec, 
    },
  ];

  const changeImage = () => { setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages); };

  const startCarousel = useCallback(() => { intervalRef.current = setInterval(() => { changeImage();
     setTimeout(() => { 
      document.querySelectorAll('.trend-content').forEach(
        content => { content.style.animation = 'slideInOut 7s ease forwards'; 

        }); }, 4000); 
        }, 8000); 
        }, [changeImage]);

useEffect(() => {
  startCarousel();
  return () => clearInterval(intervalRef.current);
}, [startCarousel]);

  return (
    <div id="home" className="home">
      {/* Swiper Component for Video Slider */}
      <div className="header_wrapper">
        <Swiper
          className="swiper"
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {[video, video1, video2].map((vid, index) => (
            <SwiperSlide key={index}>
              <div className={`slide${index + 1}`}>
                <video className="slide-video" autoPlay loop muted>
                  <source src={vid} type="video/mp4" />
                </video>
                <div className="overlay-message">
                  <h2 className="home2">
                    {index === 0
                      ? "Automatic Product Quality"
                      : index === 1
                      ? "Enhanced Product Monitoring"
                      : "Optimized Processes"}
                  </h2>
                  <p id="home2-p">
                    {index === 0
                      ? "Enjoy your dream time with luxury experience"
                      : index === 1
                      ? "Seamlessly monitor and control quality metrics"
                      : "Leverage technology to enhance production"}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* What is AQC Section */}
      <section id="about-aqc" className="about-aqc">
        <h2 className="about-aqc-title">What is Automated Quality Control (AQC)?</h2>
        <p className="about-aqc-content">
          Automated Quality Control(AQC) uses smart machines, sensors, and algorithms to inspect products
          without human intervention. It improves speed, precision, and output
          while maintaining high-quality standards.
        </p>
      </section>

      {/* Key Benefits Section */}
      <div className="key-benefits">
        <h2 className="key-benefits-title">Key Benefits</h2>
        <div className="benefits-cards">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="card-content">
                <div className="card-title">
                  {benefit.text.split(":")[0]} 
                </div>
                <div className="card-description">
                  {benefit.text.split(":")[1]} 
                </div>
              </div>
              <div className="card-image">
                <img src={benefit.image} alt={`Benefit ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies Section */}
      <section id="case-studies" className="case-studies">
        <h2 className="case-studies-title">Real-Time Applications of AQC</h2>
        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <img
                src={study.image}
                alt={study.title}
                className="case-study-image"
              />
              <h3 className="case-study-title">{study.title}</h3>
              <p className="case-study-description">{study.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges of AQC*/}
      <section id="challenges">
        <h2 className="challenges-title">Challenges of Implementing AQC</h2>
        <div className="challenges-list">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`challenge-item ${
                hoveredIndex === index ? "hovered" : "blurred"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="challenge-title">{challenge.title}</h3>
              <p className="challenge-content">{challenge.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future Trends Section */}
      <section id="future-trends" className="future-trends">
        <h2 id="future-trends-title" className="future-trends-title">
          The Future of AQC
        </h2>
        <Swiper
          className="future-trends-swiper"
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={3} 
          spaceBetween={20} 
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }} 
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        >
          {futureTrends.map((trend, index) => (
            <SwiperSlide key={index}>
              <div className={`trend-card ${index === (currentIndex + 1) % totalImages ? "middle" : ""}`}>
                <img
                  src={trend.image}
                  alt={`Future Trend ${index + 1}`}
                  className="trend-image"
                />
                <div className="trend-content">
                  <h3>{trend.title}</h3>
                  <p>{trend.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Sponsors Section */}
      <div id="sponsors">
        <div className="h2">
          <h1 className="home1">Our Sponsors</h1>
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
};

export default Home;

      