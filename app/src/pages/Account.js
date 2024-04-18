import React, { useState } from "react";
import "./../pages/Account.css";
import image from "./../img/plus.png";
import apple from "./../img/apple.png";

const AccountPage = () => {
  const [showPopup0, setShowPopup0] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup5, setShowPopup5] = useState(false);

  const openPopup0 = () => {
    setShowPopup0(true);
  };

  const openPopup1 = () => {
    setShowPopup1(true);
  };

  const openPopup2 = () => {
    setShowPopup2(true);
  };

  const openPopup3 = () => {
    setShowPopup3(true);
  };

  const openPopup4 = () => {
    setShowPopup4(true);
  };

  const openPopup5 = () => {
    setShowPopup5(true);
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

  const closePopup3 = () => {
    setShowPopup3(false);
  }

  const closePopup4 = () => {
    setShowPopup4(false);
  }

  const closePopup5 = () => {
    setShowPopup5(false);
  }

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




      <div
        className={`overlay ${showPopup3 ? "show" : ""}`}
        id="overlay"
        onClick={closePopup3}
      >
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <div className="maaltijd-add-container">
            <h2 className="maaltijd-add-title">Maaltijd toevoegen</h2>
            <div className="popup-border">
              <h5 className="maaltijd-add-title">Beschikbare Maaltijden</h5>
              <button className="search-button" onClick={openPopup4}>Wat wil je zoeken?</button>
              <div className="maaltijd-1">
                <div id="test1">Kwark 0% vet</div>
                <div id="test2" className="incline-block">Optimel, normale portie 100g</div>
              </div>
              <div className="maaltijd-2">
                <div id="test1">Broodje worst</div>
                <div id="test2">Normale portie 150g</div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div
        className={`overlay ${showPopup4 ? "show" : ""}`}
        id="overlay"
        onClick={closePopup4}
      >
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <div className="search-container">
            <input type="text" id="search" name="search" placeholder="Zoek een maaltijd" required></input>
            <h5 id="recent-title">Recente zoekopdrachten</h5>
            <h5 id="recent">kwark</h5>
            <h5 id="recent">ananas</h5>
            <h5 id="recent">help het is 1 uur 's nachts ik wil dood</h5>
            <button className="result" onClick={openPopup5}>
              <img src={apple} alt="result-img" className="result-img"></img>
              <h5 className="result-title">DIT DINGETJE KOMT PAS ALS JE IETS INTYPT IN DE SEARCHBAR</h5>
            </button>
          </div>
        </div>
      </div>



      <div
        className={`overlay ${showPopup5 ? "show" : ""}`}
        id="overlay"
        onClick={closePopup5}
      >
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <div className="maaltijd-container">
            <img src={apple} alt="maaltijd" className="maaltijd-img"></img>
            <h2 className="maaltijd-title">(maaltijd)</h2>
            <div className="blokjes-container">
              <div className="kenmerken-container">
                <h5 className="kenmerken-title">kenmerken</h5>
                <div className="kenmerken">
                  <div className="kenmerk">kenmerk
                    <div className="kenmerk-digit">150g</div>
                  </div>
                  <div className="kenmerk-line"></div>
                  <div className="kenmerk">Energie (kcal)
                    <div className="kenmerk-digit">80</div>
                  </div>
                  <div className="kenmerk-line"></div>
                  <div className="kenmerk">Vetten
                    <div className="kenmerk-digit">0</div>
                  </div>
                  <div className="kenmerk-line"></div>
                  <div className="kenmerk">Suikers
                    <div className="kenmerk-digit">12g</div>
                  </div>
                  <div className="kenmerk-line"></div>
                </div>
                <button className="maaltijd-opslaan">
                  Toevoegen
                </button>
              </div>
              <div className="feitjes-container">
                <h5 className="kenmerken-title">leuk feitje</h5>
                <div className="feitje">
                  Hallo, Mijn naam is Bas Brouwer en ik ben nu 3 uur lang bezig met dit. Het is 2 uur 's nachts en ik wil dood.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <button className="button0" onClick={openPopup0}>
        Wachtwoord veranderen
      </button>

      <button className="button1" onClick={openPopup1}>
        Activiteit toevoegen
      </button>

      <button className="button2" onClick={openPopup3}>
        Maaltijd toevoegen
      </button>
    </div>
  );
};

export default AccountPage;
