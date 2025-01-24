import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../assets/Footer.jsx";
import "../styles/AboutUs.css";

const AboutUs = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const managers = [
        { id: 1, name: "Shri. Pathiyil Kesavan Nair", year: "1893-1940", image: "/managers/Keshavan.jpg"},
        { id: 2, name: "Shri. Sethumadhavan Nair", year: "1940-1967", image: "/managers/Sethumadhavan.jpg"},
        { id: 3, name: "Smt. Madanakalyani Amma", year: "1967-2008", image: "/managers/Madanakalyani.jpg"},
        { id: 4, name: "Shri. P Muraleedharan", year: "2008-2017", image: "/managers/Muraleedharan.jpg"},
        { id: 5, name: "Smt. Pathiyil Rugmani", year: "2017-2020", image: "/managers/Rugmini.jpg"},
        { id: 6, name: "Smt. Valsala Nottath", year: "2020-2024", image: "/managers/valsala.jpeg"},
    ];

    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

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

    const oddManagers = managers.filter((_,index) => index%2 === 0);
    const evenManagers = managers.filter((_,index) => index%2 !== 0);

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    return (
        <div className="about-us">
            <div className="about-us-container bg-gradient-to-r from-gray-800 via-sky-700 to-sky-600">
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

                <div className="managers-column fade-in">
                    {oddManagers.map((manager, index) => (
                        <div key={manager.id} className="manager-card">
                            <img src={manager.image} alt={manager.name} className="manager-image" />
                            <p>{manager.name}</p>
                            <p>{manager.year}</p>
                        </div>
                    ))}
                </div>
                <div className="history-text fade-in">
                    <h1>About Us</h1>
                    <p>
                        The school that blazed a unique trail in the field of education originated as an ‘ezhuththu pallikoodam’ with 27 students 
                        in 1893. The word ‘ezhuththu’ means writing and ‘pallikoodam’ means school in Malayalam. It was Shri. Pathiyil Kesavan Nair 
                        who transformed the traditional education centre into a formal school and shifted it into its current location in 1903. 
                        It had 4 classes, from 1st to 4th, and 4 teachers at that time. The school was transformed into a Higher Elementary school 
                        by Shri. Sethumadhavan Nair in 1952. In 1955, the school adopted the Elementary School Leaving Certificate (ESLC) examination. 
                        At that time, this certificate enabled a candidate to acquire a job in the State as primary school teacher, police constable or 
                        clerk in the Secretariat.The period of the school under the managership of Shri. Sethumadhavan Nair was the golden era of the 
                        school. The period also saw the contribution of some memorable teachers including Shri. Appu Achan Master, Shri Gopala Krishnan 
                        Master and Shri. Raghavan Master.
                    </p><br/>
                    <p>
                        Following the untimely death of Shri. Sethumadhavan Nair, his wife Smt. Madanakalyani Amma took over as the manager. 
                        Shri. P. Ramankutty Master, Shri. A. Vasudevan Master and Smt. Kalyanikutty Teacher handled the post of Head Master 
                        of the school during this period.By the centennial year of 1993, the school boasted a strength of 1489 kids from 1st 
                        to 7th standard, with 33 divisions and 45 teachers. Shri. P. Muraleedharan, son of Shri. Sethumadhavan Nair was the 
                        Head Master of the school at that time, having taken that responsibility in 1990. A new auditorium with a seating 
                        capacity of a thousand people was built to mark the centenary year with the contributions from well wishers in the 
                        local community and those who were farther away. That memorable year also saw Shri. P. Muraleedharan bagging the best 
                        teacher award at the state level. He was further felicitated by the best teacher award at the national level in September 2000.
                    </p><br/>
                    <p>
                        The school focussed not only in academic curriculum, but the holistic growth of the children by training them in arts, 
                        crafts and other extracurricular activities. It was a consistent leader in school youth festivals in these areas. 
                        The school continued its journey over the years, evolving with the changes in the educational system by introducing 
                        English medium teaching, computer science training etc. In 2012, the school name was prefixed with PKM to immortalize 
                        the fact that it is a memorial to its founder Shri. Pathiyil Kesavan Nair. Smt. Pathiyil Rugmani was the manager for the 
                        period 2017-2020. The year 2018 saw the school reaching the milestone of its 125th anniversary, when the foundation was 
                        laid for a new multi-storey building with every classroom in that building being a ‘smart classroom’.
                    </p>
                </div>
                <div className="managers-column fade-in">
                    {evenManagers.map((manager, index) => (
                        <div key={manager.id} className="manager-card">
                            <img src={manager.image} alt={manager.name} className="manager-image" />
                            <p>{manager.name}</p>
                            <p>{manager.year}</p>
                        </div>
                    ))}
                </div>
            </div>
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

export default AboutUs;