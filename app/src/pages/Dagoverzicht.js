import React, { useState } from "react";
import "./Dagoverzicht.css";
import { Link } from "react-router-dom";
import logo from "../img/caloriecommander.png";
import calendar from "../img/calendar.png";

const Dagoverzicht = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activityCount, setActivityCount] = useState(0);
  const [caloriesCount, setCaloriesCount] = useState(0);

  // Functie om de tekst voor de datum bij te werken
  const updateDateText = () => {
    const days = [
      "Zondag",
      "Maandag",
      "Dinsdag",
      "Woensdag",
      "Donderdag",
      "Vrijdag",
      "Zaterdag",
    ];
    const dayName = days[currentDate.getDay()];

    // Dag, Maand en Jaar ophalen uit de huidige datum
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Maanden beginnen bij 0 (januari)
    const year = currentDate.getFullYear();

    // Week van het jaar berekenen volgens ISO 8601
    const startOfYear = new Date(year, 0, 1);
    const weekNumber = Math.ceil(
      ((currentDate - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7
    );

    // Datum formaat aanpassen (dd/mm/jjjj)
    const formattedDate = `${day}/${month}/${year}`;

    return [dayName, formattedDate, weekNumber];
  };

  const [dayName, formattedDate, weekOfMonth] = updateDateText();

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
        <span class="dag-vandaag-text">{dayName}</span>
        <span class="dag-datum-text">{formattedDate}</span>
        <span class="dag-week-text">Week {weekOfMonth}</span>
        <Link to="#">
          <img src={calendar} alt="calendar" className="dag-calendar" />
        </Link>
        <span class="dag-samenvatting-text">Samenvatting</span>
        <div class="dag-midden-border">
          <span class="dag-activiteit">Activiteiten</span>
          <span class="dag-activiteit-count">{activityCount}</span>
          <span class="dag-count">{caloriesCount}</span>
          <span class="dag-doel">Doel</span>
          <span class="dag-calorie-count">{caloriesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Dagoverzicht;
