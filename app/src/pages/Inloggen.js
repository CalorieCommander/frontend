import React from "react";
import './Inloggen.css';
import { Link } from "react-router-dom";
import kiwi from '../img/kiwi.png';
import watermelon from '../img/watermelon.png';
import apple from '../img/apple.png';
import peach from '../img/peach.png';
import banana from '../img/banana.png';
import pear from '../img/pear.png';
import ananas from '../img/ananas.png';
import logo from '../img/caloriecommander.png';

const Inloggen = () => {
  return (
    <div className="Test">
      <div className="login-navbar">
        <img src={logo} alt="logo" className="login-logo" />
        <h2 className="login-home">HOME</h2>
      </div>
      <div className="login-line"></div>

      <div className="login-text">
        INLOGGEN
      </div>


      <div className="login-container">
        <form action="#" method="post">
          <input type="email" id="email" name="login-email" placeholder="Your email address" required></input>
        </form>
        <form action="#" method="post">
          <input type="password" id="password" name="login-password" placeholder="Your Password" required></input>
        </form>
      </div>
      <img src={ananas} alt="ananas" className="login-fruit-ananas" />
      <img src={kiwi} alt="kiwi" className="login-fruit-kiwi" />
      <img src={watermelon} alt="watermelon" className="login-fruit-watermelon" />
      <img src={peach} alt="peach" className="login-fruit-peach" />
      <img src={banana} alt="banana" className="login-fruit-banana" />

      <img src={pear} alt="pear" className="login-fruit-ananas login-right" />
      <img src={banana} alt="banana" className="login-fruit-kiwi login-right" />
      <img src={apple} alt="apple" className="login-fruit-watermelon login-right" />
      <img src={peach} alt="peach" className="login-fruit-peach login-right" />
      <img src={kiwi} alt="kiwi" className="login-fruit-banana login-right" />


    </div>
  );
};
export default Inloggen;