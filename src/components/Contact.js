import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import 'font-awesome/css/font-awesome.min.css';
import { Typed } from 'react-typed';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const typedRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Iframe loaded");
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://qualidash-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        setDone(true);
        setShowThankYou(true);
        form.current.reset();
        setTimeout(() => {
          setShowThankYou(false);
        }, 3000); 
      } else {
        console.log('Server error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (typedRef.current) {
      new Typed(typedRef.current, {
        strings: ['Get In Touch'],
        typeSpeed: 250,
      });
    }
  }, []);

  return (
    <div>
      <div className="All-header">
        <div ref={typedRef}></div>
      </div>

      <div className="container-c">
        <div className="cform" data-aos="flip-left" data-aos-duration="3000">
          <div className="contact-info">
            <h3 className="contact-title">Let's Get Connected</h3>
            <div className="contact-info">
              <div className="info-item">
                <h4><i className="fa fa-clock"></i> Opening Hour</h4>
                <p>Mon-Sat, 9:00 AM - 7:00 PM</p>
              </div>
              <div className="info-item">
                <h4><i className="fa fa-phone"></i> Call Us</h4>
                <p>+91-9876543210</p>
              </div>
              <div className="info-item">
                <h4><i className="fa fa-envelope"></i> Email Us</h4>
                <p>contactqualidash@gmail.com</p>
              </div>
            </div>
            <p className="FAQ" style={{ fontSize: '.7rem', paddingTop: '.8rem', marginBottom: '-.5rem' }}>
              Have any question or suggestion? Please let us know.
            </p>
          </div>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <h3 className="contact-title-white">Ask Queries</h3>
              <div className="input-container-c">
                <input type="text" name="name" className="input" placeholder="Name" pattern="[a-zA-Z]{3,50}" required />
              </div>
              <div className="input-container-c">
                <input type="email" name="email" className="input" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
              </div>
              <div className="input-container-c">
                <input type="tel" name="mobile" className="input" placeholder="Mobile (optional)" pattern="[6-9]{1}[0-9]{9}" />
              </div>
              <div className="input-container-c textarea">
                <textarea name="message" className="input" placeholder="Message" pattern=".{10,500}" required></textarea>
              </div>
              <input type="submit" value="Send" className="button s-button" />
            </form>
            <span style={{ fontWeight: 'bold', marginLeft: '6%', color: '#fff' }}>
              {showThankYou && 'Thank you for contacting us!'}
            </span>
          </div>
        </div>
      </div>

      <br /><br />

      {/* Map Container Box */}
      <div>
        <h3 className='locn'>Our Location</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3950749934866!2d80.20897938885498!3d13.074129500000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266a2b44ea549%3A0x24732a5af8f16afd!2sDwaraka%20Doss%20Goverdhan%20Doss%20Vaishnav%20College!5e0!3m2!1sen!2sin!4v1734406125818!5m2!1sen!2sin"
            title="Google Map"  
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
