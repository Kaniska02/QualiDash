import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock, faEnvelope, faUserTag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SignIn({ closeModal, handleLogin }) {
  const [activeTab, setActiveTab] = useState("signin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  
  const handleLinkClick = (e) => {
    e.stopPropagation();
    closeModal();
  };

  const handleSignIn = async () => {
    if (username && password) {
      try {
        const response = await fetch('https://qualidash-backend.onrender.com/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: username, password }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data); // Log the API response

        if (response.ok) {
          console.log('Sign-in successful:', data);

          // Use fullName from response, if available, otherwise fallback to username
          const userFullName = data.fullName || username; 
          if (data.role) {
            console.log('User Role:', data.role);
            console.log('User Full Name:', userFullName); // Log full name or username
            handleLogin(data.role, userFullName);
          } else {
            console.error('Role not found in response');
          }

          if (rememberMe) {
            localStorage.setItem('token', data.token);
          } else {
            sessionStorage.setItem('token', data.token);
          }
          setMessage("Sign-in successful!");
          closeModal();
        } else {
          console.error('Sign-in error:', data.error);
          setMessage(`Sign-in error: ${data.error}`);
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage(`Error: ${error.message}`);
      }
    } else {
      setMessage("Please fill in both username and password.");
    }
  };

  const handleSignUp = async () => {
    if (email && password && role && username) {
      try {
        const response = await fetch('https://qualidash-backend.onrender.com/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fullName: username, email, password, role }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data);
        if (response.ok) {
          console.log('Sign-up successful:', data);
          setMessage('Sign-up successful!');
          handleLogin(data.role, username);
          closeModal(); 
        } else {
          console.error('Sign-up error:', data.error);
          setMessage(`Sign-up error: ${data.error}`);
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage(`Error: ${error.message}`);
      }
    } else {
      setMessage("Please fill in all the fields.");
    }
  };

  return (
    <div>
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <h3 id="sign-h3">Please Login To Continue</h3>
          <div className="modal-content">
            <div className="modal-header">
              <button
                className={`tab ${activeTab === "signin" ? "active" : ""}`}
                onClick={() => setActiveTab("signin")}
              >
                Sign In
              </button>
              <button
                className={`tab ${activeTab === "signup" ? "active" : ""}`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </div>
            <div className="modal-body">
              {message && <p className="auth-message">{message}</p>}
              {activeTab === "signin" ? (
                <SignInForm
                  handleSignIn={handleSignIn}
                  setUsername={setUsername}
                  setPassword={setPassword}
                  setRememberMe={setRememberMe}
                />
              ) : (
                <SignUpForm
                  handleSignUp={handleSignUp}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  setRole={setRole}
                  setUsername={setUsername}
                />
              )}
              <div className="social-signin">
                <div className="line-with-text">
                  <hr className="left-line" />
                  <p id="sign-p"> or </p>
                  <hr className="right-line" />
                </div>
                <button className="social-button google">
                  <FontAwesomeIcon icon={faGoogle} />
                  <span className="separator"></span>
                  Sign in with Google
                </button>
              </div>
              <div className="why-create-account">
                <h5 id="sign-h5">Why Create an Account?</h5>
                <p id="sign-p">
                  Creating an account allows you to access exclusive features and content. Learn more about our{" "}
                  <b>
                    <Link to="/privacypolicy" onClick={handleLinkClick}>
                      Privacy Policy
                    </Link>
                  </b>{" "}
                  and{" "}
                  <b>
                    <Link to="/cookie-policy" onClick={handleLinkClick}>
                      Cookie Policy
                    </Link>
                  </b>
                  .
                </p>
              </div>
            </div>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignInForm({ handleSignIn, setUsername, setPassword, setRememberMe }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn();
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="input-with-icon">
        <FontAwesomeIcon icon={faUser} />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="input-with-icon">
        <FontAwesomeIcon icon={faLock} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="auth-options">
        <label>
          <input type="checkbox" onChange={(e) => setRememberMe(e.target.checked)} /> Remember me
        </label>
        <a href="/forgot-password">Forgot password?</a>
      </div>
      <button type="submit" className="auth-submit">
        Sign In
      </button>
    </form>
  );
}

function SignUpForm({ handleSignUp, setEmail, setPassword, setRole, setUsername }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="input-with-icon">
        <FontAwesomeIcon icon={faUser} />
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="input-with-icon">
        <FontAwesomeIcon icon={faEnvelope} />
        <input
          type="email"
          className="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-with-icon">
        <FontAwesomeIcon icon={faLock} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="input-with-icon">
        <FontAwesomeIcon icon={faUserTag} />
        <select
          className="role-select"
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Production-Manager">Production Manager</option>
          <option value="Quality control Engineer">Quality Control Engineer</option>
          <option value="Operator">Operator</option>
        </select>
      </div>
      <button type="submit" className="auth-submit">
        Sign Up
      </button>
    </form>
  );
}

function ProfileIcon({ username, handleLogout }) {
  return (
    <div className="profile-dropdown">
      <div className="profile-icon">
        {username}
      </div>
      <div className="dropdown-menu">
        <button onClick={handleLogout} className="dropdown-item">
          Logout
        </button>
      </div>
    </div>
  );
}

export default SignIn;
