import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";
import logo from "./img/caloriecommander.png";
import ananas from "./img/fruit.png";
import kiwi from "./img/kiwi.png";
import watermelon from "./img/watermelon.png";
import peach from "./img/peach.png";
import banana from "./img/banana.png";
import pear from "./img/pear.png";
import apple from "./img/apple.png";

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <img src={logo} alt="logo" className="logo" />
          <div className="name-corner">CERCHIO</div>
        </div>
        <div className="line"></div>
        <div className="border">
          <div className="name">cerchio</div>
          <div className="gegevens">Gegevens</div>
          <div className="naam">
            Naam:
            <br />
            E-mailadres:
            <br />
            Geslacht:
          </div>
          <input className="input1" type="text" placeholder="Cerchio" />
          <input className="input2" type="text" placeholder="jojo@gmail.com" />
          <input className="input3" type="text" placeholder="Man" />
          <a className="password-link" href="#">
            Wachtwoord veranderen
          </a>
          <div className="BMI">BMI</div>
          <div className="bmi-gegevens">
            Leeftijd:
            <br />
            Lengte:
            <br />
            Gewicht:
          </div>
          <input className="input4" type="text" placeholder="19" />
          <input className="input5" type="text" placeholder="1.87 meter" />
          <input className="input6" type="text" placeholder="76 kg" />
          <button className="bewerken">
            <div className="gegevens-text">Gegevens bewerken</div>
          </button>
        </div>

        <img src={ananas} alt="ananas" className="fruit-ananas" />
        <img src={kiwi} alt="kiwi" className="fruit-kiwi" />
        <img src={watermelon} alt="watermelon" className="fruit-watermelon" />
        <img src={peach} alt="peach" className="fruit-peach" />
        <img src={banana} alt="banana" className="fruit-banana" />
        <img src={pear} alt="pear" className="fruit-pear" />
        <img src={apple} alt="apple" className="fruit-apple" />

        <img src={watermelon} alt="watermelon" className="fruit-ananas right" />
        <img src={banana} alt="banana" className="fruit-kiwi right" />
        <img src={apple} alt="apple" className="fruit-watermelon right" />
        <img src={peach} alt="peach" className="fruit-peach right" />
        <img src={kiwi} alt="kiwi" className="fruit-banana right" />
        <img src={pear} alt="pear" className="fruit-pear right" />
        <img src={apple} alt="apple" className="fruit-apple right" />

        <Routes>
          <Route path="/pages/Inloggen" element={<Inloggen />} />
          <Route path="/pages/Registreren" element={<Registreren />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
