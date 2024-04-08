import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";
import logo from "./img/caloriecommander.png";
import kiwi from "./img/kiwi.png";
import watermelon from "./img/watermelon.png";
import peach from "./img/peach.png";
import banana from "./img/banana.png";
import pear from "./img/pear.png";
import apple from "./img/apple.png";

function App() {
  return (
    <Router>
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

        <Link to="/pages/Inloggen" className="button">
          Inloggen
        </Link>

        <img src={kiwi} alt="kiwi" className="fruit-kiwi" />
        <img src={watermelon} alt="watermelon" className="fruit-watermelon" />
        <img src={peach} alt="peach" className="fruit-peach" />
        <img src={banana} alt="banana" className="fruit-banana" />
        <img src={pear} alt="pear" className="fruit-pear" />

        <img src={watermelon} alt="watermelon" className="fruit-watermelon right" />
        <img src={banana} alt="banana" className="fruit-banana right" />
        <img src={apple} alt="apple" className="fruit-apple right" />
        <img src={peach} alt="peach" className="fruit-peach right" />
        <img src={kiwi} alt="kiwi" className="fruit-kiwi right" />
        <img src={pear} alt="pear" className="fruit-pear right" />

        <Routes>
          <Route path="/pages/Inloggen" element={<Inloggen />} />
          <Route path="/pages/Registreren" element={<Registreren />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

