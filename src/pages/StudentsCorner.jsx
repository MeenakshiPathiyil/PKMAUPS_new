import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../assets/Footer.jsx";
import "../styles/Gallery.css";

const Students = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [preview, setPreview] = useState(false);
    const [previewUrl, setPreviewUrl] = useState("");
    const [previewIndex, setPreviewIndex] = useState(0);

    const images = [
        { id: 0, src: "/studentscorner/pkmaup6.JPG", alt: "Image 1" },
        { id: 1, src: "/studentscorner/pkmaup7.jpeg", alt: "Image 2" },
        { id: 2, src: "/studentscorner/pkmaup8.jpeg", alt: "Image 3" },
        { id: 3, src: "/studentscorner/Students2.jpeg", alt: "Image 4" },
        { id: 4, src: "/studentscorner/Students3.jpeg", alt: "Image 5" },
        { id: 5, src: "/studentscorner/Students4.jpeg", alt: "Image 6" },
        // { id: 6, src: "/studentscorner/pkmaup7.jpeg", alt: "Image 7" },
        // { id: 7, src: "/studentscorner/pkmaup8.jpeg", alt: "Image 8" },
        // { id: 8, src: "/studentscorner/Students2.jpeg", alt: "Image 9" },
        // { id: 9, src: "/studentscorner/Students3.jpeg", alt: "Image 10" },
        // { id: 10, src: "/studentscorner/Students4.jpeg", alt: "Image 11" }
    ];

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    const handlePreview = (id) => {
        setPreview(true);
        setPreviewUrl(images[id].src);
        setPreviewIndex(id);
    };

    const closePreview = () => {
        setPreview(false);
        setPreviewUrl("");
    };

    const handleNext = () => {
        setPreviewIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setPreviewIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };


    return (
        <div className="gallery">
            <header>
                <h1>Students Corner</h1>
            </header>
            <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={toggleMenu}>×</button>
                <ul className="menu-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/AboutUs">About Us</a></li>
                    <li><a href="/Gallery">Gallery</a></li>
                    <li><a href="/Students">Students Corner</a></li>
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

            <div className="gallery-container">
                {images.map((image) => (
                <div
                    key={image.id}
                    className="item"
                    onClick={() => handlePreview(image.id)}
                >
                    <img src={image.src} alt={image.alt} />
                </div>
                ))}
                {preview && (
                    <div id="preview">
                        <button className="preview-btn prev" onClick={handlePrev}>
                            &#8249;
                        </button>
                        <img src={images[previewIndex].src} alt={images[previewIndex].alt} />
                        <button className="preview-btn next" onClick={handleNext}>
                            &#8250;
                        </button>
                        <button className="gal-close-btn" onClick={closePreview}>
                            ×
                        </button>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default Students;
