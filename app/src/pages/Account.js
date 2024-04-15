import React, { useState } from "react";
import ananas from "./../img/fruit.png";
import kiwi from "./../img/kiwi.png";
import watermelon from "./../img/watermelon.png";
import peach from "./../img/peach.png";
import banana from "./../img/banana.png";
import pear from "./../img/pear.png";
import apple from "./../img/apple.png";
import "./../pages/Account.css";

const AccountPage = () => {
  const [showPopup, setShowPopup] = useState(false); // Staat om bij te houden of de pop-up moet worden weergegeven

  const openPopup = () => {
    setShowPopup(true); // Stel de staat in om de pop-up weer te geven wanneer de knop wordt geklikt
  };

  const closePopup = () => {
    setShowPopup(false); // Stel de staat in om de pop-up te verbergen wanneer er buiten de pop-up wordt geklikt
  };

  return (
    <div>
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
          <br />
          Doel:
        </div>
        <input className="input4" type="text" placeholder="19" />
        <input className="input5" type="text" placeholder="1.87 meter" />
        <input className="input6" type="text" placeholder="76 kg" />
        <input className="input7" type="text" placeholder="70 kg" />
        <button className="bewerken">
          <a href="#" className="gegevens-text">
            Gegevens bewerken
          </a>
        </button>
        <a href="#" className="verwijderen-text">
          Account verwijderen
        </a>
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
    </div>
  );
};

export default AccountPage;
