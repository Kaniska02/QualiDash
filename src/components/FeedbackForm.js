import React, { useState } from 'react';
import './FeedbackForm.css';
import FeedbackSubmit from './FeedbackSubmit';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false); 

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (rating === 0 || feedback.trim() === '') {
      setError('Please provide a rating and feedback before submitting.');
      return; 
    }

    setLoading(true);

    try {
      const response = await fetch('https://qualidash-backend.onrender.com/api/feedback/submit', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating, feedback }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json(); 

      if (response.ok) {
        console.log('Feedback submitted successfully');
        setIsSubmitted(true); 
        setError(''); 
        setRating(0); 
        setFeedback(''); 
      } else {
        console.error('Error submitting feedback:', responseData);
        setError(responseData.message || 'Error submitting feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="feedback-container">
      {isSubmitted ? (
        <FeedbackSubmit />
      ) : (
        <>
          <h2>We value your opinion.</h2>
          <p>How would you rate your overall experience?</p>
          <div className="feedback-stars" role="radiogroup" aria-labelledby="rating">
            {[...Array(5)].map((star, index) => (
              <span
                key={index}
                className={index < rating ? 'filledStar' : 'emptyStar'}
                onClick={() => handleStarClick(index)}
                role="radio"
                aria-checked={index < rating ? 'true' : 'false'}
                aria-label={`Star ${index + 1}`}
              >
                ★
              </span>
            ))}
          </div>
          <p>Kindly take a moment to tell us what you think.</p>
          <textarea
            className="feedback-textarea"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Your feedback here..."
            required
          />
          <button
            className="feedback-button"
            onClick={handleSubmit}
            disabled={loading} 
          >
            {loading ? 'Submitting...' : 'Share my feedback'}
          </button>
          {error && <p className="error-message">{error}</p>} 
        </>
      )}
    </div>
  );
};

export default FeedbackForm;
