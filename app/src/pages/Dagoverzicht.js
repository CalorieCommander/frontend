import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./Dagoverzicht.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../img/caloriecommander.png";
import calendar from "../img/calendar.png";
import salad from "../img/salad.png";
import plus from "../img/plus.png";
import jogging from "../img/exercise.png";
import apple from "../img/apple.png";
import plus2 from "../img/plus2.png";
import jogging2 from "../img/jogging.png";
import min from "../img/interface.png";
import check from "../img/checked.png";
import { click } from "@testing-library/user-event/dist/click";
const Dagoverzicht = () => {
    const [activityData, setActivity] = useState({
        name: "",
        activity_id: "",
    });
    const [kilometers, setKilometers] = useState({});
    const [activityCount, setActivityCount] = useState(0);
    const [totalMealCalories, setTotalMealCalories] = useState(0);
    const [dailyCalorieGoal, setDailyCalorieGoal] = useState(0);
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [showPopup4, setShowPopup4] = useState(false);
    const [showPopup5, setShowPopup5] = useState(false);
    let activity = "";
    const openPopup1 = () => {
        setShowPopup1(true);
    };

    const openPopup2 = (e) => {
        activity = dateData.activities.find(activity => activity.id == e.target.value);
        setActivity({ ...activityData, name: activity.name, activity_id: activity.id });
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

    const closePopup1 = () => {
        setShowPopup1(false);
    };

    const closePopup2 = () => {
        setShowPopup2(false);
    };

    const closePopup3 = () => {
        setShowPopup3(false);
    };

    const closePopup4 = () => {
        setShowPopup4(false);
    };

    const closePopup5 = () => {
        setShowPopup5(false);
    };
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
    const { state } = useLocation();
    let navigate = useNavigate();
    // Functie om het feit van de dag op te halen op basis van de huidige datum
    const getDailyFact = () => {
        const currentDate = new Date();
        const dayOfMonth = currentDate.getDate();
        return dailyFacts[dayOfMonth - 1] || "Geen feit beschikbaar";
    };
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // Haal het feit van de dag op
    let currentDate = "";
    if (state == null) {
        currentDate = new Date();
    }
    else {
        currentDate = state.clickeddate;
    }
    const dailyFact = getDailyFact();



    const totalCaloriesGoal = 3000; // Het doel voor totale calorieën
    const consumedCalories = 1500; // Het aantal geconsumeerde calorieën
    const progressPercentage = (consumedCalories / totalCaloriesGoal) * 100; // Bereken de voortgang in procenten
    const [dateData, setData] = useState("");
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
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    },
                    body: JSON.stringify({
                        date: currentDate,
                    })
                })
                if (!response.ok) {
                }

                const dateData = await response.json();
                console.log(dateData);
                setData(dateData);
            } catch (error) {
                console.log(error);
            }
        };
        userData();
    }, []);
    const handleKilometers = (e) => {
        setKilometers({ ...kilometers, kilometers: e.target.value });
    };
    const saveActivity = async (e) => {
        e.preventDefault();
        setKilometers({ ...kilometers, kilometers: e.target.value });
        console.log(currentDate, activityData.activity_id, kilometers.kilometers);
        const token = getToken();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/activities/add', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token,
                },
                body: JSON.stringify({
                    date: currentDate,
                    activity_id: activityData.activity_id,
                    kilometers: kilometers.kilometers,
                })
            })
            if (!response.ok) {
            }

            const response_data = await response.json();
            closePopup1();
            closePopup2();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="Test">
            <div className="dag-top-border">
                <span className="dag-vandaag-text">{dateData.date_text}</span>
                <span className="dag-datum-text">{dateData.date_show}</span>
                <span className="dag-week-text">Week {dateData.week_number}</span>
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
                    <span className="dag-calorie-count">{dailyCalorieGoal}</span>
                </div>
            </div>

            <div className="dag-maaltijd">Maaltijden</div>
            <div className="dag-middle-border">
                <img src={salad} alt="salad" className="dag-salad" />
                <div className="dag-maaltijd-toevoeg">Voeg hier je maaltijden toe</div>
                <div className="dag-maaltijd-text">Voeg nu je eerste</div>
                <div className="dag-maaltijd-text1">maaltijd toe</div>
                <button className="dag-meal-button" onClick={openPopup3}>
                    <img src={plus} alt="plus" className="dag-plus"></img>
                    <div className="dag-toevoegen">Toevoegen</div>
                </button>
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
                            {dateData.activities && dateData.activities.map((activity, i) => {
                                // Return the element. Also pass key     
                                return (<button className="act-1" key={i} value={activity.id} name={`activity_${activity.id}`} onClick={openPopup2}>
                                    {activity.name}
                                </button>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="dag-Activiteit">Activiteit</div>
            <div className="dag-middle2-border">
                <img src={jogging} alt="jogging" className="dag-jogging"></img>
                <div className="dag-activiteit-toevoeg">
                    Houd hier je activiteit bij
                </div>
                <div className="dag-activiteit-text">Klik hier om je activiteit te</div>
                <div className="dag-activiteit-text1">voegen</div>
                <button className="dag-activity-button" onClick={openPopup1}>
                    <img src={plus} alt="plus" className="dag-plus"></img>
                    <div className="dag-toevoegen">Toevoegen</div>
                </button>
            </div>
            <div
                className={`overlay ${showPopup2 ? "show" : ""}`}
                id="overlay"
                onClick={closePopup2}
            >
                <div className="popup" onClick={(e) => e.stopPropagation()}>
                    <div className="activiteit-container">
                        <h2 className="act-title">{activityData.name}</h2>
                        <div className="gray"></div>
                        <h5 id="kcal">afstand in kilometer</h5>
                        <form onSubmit={saveActivity}>
                            <input
                                type="number"
                                id="dag_number"
                                name="dag_kilometers"
                                placeholder="KM"
                                required onChange={handleKilometers}
                            ></input>
                            <button className="opslaan" type="submit">
                                <h2>Toevoegen</h2>
                            </button>
                        </form>
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
                            <button className="search-button" onClick={openPopup4}>
                                Wat wil je zoeken?
                            </button>
                            <div className="maaltijd-1">
                                <div id="test1">Kwark 0% vet</div>
                                <div id="test2" className="incline-block">
                                    Optimel, normale portie 100g
                                </div>
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
                        <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Zoek een maaltijd"
                            required
                        ></input>
                        <h5 id="recent-title">Recente zoekopdrachten</h5>
                        <h5 id="recent">kwark</h5>
                        <h5 id="recent">ananas</h5>
                        <h5 id="recent">help het is 1 uur 's nachts ik wil dood</h5>
                        <button className="result" onClick={openPopup5}>
                            <img src={apple} alt="result-img" className="result-img"></img>
                            <h5 className="result-title">
                                DIT DINGETJE KOMT PAS ALS JE IETS INTYPT IN DE SEARCHBAR
                            </h5>
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
                                    <div className="kenmerk">
                                        kenmerk
                                        <div className="kenmerk-digit">150g</div>
                                    </div>
                                    <div className="kenmerk-line"></div>
                                    <div className="kenmerk">
                                        Energie (kcal)
                                        <div className="kenmerk-digit">80</div>
                                    </div>
                                    <div className="kenmerk-line"></div>
                                    <div className="kenmerk">
                                        Vetten
                                        <div className="kenmerk-digit">0</div>
                                    </div>
                                    <div className="kenmerk-line"></div>
                                    <div className="kenmerk">
                                        Suikers
                                        <div className="kenmerk-digit">12g</div>
                                    </div>
                                    <div className="kenmerk-line"></div>
                                </div>
                                <button className="maaltijd-opslaan">Toevoegen</button>
                            </div>
                            <div className="feitjes-container">
                                <h5 className="kenmerken-title">leuk feitje</h5>
                                <div className="feitje">
                                    Hallo, Mijn naam is Bas Brouwer en ik ben nu 3 uur lang bezig
                                    met dit. Het is 2 uur 's nachts en ik wil dood.

                                    Hallo mijn naam is Kevin Houwerzijl en ik ben hier net 3 uur lang mee bezig geweest. Ik kan geen popup of het woordje "activity" meer zien, dus ik ga nu lekker slapen.
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                <div className="dag-activiteit2-toevoeg">Vandaag gedaan</div>
                {dateData.date_activities && dateData.date_activities.map((date_activity, i) => {
                    // Return the element. Also pass key     
                    return (
                        <div className="dag-little2-border">
                            <img src={jogging2} alt="dag-jogging2" className="dag-jogging2"></img>
                            <div className="dag-gelopen" key={i}>{Math.round(date_activity.kilometers)} km</div>
                        </div>
                    )
                })}
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
                <button className="dag-check-doel">
                    <img src={check} alt="check" className="dag-check"></img>
                </button>
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