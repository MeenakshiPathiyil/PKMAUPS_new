import React from "react";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-links">
                <a href="https://www.instagram.com/pkmaups?igsh=MWNtaTB3b2ZmeTFxNg==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="footer-icon" /> Instagram
                </a>
                <a href="https://www.youtube.com/channel/UCKhhxtMOqx3pA9Enyv-ja7A" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="footer-icon" /> YouTube
                </a>
                <a href="https://www.facebook.com/p/Pkmaup-school-Chittilamchery-100063754605838/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="footer-icon" /> Facebook
                </a>
            </div>
        </footer>
    )
};

export default Footer;