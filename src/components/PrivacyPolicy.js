import React from "react";
import "./Privacy_Terms.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-terms-container"> 
      <h2>Privacy Policy</h2>
      <div className="gradient-line"></div>
      <p><strong>Effective Date:</strong> December 18, 2024</p>

      <h3>Introduction</h3>
      <p>
        Welcome to the Automated Quality Control Dashboard for Manufacturing ("Dashboard"). We are committed to protecting your privacy and ensuring that your personal data is handled responsibly. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to protect your information.
      </p>

      <h3>1. Information We Collect</h3>
      <p><strong>Personal Information:</strong> We may collect personal information such as your name, email address, and contact details when you register or interact with our Dashboard.</p>
      <p><strong>Usage Data:</strong> We collect data on how you use the Dashboard, including the pages you visit, the actions you take, and your interactions with features.</p>
      <p><strong>Device Information:</strong> We may collect information about the devices you use to access the Dashboard, including IP addresses, browser types, and operating systems.</p>
      <p><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver personalized content.</p>

      <h3>2. How We Use Your Information</h3>
      <p><strong>To Provide and Improve Services:</strong> We use your information to operate, maintain, and improve the Dashboard, ensuring it meets your needs.</p>
      <p><strong>To Communicate with You:</strong> We may use your contact information to send you updates, notifications, and other relevant communications.</p>
      <p><strong>To Analyze and Understand Trends:</strong> We analyze usage data to understand user behavior and improve our services.</p>
      <p><strong>To Ensure Security:</strong> We use your information to detect and prevent fraud, unauthorized access, and other security issues.</p>

      <h3>3. Sharing Your Information</h3>
      <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
      <ul>
        <li><strong>Service Providers:</strong> Trusted third-party service providers who assist us in operating the Dashboard and delivering services.</li>
        <li><strong>Legal Requirements:</strong> Authorities if required by law or to protect our rights and comply with legal obligations.</li>
      </ul>

      <h3>4. Data Security</h3>
      <p>We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, and destruction. These measures include encryption, firewalls, and secure access controls.</p>

      <h3>5. Your Choices</h3>
      <p><strong>Access and Update:</strong> You can access and update your personal information by logging into your account and making changes.</p>
      <p><strong>Opt-Out:</strong> You can opt out of receiving marketing communications by following the instructions provided in those communications.</p>
      <p><strong>Cookies:</strong> You can manage your cookie preferences through your browser settings.</p>

      <h3>6. Children's Privacy</h3>
      <p>Our Dashboard is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</p>

      <h3>7. Changes to This Privacy Policy</h3>
      <p>We may update this Privacy Policy periodically. We will notify you of any changes by posting the new Privacy Policy on our Dashboard and updating the effective date. Your continued use of the Dashboard after any changes indicates your acceptance of the updated Privacy Policy.</p>

      <h3>8. Contact Us</h3>
      <p>For questions or concerns about this Privacy Policy, please contact us at <a href="mailto:contactqualidash@gmail.com" className="no-underline darkblue-link">QualiDash</a>.</p>
    </div>
  );
};

export default PrivacyPolicy;