import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import GalPromise from "./components/Galpromise";
import Gallery from "./components/Gallery";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import Help from "./components/Help";
import FeedbackForm from './components/FeedbackForm';
import TermsOfUse from "./components/TermsOfUse";
import CookieConsent from "./components/CookieConsent";
import CookieSettings from "./components/CookieSettings"; 
import CookiePolicy from "./components/CookiePolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import "./components/SignIn.css";
import "./App.css";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");
  const [displayedUsername, setDisplayedUsername] = useState(localStorage.getItem("displayedUsername") || '');
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || "Production-Manager"); // Default role
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const location = useLocation();
  
  const toggleCookieSettings = (show) => { setShowCookieSettings(show); };
  
  useEffect(() => {
    if (location.pathname === "/privacypolicy") {
      document.body.classList.add("privacy-policy");
    } else {
      document.body.classList.remove("privacy-policy");
    }
  }, [location]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLogin = (role, fullName) => {
    setIsAuthenticated(true);
    setUserRole(role); 
    setDisplayedUsername(fullName);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userRole", role);
    localStorage.setItem("displayedUsername", fullName);
    closeModal(); 
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole("viewer"); 
    setDisplayedUsername('');
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole");
    localStorage.removeItem("displayedUsername");
    alert("Logged out!");
  };

  return (
    <div className="App">
      <NavBar openModal={openModal} isAuthenticated={isAuthenticated} handleLogout={handleLogout} displayedUsername={displayedUsername} />
      <div className="main-content">   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard userRole={userRole} isAuthenticated={isAuthenticated} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn closeModal={closeModal} handleLogin={handleLogin} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/galpromise" element={<GalPromise />} />
          <Route path="/termsofuse" element={<TermsOfUse />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/help" element={<Help />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </div>
      {isModalOpen && <SignIn closeModal={closeModal} handleLogin={handleLogin} />}
      <Footer />
      {showCookieSettings && <CookieSettings toggleSettings={toggleCookieSettings} />}
      <CookieConsent toggleSettings={toggleCookieSettings} />
    </div>
  );
}

export default App;
