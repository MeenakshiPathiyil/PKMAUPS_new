import React, { useState, useEffect} from "react";
import "../styles/HomePage.css";
import "@fontsource/libre-baskerville/700.css";

const HomePage = () => {
    const [showHeader, setShowHeader] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const facilities = [
        { id: 1, title: "Smart Classrooms", description: "blah blah blah", image: "/random.jpg"},
        { id: 2, title: "USS and LSS Coaching", description: "blah blah blah", image: "/random.jpg"},
        { id: 3, title: "Karate Training and Sports & Football Coaching", description: "blah blah blah", image: "/random.jpg"},
        { id: 4, title: "Vayanakoottam", description: "blah blah blah", image: "/random.jpg"},
        { id: 5, title: "Spoken English", description: "blah blah blah", image: "/random.jpg"},
        { id: 6, title: "Digital Newspaper", description: "blah blah blah", image: "/random.jpg"},
        { id: 7, title: "School Radio", description: "blah blah blah", image: "/random.jpg"},
        { id: 8, title: "Abacus Class", description: "blah blah blah", image: "/random.jpg"},
        { id: 9, title: "Special Club Activities", description: "blah blah blah", image: "/random.jpg"},
        { id: 10, title: "Science Workshop and Social Science, Mathematics Lab", description: "blah blah blah", image: "/random.jpg"}
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowHeader(true);
            } 
            else {
                setShowHeader(false);
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
                        <li><a href="/AboutUs">About Us</a></li>
                        <li><a href="/Gallery">Gallery</a></li>
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
            <img className="background-image" src="/download.jfif" alt="School Background" />
            <div className="pkmaups">
                <h1>Pathiyil Keshavan Nair Memorial</h1>
                <h1>AUP School</h1>
            </div>
            </section>

            <section className="facilities-section">
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

        </div>
    );
};

export default HomePage;