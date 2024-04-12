import React, { useState } from "react";
import "./Dagoverzicht.css";
import { Link } from "react-router-dom";
import logo from "../img/caloriecommander.png";
import calendar from "../img/calendar.png";
import salad from "../img/salad.png";

const Dagoverzicht = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activityCount, setActivityCount] = useState(0);
  const [totalMealCalories, setTotalMealCalories] = useState(0);
  const [dailyCalorieGoal, setDailyCalorieGoal] = useState(0);

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

  const totalCaloriesGoal = 3000; // Het doel voor totale calorieën
  const consumedCalories = 1500; // Het aantal geconsumeerde calorieën

  const progressPercentage = (consumedCalories / totalCaloriesGoal) * 100; // Bereken de voortgang in procenten
  return (
    <div className="Test">
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <a href="#" className="dag-name">
          CERCHIO
        </a>
      </div>
      <div className="line"></div>
      <div className="dag-top-border">
        <span className="dag-vandaag-text">{dayName}</span>
        <span className="dag-datum-text">{formattedDate}</span>
        <span className="dag-week-text">Week {weekOfMonth}</span>
        <Link to="#">
          <img src={calendar} alt="calendar" className="dag-calendar" />
        </Link>
        <span className="dag-samenvatting-text">Samenvatting</span>
        <div className="dag-midden-border">
          <span className="dag-activiteit">Activiteiten</span>
          <span className="dag-activiteit-count">{activityCount}</span>
          <span className="dag-count">{totalMealCalories}</span>
          <div className="dag-progress-bar">
            <div
              className="dag-progress-bar-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span className="dag-doel">Doel</span>
          <span className="dag-calorie-count">{dailyCalorieGoal}</span>
        </div>
      </div>
      <div className="dag-maaltijd">Maaltijden</div>
      <div className="dag-middle-border">
        <img src={salad} alt="salad" className="dag-salad" />
        <div className="dag-maaltijd-toevoeg">Voeg hier je maaltijden toe</div>
        <div className="dag-maaltijd-text">
          Voeg nu je eerste
          <br /> maaltijd toe
        </div>
      </div>
    </div>
  );
};

export default Dagoverzicht;
