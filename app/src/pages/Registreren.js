import React from "react";
import './Registreren.css';
import { Link } from "react-router-dom";
import kiwi from '../img/kiwi.png';
import watermelon from '../img/watermelon.png';
import apple from '../img/apple.png';
import peach from '../img/peach.png';
import banana from '../img/banana.png';
import pear from '../img/pear.png';
import logo from '../img/caloriecommander.png';

const Registreren = () => {
  return (
    <div className="Test">
      <div className="register-navbar">
        <img src={logo} alt="logo" className="register-logo" />
        <h2 className="register-home">HOME</h2>
      </div>
      <div className="register-line"></div>

      <div className="register-text">
        Registreren
      </div>


      <div className="register-container">
        <form action="#" method="post">
          <input type="text" id="firstname" name="register-firstname" placeholder="Je voornaam" required></input>
        </form>
        <form action="#" method="post">
          <input type="text" id="lastname" name="register-lastname" placeholder="Je achternaam" required></input>
        </form>
        <form action="#" method="post">
          <input type="email" id="email" name="register-email" placeholder="Je email" required></input>
        </form>
        <form action="#" method="post">
          <input type="password" id="password" name="register-password" placeholder="Je wachtwoord" required></input>
        </form>
        <form action="#" method="post">
          <input type="password" id="password2" name="register-password_confirmation" placeholder="Bevestig je wachtwoord" required></input>
        </form>
      </div>

      <Link to="/pages/Inloggen" className="register-button">
        Registreren
      </Link>

      <img src={kiwi} alt="kiwi" className="register-fruit-kiwi" />
      <img src={watermelon} alt="watermelon" className="register-fruit-watermelon" />
      <img src={peach} alt="peach" className="register-fruit-peach" />
      <img src={banana} alt="banana" className="register-fruit-banana" />
      <img src={pear} alt="pear" className="register-fruit-pear" />

      <img src={watermelon} alt="watermelon" className="register-fruit-watermelon register-right" />
      <img src={banana} alt="banana" className="register-fruit-banana register-right" />
      <img src={apple} alt="apple" className="register-fruit-apple register-right" />
      <img src={peach} alt="peach" className="register-fruit-peach register-right" />
      <img src={kiwi} alt="kiwi" className="register-fruit-kiwi register-right" />
      <img src={pear} alt="pear" className="register-fruit-pear register-right" />
    </div>
  );
};

export default Registreren;
