import React from "react";
import './Homepage.css';
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="Test">
            <div className="home-background">
                <div className="home-tekst1">WELKOM BIJ</div>
                <div className="home-tekst2">CALORIE COMMANDER</div>

                <div className="home-blauw-tekst">Meld je hieronder aan om je leven</div>
                <div className="home-blauw-tekst2">voorgoed te veranderen!</div>

                <div className="buttons-homepage">
                    <Link to="/login" className="home-button">
                        Inloggen
                    </Link>
                    <Link to="/register" className="home-button2">
                        Registreren
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Homepage;
