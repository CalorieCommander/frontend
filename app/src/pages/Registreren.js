import React from "react";
import './Registreren.css';
import { Link } from "react-router-dom";
import logo from '../img/caloriecommander.png';

const Registreren = () => {
  return (
      <div className="Test">
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <Link to="/" className="home">
          <h2>HOME</h2>
        </Link>
      </div>
      <div className="line"></div>

      <div className="text">
        REGISTREREN
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

      <Link to="/Registreren" className="registreer-button">
        registeren
      </Link>

    </div>
  );
};

export default Registreren;
