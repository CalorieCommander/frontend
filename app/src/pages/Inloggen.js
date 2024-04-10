import React from "react";
import './Inloggen.css';
import { Link } from "react-router-dom";
import logo from '../img/caloriecommander.png';

const Inloggen = () => {
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
        INLOGGEN
      </div>

      <div className="login-container">
        <form action="#" method="post">
          <input type="email" id="email" name="login-email" placeholder="Jouw E-mail adress" required></input>
        </form>
        <form action="#" method="post">
          <input type="password" id="password" name="login-password" placeholder="Jouw wachtwoord" required></input>
        </form>
      </div>

      <Link to="/Inloggen" className="login-button">
        Inloggen
      </Link>
    </div>
  );
};
export default Inloggen;