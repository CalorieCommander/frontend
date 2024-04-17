import React, { useState } from "react";
import "./../pages/Account.css";
import image from "./../img/fef.png";

const AccountPage = () => {
  const [showPopup0, setShowPopup0] = useState(false); // State for the first popup
  const [showPopup1, setShowPopup1] = useState(false); // State for the second popup
  const [showPopup2, setShowPopup2] = useState(false); // State for the third popup

  const openPopup0 = () => {
    setShowPopup0(true);
  };

  const openPopup1 = () => {
    setShowPopup1(true);
  };

  const openPopup2 = () => {
    setShowPopup2(true);
  };

  const closePopup0 = () => {
    setShowPopup0(false);
  };

  const closePopup1 = () => {
    setShowPopup1(false);
  };

  const closePopup2 = () => {
    setShowPopup2(false);
  };

  return (
    <div>
      <div
        className={`overlay ${showPopup0 ? "show" : ""}`}
        id="overlay"
        onClick={closePopup0}
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

      <div
        className={`overlay ${showPopup1 ? "show" : ""}`}
        id="overlay"
        onClick={closePopup1}
      >
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <div className="act-add-container">
            <h2 className="act-add-title">Activiteit toevoegen</h2>
              <div className="popup-border">
                <h5 className="act-add-title">Beschikbare Activiteiten</h5>
                <button className="act-1" onClick={openPopup2}>
                  hardlopen
                </button>
                <button className="act-2" onClick={openPopup2}>
                  wandelen
                </button>
                <button className="act-3" onClick={openPopup2}>
                  fietsen
                </button>
              </div>
          </div>
        </div>
      </div>

      <div
        className={`overlay ${showPopup2 ? "show" : ""}`}
        id="overlay"
        onClick={closePopup2}
      >
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <div className="activiteit-container">
            <h2 className="act-title">(activiteit)</h2>
            <div className="gray"></div>
            <h5 id="kcal">afstand in kilometer</h5>
            <input type="number" id="number" name="kcal-number" placeholder="KM" required></input>
            <button className="opslaan">
              <h2>Toevoegen</h2>
            </button>
          </div>
        </div>
      </div>

      <button className="button0" onClick={openPopup0}>
        Wachtwoord veranderen
      </button>

      <button className="button1" onClick={openPopup1}>
        Activiteit toevoegen
      </button>

      <button className="button2" onClick={openPopup2}>
        Activiteit
      </button>  
    </div>
  );
};

export default AccountPage;
