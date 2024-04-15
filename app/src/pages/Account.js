import React, { useState } from "react";
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
        <div className="gegevens-test1">
          <div className="naam">
            naam:
          </div>
          <div className="email">
            email:
          </div>
          <div className="geslacht">
            geslacht:
          </div>
        </div>
        <div className="gegevens-test2">
          <input className="input" type="text" placeholder="Cerchio" />
          <input className="input" type="text" placeholder="jojo@gmail.com" />
          <input className="input" type="text" placeholder="Man" />
        </div>
        
        
        
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
    </div>
  );
};

export default AccountPage;
