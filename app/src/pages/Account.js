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
      <div
        className={`overlay ${showPopup ? "show" : ""}`}
        id="overlay"
        onClick={closePopup}
      >
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <div className="ww-container">
            <form action="#" method="post">
              <input type="password" id="password" name="login-password" placeholder="Nieuw wachtwoord" required></input>
            </form>
            <form action="#" method="post">
              <input type="password" id="password2" name="login-password" placeholder="Nieuw wachtwoord herhalen" required></input>
            </form>

            <button className="wwopslaan">
              <a href="#" className="wwopslaan-text">
                Nieuw wachtwoord opslaan
              </a>
            </button>
          </div>
        </div>
      </div>


      <div className="border">
        <div className="name">cerchio</div>
        <div className="gegevens">Gegevens</div>


        <div className="gegevens-1">
          <div className="naam">naam:</div>
          <div className="email">email:</div>
          <div className="geslacht">geslacht:</div>
        </div>


        <div className="gegevens-2">
          <input className="input" type="text" placeholder="Cerchio" />
          <input className="input" type="text" placeholder="jojo@gmail.com" />
          <input className="input" type="text" placeholder="Man" />
        </div>

        <button className="password-link" onClick={openPopup}>
          Wachtwoord veranderen
        </button>
        <div className="BMI">BMI</div>


        <div className="gegevens-3">
          <div className="leeftijd">Leeftijd:</div>
          <div className="lengte">Lengte:</div>
          <div className="gewicht">Gewicht:</div>
          <div className="doel-gewicht">Doel gewicht:</div>
        </div>


        <div className="gegevens-4">
          <input className="input" type="text" placeholder="19" />
          <input className="input" type="text" placeholder="1.87 meter" />
          <input className="input" type="text" placeholder="76 kg" />
          <input className="input" type="text" placeholder="70 kg" />
        </div>
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
