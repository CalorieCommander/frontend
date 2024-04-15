import './Maandoverzicht.css';
import { Link } from "react-router-dom";
import logo from '../img/caloriecommander.png';
import React, { useState } from "react";

const Maandoverzicht = () => {
    const [showPopup, setShowPopup] = useState(false); // Staat om bij te houden of de pop-up moet worden weergegeven

    const openPopup = () => {
        setShowPopup(true); // Stel de staat in om de pop-up weer te geven wanneer de knop wordt geklikt
    };

    const closePopup = () => {
        setShowPopup(false); // Stel de staat in om de pop-up te verbergen wanneer er buiten de pop-up wordt geklikt
    };
    return (
        <div className="Test">
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />
                <Link to="/" className="home">
                    <h2>HOME</h2>
                </Link>
            </div>
            <div className="line"></div>

            <button className="account-button1" onClick={openPopup}>
                pop up
            </button>

            <div
                className={`overlay ${showPopup ? "show" : ""}`}
                id="overlay"
                onClick={closePopup}
            >
                <div className="popup" onClick={(e) => e.stopPropagation()}>
                    <h2>Dit is een pop-up!</h2>
                    <p>Hier kun je je inhoud plaatsen.</p>
                </div>
            </div>


            <div className="maand-text">
                MAANDOVERZICHT
            </div>

            <div className="maandoverzicht-container">
                <div className="maandoverzicht-text">Dit is uw maandoverzicht</div>
            </div>



        </div >

    );

};

export default Maandoverzicht;