import React, { useState, useEffect } from "react";
import "./Help.css";
import FeedbackForm from "./FeedbackForm";

const Help = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {

    const emailElement = document.querySelector('a[href="mailto:qualidash@gmail.com"]');
    
    if (emailElement) {
      emailElement.style.fontWeight = 'bold';  
      emailElement.style.color = '#10182f';    
    }

    const phoneElements = document.querySelectorAll('li');
    phoneElements.forEach((element) => {
      if (element.textContent.includes("Phone: 9876543210")) {
        element.style.fontWeight = 'bold';  
      }
    });
  }, []);

  return (
    
    <div className="help-page">
      <h4 id="help-h4">Help Page</h4>
      <div className="help-page-gradient-line"></div>
      <div id="help-container">
      {/* Introduction Section */}
      <section id="help-section">
        <h2 id="help-h2">1. Introduction</h2>
        <p id="help-p">
          Welcome to the <strong>QualiDash</strong> Help page. Here,
          you’ll find guidance, solutions, and resources to use the dashboard
          effectively.
        </p>
      </section>

      {/* FAQs Section */}
      <section id="help-section">
        <h2 id="help-h2">2. FAQs with Solutions</h2>
        <div className="help-page-faq">
          <h3 id="help-h3">How do I log in to the dashboard?</h3>
          <p id="help-p">
            <strong>Solution:</strong> Use your registered email and password.
            If you’ve forgotten your password, click "Forgot Password" on the
            login page to reset it.
          </p>
        </div>
        <div className="help-page-faq">
          <h3 id="help-h3">How do I upload product data?</h3>
          <p id="help-p">
            <strong>Solution:</strong> Go to the "Upload Data" section, choose
            the file format (CSV or JSON), and click "Upload." Ensure the file
            matches the required template.
          </p>
        </div>
        <div className="help-page-faq">
          <h3 id="help-h3">What does "Quality Control Status: Rejected" mean?</h3>
          <p id="help-p">
            <strong>Solution:</strong> This indicates the product failed the
            specified quality thresholds. Check the detailed report for specific
            issues.
          </p>
        </div>
      </section>

      {/* User Guide Section */}
      <section id="help-section">
        <h2 id="help-h2">3. User Guide with Solutions</h2>
        <div className="help-page-guide">
          <h3 id="help-h3">Uploading Data</h3>
          <p id="help-p">
            <strong>Solution:</strong> Navigate to "Upload Data," ensure your
            file meets the format, and click "Submit." Errors will be displayed
            if the format is incorrect.
          </p>
        </div>
        <div className="help-page-guide">
          <h3 id="help-h3">Viewing Reports</h3>
          <p id="help-p">
            <strong>Solution:</strong> Go to "Reports" and select a date range
            or product category. Download options are available in PDF or Excel
            formats.
          </p>
        </div>
        <div className="help-page-guide">
          <h3 id="help-h3">Interpreting Metrics</h3>
          <p id="help-p">
            <strong>Solution:</strong> Each metric has a tooltip explaining its
            significance. Hover over the metric or consult the glossary section
            for more details.
          </p>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section id="help-section">
        <h2 id="help-h2">4. Troubleshooting Common Issues</h2>
        <div className="help-page-issue">
          <h3 id="help-h3">Login Not Working</h3>
          <p id="help-p">
            <strong>Solution:</strong> Clear your browser cache or try a
            different browser. Ensure your credentials are correct. Contact
            support if the issue persists.
          </p>
        </div>
        <div className="help-page-issue">
          <h3 id="help-h3">Data Not Loading</h3>
          <p id="help-p">
            <strong>Solution:</strong> Check your internet connection. Refresh
            the page or try re-uploading the data.
          </p>
        </div>
        <div className="help-page-issue">
          <h3 id="help-h3">Dashboard Loading Slowly</h3>
          <p id="help-p">
            <strong>Solution:</strong> Close unnecessary browser tabs or check
            system requirements. If the issue persists, contact support.
          </p>
        </div>
      </section>

      {/* Contact Support Section */}
      <section id="help-section">
        <h2 id="help-h2">5. Contact Support</h2>
        <p id="help-p">For unresolved issues, contact us:</p>
        <ul>
          <li>
          <p id="help-p">
          <span className="contact-email">Email: </span>
          <a href="mailto:contactqualidash@gmail.com">contactqualidash@gmail.com</a>
          </p>
          </li>
          <li><p id="help-p"><span className="contact-phone">Phone: </span>9876543210</p></li>
        </ul>
      </section>

      {/* Feedback Section */}
      <section id="help-section">
        <h2 id="help-h2">6. Feedback and Suggestions</h2>
        <p id="help-p">
          Help us improve by sharing your feedback through the{" "}
          <span className="help-page-link" onClick={openModal}>
            Feedback Form
          </span>.
        </p>
      </section>

      {/* Feedback Modal */}
      {isModalOpen && (
        <div className="help-page-modal-overlay">
          <div className="help-page-modal">
            <button className="help-page-close-button" onClick={closeModal}>
              ×
            </button>
            <FeedbackForm />
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Help;