import React, { useState, useEffect} from "react";
import Footer from "../assets/Footer.jsx";
import "../styles/HomePage.css";
import "@fontsource/libre-baskerville/700.css";

const HomePage = () => {
    const [showHeader, setShowHeader] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const facilities = [ 
        { id: 1, title: "Smart Classrooms", image: "/facilities/facility4.jpg"},
        { id: 2, title: "Vayanakoottam / Literary Club", image: "/facilities/facility1.jpg"},
        { id: 3, title: "Science Workshop and Social Science, Mathematics Lab", image: "/facilities/facility3.jpg"},
        { id: 4, title: "Children's park", image: "/facilities/facility5.jpg"},
        { id: 5, title: "Computer Lab", image: "/facilities/facility2.jpg"}
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowHeader(true);
                setShowButton(true);
            } 
            else {
                setShowHeader(false);
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => { 
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("slide-in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {threshold: 0.1}
        );

        const facilityElements = document.querySelectorAll(".facility");
        facilityElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const facilityElements = document.querySelectorAll(".facility");
        facilityElements.forEach((el) => {
            if (window.innerWidth <= 768) {
                el.classList.add("slide-in");
            }
        })
    })

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    return (
        <div className="homepage">
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

            {showHeader && (
                <div className="sticky-header">
                    <img src="/logo.png" alt="Logo" className="school-logo" />
                    <div className="school-name-container">
                        <h1 className="school-name">PKMAUPS</h1>
                        <h2 className="school-year">Estd. 1893</h2>
                    </div>
                </div>
            )}

            <section className="landing-section">
            <video className="background-video" autoPlay loop muted playsInline >
                <source src="/pkmaups.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="pkmaups">
                <h1>Pathiyil Kesavan Nair Memorial</h1>
                <h1>AUP School</h1>
            </div>
            </section>

            <section className="facilities-section bg-gradient-to-r from-gray-800 via-sky-800 to-sky-500">
                <h2>Facilities</h2>
                <div className="facilities-container">
                    {facilities.map((facility, index) => (
                        <div
                            key={facility.id}
                            className={`facility ${index % 2 === 0 ? "left" : "right"}`}
                        >
                            <img src={facility.image} alt={facility.title} className="facility-image" />
                            <div className="facility-description">
                                <h3>{facility.title}</h3>
                                <p>{facility.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <button
                className={`back-to-top ${showButton ? "show" : ""}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                ↑
            </button>

            <Footer />

        </div>
    );
};

export default HomePage;