import React, { useState } from "react";
import Footer from "../assets/Footer.jsx";
import { Link } from "react-router-dom";
import "../styles/ContactUs.css";

const ContactUs = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    return (
        <div className="contact-us">
            <div className="contact-us-container">
                <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
                    <button className="close-btn" onClick={toggleMenu}>×</button>
                    <ul className="menu-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/AboutUs">About Us</a></li>
                        <li><a href="/Gallery">Gallery</a></li>
                        <li><a href="/ContactUs">Contact Us</a></li>
                    </ul>
                </div>
          
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>

                <div className="sticky-header">
                    <img src="/logo.png" alt="Logo" className="school-logo" />
                    <div className="school-name-container">
                        <Link to="/"><h1 className="school-name">PKMAUPS</h1></Link>
                        <h2 className="school-year">Estd. 1893</h2>
                    </div>
                </div>

                <div className="contact">
                    <div className="contact-mgmt">
                        <h2>To contact the school management:</h2>
                        <p>Email: school.mgmt@pkmaups.com</p>
                    </div>

                    <div className="contact-school">
                        <h2>To contact the school admin:</h2>
                        <p>Phone: 9048 579 765 <br/> 9495 450 440 <br/> Email: school.admin@pkmaups.com</p>
                    </div>

                    <div className="address">
                        <h2>Address:</h2>
                        <p>PKMAUP School<br/>
                        Chittilamchery<br/>
                        Alathur sub-district<br/>
                        Palakkad district<br/>
                        Pin - 678704<br/>
                        School code - 21265</p>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    );
};

export default ContactUs;