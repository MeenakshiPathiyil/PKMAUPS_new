import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../assets/Footer.jsx";
import "../styles/Gallery.css";

const Gallery = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [preview, setPreview] = useState(false);
    const [previewUrl, setPreviewUrl] = useState("");
    const [previewIndex, setPreviewIndex] = useState(0);

    const images = [
        { id: 0, src: "/gallery/pkmaup10.jpg", alt: "Image 1" },
        { id: 1, src: "/gallery/pkmaup14.jpg", alt: "Image 2" },
        { id: 2, src: "/gallery/pkmaup16.jpg", alt: "Image 3" },
        { id: 3, src: "/gallery/pkmaup18.jpg", alt: "Image 4" },
        { id: 4, src: "/gallery/pkmaup19.jpg", alt: "Image 5" },
        { id: 5, src: "/gallery/pkmaup22.JPG", alt: "Image 6" },
        { id: 6, src: "/gallery/pkmaup23.jpg", alt: "Image 7" },
        { id: 7, src: "/gallery/pkmaup24.jpg", alt: "Image 8" },
        { id: 8, src: "/gallery/pkmaup27.jpg", alt: "Image 9" },
        { id: 9, src: "/gallery/pkmaup28.JPG", alt: "Image 10" },
        { id: 10, src: "/gallery/pkmaup33.jpg", alt: "Image 11" },
        { id: 11, src: "/gallery/pkmaup34.jpg", alt: "Image 12" },
        { id: 12, src: "/gallery/pkmaup35.jpg", alt: "Image 13" },
        { id: 13, src: "/gallery/pkmaup36.jpg", alt: "Image 14" },
        { id: 14, src: "/gallery/pkmaup40.jpg", alt: "Image 15" },
        { id: 15, src: "/gallery/pkmaup41.jpg", alt: "Image 16" },
        { id: 16, src: "/gallery/pkmaup42.jpg", alt: "Image 17" },
        { id: 17, src: "/gallery/pkmaup43.jpg", alt: "Image 18" },
        { id: 18, src: "/gallery/pkmaup44.jpg", alt: "Image 19" },
        { id: 19, src: "/gallery/pkmaup45.jpg", alt: "Image 20" },
        { id: 20, src: "/gallery/pkmaup46.jpg", alt: "Image 21" },
        { id: 21, src: "/gallery/pkmaup47.jpg", alt: "Image 22" },
        { id: 22, src: "/gallery/pkmaup48.jpg", alt: "Image 23" },
        { id: 23, src: "/gallery/pkmaup49.jpg", alt: "Image 24" },
        { id: 24, src: "/gallery/pkmaup50.jpg", alt: "Image 25" },
        { id: 25, src: "/gallery/pkmaup51.jpg", alt: "Image 26" }
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
                <h1>Gallery</h1>
            </header>
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

export default Gallery;
