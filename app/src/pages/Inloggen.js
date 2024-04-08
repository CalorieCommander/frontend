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
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <h2 className="home">HOME</h2>
      </div>
      <div className="line"></div>

      <div className="text">
        INLOGGEN
      </div>


      <div className="container">
        <form action="#" method="post">
          <input type="email" id="email" name="email" placeholder="Your email address" required></input>
        </form>
        <form action="#" method="post">
          <input type="password" id="password" name="password" placeholder="Your Password" required></input>
        </form>
      </div>
      <img src={ananas} alt="ananas" className="fruit-ananas" />
      <img src={kiwi} alt="kiwi" className="fruit-kiwi" />
      <img src={watermelon} alt="watermelon" className="fruit-watermelon" />
      <img src={peach} alt="peach" className="fruit-peach" />
      <img src={banana} alt="banana" className="fruit-banana" />

      <img src={pear} alt="pear" className="fruit-ananas right" />
      <img src={banana} alt="banana" className="fruit-kiwi right" />
      <img src={apple} alt="apple" className="fruit-watermelon right" />
      <img src={peach} alt="peach" className="fruit-peach right" />
      <img src={kiwi} alt="kiwi" className="fruit-banana right" />

      <Link to="/Registreren" className="button2">
        Registreren
      </Link>
    </div>
  );
};
export default Inloggen;