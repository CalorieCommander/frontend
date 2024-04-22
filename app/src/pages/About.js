import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="about-info">Over ons</div>
      <div className="about-info-container">
        <p className="about-info-text">
          Binnen ons team werken wij aan een geweldige applicatie:
        </p>
        <p className="about-info-text">
          <strong>Caloriecommander</strong>
        </p>
        <p className="about-info-text">
          Ons team bestaat uit 5 prachtige teamleden:
        </p>
        <ul className="about-info-list">
          <li>Cerchio</li>
          <li>Bas</li>
          <li>Kevin</li>
          <li>Elias</li>
          <li>Diede</li>
        </ul>
        <p className="about-info-text">
          Ons doel is de gebruiker te motiveren om gezonder te gaan eten.
        </p>
        <p className="about-info-text">
          Alle rechten worden op een veilige manier beveiligd.
        </p>
        <p className="about-info-text">
          De design is grotendeels ontworpen door Cerchio met behulp van
        </p>
        <p className="about-info-text">
          de teamleden. Kevin heeft de database en api gemaakt en zorgt-
        </p>
        <p className="about-info-text">
          ervoor dat alles goed wordt opgeslagen.
        </p>
        <p className="about-info-text">
          Bas en Kevin hebben het functioneel ontwerp en technisch ontwerp
        </p>
        <p className="about-info-text">
          gemaakt. Diede, Bas en Cerchio hebben gewerkt aan het front-end
          applicatie.
        </p>
      </div>
    </div>
  );
};

export default About;
