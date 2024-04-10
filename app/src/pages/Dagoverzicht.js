import React from "react";
import "./Dagoverzicht.css";
import { Link } from "react-router-dom";
import logo from "../img/caloriecommander.png";

const Dagoverzicht = () => {
  return (
    <div className="Test">
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <a href="#" className="dag-name">
          CERCHIO
        </a>
      </div>
      <div className="line"></div>
      <div class="dag-top-border">
        <span class="dag-vandaag-text">Vandaag</span>
        <span class="dag-datum-text">13/03/2024</span>
      </div>
    </div>
  );
};
export default Dagoverzicht;
