import React, { useState, useEffect } from "react";
import "./Dagoverzicht.css";
import { Link } from "react-router-dom";
import logo from "../img/caloriecommander.png";
import calendar from "../img/calendar.png";
import salad from "../img/salad.png";
import plus from "../img/plus.png";
import jogging from "../img/exercise.png";
import apple from "../img/apple.png";
import plus2 from "../img/plus2.png";
import jogging2 from "../img/jogging.png";
import min from "../img/interface.png";

const Dagoverzicht = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [activityCount, setActivityCount] = useState(0);
    const [totalMealCalories, setTotalMealCalories] = useState(0);
    const [dailyCalorieGoal, setDailyCalorieGoal] = useState(0);

    const dailyFacts = [
        "Eén keer per week vis eten is goed voor uw hart.",
        "Blauwe bessen behoren tot de meest voedzame vruchten ter wereld.",
        "Bananen zijn rijk aan kalium, wat goed is voor de gezondheid van het hart.",
        "Appels bevatten veel vezels, die kunnen helpen bij het reguleren van de spijsvertering.",
        "Sinaasappels zijn een uitstekende bron van vitamine C, wat belangrijk is voor een gezond immuunsysteem.",
        "Aardbeien zijn rijk aan antioxidanten, die kunnen helpen bij het bestrijden van ontstekingen.",
        "Ananas bevat een enzym genaamd bromelaïne, dat kan helpen bij de spijsvertering.",
        "Granaatappelsap staat bekend om zijn hoge gehalte aan antioxidanten, wat gunstig is voor de gezondheid van het hart.",
        "Mango's zijn rijk aan vitamine A, wat belangrijk is voor een gezonde huid en ogen.",
        "Avocado's bevatten gezonde enkelvoudig onverzadigde vetten, die kunnen helpen bij het verlagen van het cholesterolgehalte.",
        "Kiwi's bevatten meer vitamine C dan sinaasappels.",
        "Druiven bevatten resveratrol, een antioxidant die gunstig kan zijn voor de gezondheid van het hart.",
        "Bosbessen kunnen helpen bij het verbeteren van de hersenfunctie en het geheugen.",
        "Papaja's bevatten enzymen die kunnen helpen bij de spijsvertering en de darmgezondheid bevorderen.",
        "Perziken zijn een goede bron van vitamine A en vitamine C.",
        "Watermeloenen bevatten veel water en zijn een verfrissende en hydraterende vrucht.",
        "Cranberry's zijn rijk aan antioxidanten en kunnen helpen bij het voorkomen van urineweginfecties.",
        "Pruimen bevatten vezels en antioxidanten die de spijsvertering kunnen bevorderen.",
        "Kersen bevatten melatonine, een hormoon dat de slaap kan bevorderen.",
        "Appels bevatten pectine, een vezel die kan helpen bij het verlagen van het cholesterolgehalte.",
        "Bananen bevatten tryptofaan, een aminozuur dat kan helpen bij het verbeteren van de stemming.",
        "Ananas bevat bromelaïne, een enzym dat kan helpen bij de spijsvertering en ontstekingen kan verminderen.",
    ];

    // Functie om het feit van de dag op te halen op basis van de huidige datum
    const getDailyFact = () => {
        const currentDate = new Date();
        const dayOfMonth = currentDate.getDate();
        return dailyFacts[dayOfMonth - 1] || "Geen feit beschikbaar";
    };

    // Haal het feit van de dag op
    const dailyFact = getDailyFact();

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
    const [data, setData] = useState("");
    const getToken = () => {
        return localStorage.getItem('token');
    };
    useEffect(() => {
        const userData = async () => {
            const token = getToken();
            try {
                const response = await fetch('http://127.0.0.1:8000/api/date', {
                    method: 'post',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    },
                    body: JSON.stringify({
                        date: currentDate,
                      })
                })
                if (!response.ok) {
                    console.log(response);
                }
   
                const dateData = await response.json();
                console.log(dateData)
                setData(dateData);
            } catch (error) {
                console.log(error);
            }
        };
        userData();
    }, []);

    return (
        <div className="Test">
            <div className="dag-top-border">
                <span className="dag-vandaag-text">{dayName}</span>
                <span className="dag-datum-text">{formattedDate}</span>
                <span className="dag-week-text">Week {weekOfMonth}</span>
                <Link to="/maandoverzicht">
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
                <div className="dag-maaltijd-text">Voeg nu je eerste</div>
                <div className="dag-maaltijd-text1">maaltijd toe</div>
                <button className="dag-meal-button">
                    <img src={plus} alt="plus" className="dag-plus"></img>
                    <div className="dag-toevoegen">Toevoegen</div>
                </button>
            </div>

            <div className="dag-Activiteit">Activiteit</div>
            <div className="dag-middle2-border">
                <img src={jogging} alt="jogging" className="dag-jogging"></img>
                <div className="dag-activiteit-toevoeg">
                    Houd hier je activiteit bij
                </div>
                <div className="dag-activiteit-text">Klik hier om je activiteit te</div>
                <div className="dag-activiteit-text1">voegen</div>
                <button className="dag-activity-button">
                    <img src={plus} alt="plus" className="dag-plus"></img>
                    <div className="dag-toevoegen">Toevoegen</div>
                </button>
            </div>

            <div className="dag-middle3-border">
                <div className="dag-maaltijd2-toevoeg">Vandaag gegeten</div>
                <div className="dag-little-border">
                    <img src={apple} alt="dag-apple" className="dag-apple"></img>
                    <div className="dag-apple-text">Appel</div>
                    <div className="dag-apple-info">260 kcal Portie (200 gram)</div>
                    <button className="dag-button">
                        <img src={plus2} alt="dag-plus2" className="dag-plus2"></img>
                    </button>
                </div>
            </div>

            <div className="dag-middle4-border">
                <div className="dag-activiteit2-toevoeg">Vandaag gegeten</div>
                <div className="dag-little2-border">
                    <img src={jogging2} alt="dag-jogging2" className="dag-jogging2"></img>
                </div>
                <div className="dag-gelopen">6 km</div>
            </div>

            <div className="dag-voortgang">Houd je voortgang bij</div>
            <div className="dag-voortgang-border">
                <div className="dag-gewicht">Gewicht</div>
                <button className="dag-button-gewicht">
                    <img src={plus} alt="dag-plus3" className="dag-plus3"></img>
                </button>
                <div className="dag-gewicht-mens">80 kg</div>
                <button className="dag-button-gewicht2">
                    <img src={min} alt="dag-min" className="dag-min"></img>
                </button>
                <div className="dag-gewicht-doel">Doel</div>
                <div className="dag-gewicht-doel2">75 kg</div>
            </div>

            <div className="dag-feiten-border">
                <div className="dag-feit">Feit van de dag</div>
                <div className="dag-feitjes">{dailyFact}</div>
            </div>

            <div className="dag-footers">
                <img src={logo} alt="dag-logo" className="dag-logo-footer"></img>
                <div className="dag-footer-text">
                    Snel om aan de slag te gaan
                    <br />
                    Aanrader om te gebruiken
                    <br />
                    Volgens experts de beste keuze
                </div>
                <Link to="#" className="dag-about-link">
                    About
                </Link>
            </div>
        </div>
    );
};
export default Dagoverzicht;