import React from "react";
import './Homepage.css';
import { Link } from "react-router-dom";
import kiwi from '../img/kiwi.png';
import watermelon from '../img/watermelon.png';
import apple from '../img/apple.png';
import peach from '../img/peach.png';
import banana from '../img/banana.png';
import pear from '../img/pear.png';
import ananas from '../img/ananas.png';
import logo from '../img/caloriecommander.png';

const Homepage = () => {
    return (
        <div className="Test">
            <div className="home-navbar">
                <img src={logo} alt="logo" className="home-logo" />
            </div>
            <div className="home-line"></div>
            <img src={ananas} alt="ananas" className="home-fruit-ananas" />
            <img src={kiwi} alt="kiwi" className="home-fruit-kiwi" />
            <img src={watermelon} alt="watermelon" className="home-fruit-watermelon" />
            <img src={peach} alt="peach" className="home-fruit-peach" />
            <img src={banana} alt="banana" className="home-fruit-banana" />

            <img src={pear} alt="pear" className="home-fruit-ananas home-right" />
            <img src={banana} alt="banana" className="home-fruit-kiwi home-right" />
            <img src={apple} alt="apple" className="home-fruit-watermelon home-right" />
            <img src={peach} alt="peach" className="home-fruit-peach home-right" />
            <img src={kiwi} alt="kiwi" className="home-fruit-banana home-right" />
            <div className="home-tekst">
                WELKOM BIJ
                <br />
                CALORIECOMMANDER
            </div>
            <div className="home-blauw-tekst">
                Meld je hieronder aan om je leven
                <br />
                voorgoed te veranderen!
            </div>
            <Link to="/Inloggen" className="home-button">
                Inloggen
            </Link>
            <Link to="/Registreren" className="home-button2">
                Registreren
            </Link>
        </div>
    );
};
export default Homepage;
