import React, { useState,useEffect } from "react";
import Footer from "../assets/Footer.jsx";
import { Link } from "react-router-dom";
import "../styles/ContactUs.css";

const ContactUs = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } 
            else {
                setShowButton(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    return (
        <div className="contact-us bg-gradient-to-r from-gray-800 via-sky-700 to-sky-600">
            <div className="contact-us-container">
                <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
                    <button className="close-btn" onClick={toggleMenu}>×</button>
                    <ul className="menu-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/AboutUs">About Us</a></li>
                        <li><a href="/Gallery">Gallery</a></li>
                        <li><a href="/Students">Students Corner</a></li>
                        <li><a href="/News">In The News</a></li>
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

                <div className="contact-text">
                    <div className="contact-mgmt">
                        <h2>School Management:</h2>
                        <p>Email: school.mgmt@pkmaups.com</p>
                    </div>

                    <div className="contact-school">
                        <h2>School Admin:</h2>
                        <p>Phone: 94462 40556 <br/> &emsp;&emsp;&emsp;&ensp; 94954 50440 <br/> Email: school.admin@pkmaups.com</p>
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

                <div className="google-maps">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.7423371113246!2d76.55008587451513!3d10.599307262436819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba80c01daa8f5f9%3A0x779e886daecc69ad!2sP%20K%20M%20A%20U%20P%20School%20chittilamchery!5e0!3m2!1sen!2sin!4v1737283805009!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: "0", borderRadius: "10px" }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <button
                className={`back-to-top ${showButton ? "show" : ""}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                ↑
            </button>
            <Footer/>
        </div>
    );
};

export default ContactUs;