import React, { useEffect } from 'react';
import './FeedbackSubmit.css'; 

const FeedbackSubmit = () => {
  useEffect(() => {
    const timer = setTimeout(() => { 
      window.location.href = '/help'; 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="feedsub-container">
      <div className="feedsub-message-box">
        <div className="checkmark">✔️</div>
        <div className="feedsub-thank-you">Thank you for your feedback!</div>
        <div className="feedsub-footer">
          Made with Fillout, the easy way to make stunning forms
        </div>
      </div>
    </div>
  );
};

export default FeedbackSubmit;