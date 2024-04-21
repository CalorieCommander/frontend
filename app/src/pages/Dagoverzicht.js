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
    const [search_data, setSearch] = useState({});
    const [clicked_meal, setClicked] = useState({
        name: "",
        activity_id: "",
    });
    const [searched_meals, setSearched] = useState({});
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
    const openPopup5 = async (key) => {
        const meal = searched_meals.products[key];
        const token = getToken();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/meals/search_nutriments', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token,
                },
                body: JSON.stringify({
                    barcode: meal.code,
                })
            })
            if (!response.ok) {
            }

            const response_data = await response.json();
            setClicked(response_data);
        } catch (error) {
            console.log(error);
        }
        setShowPopup5(true);
    }
    //setClicked({ ...clicked_meal, product_name: meal.product_name, brand: meal.brands });

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
    const [dateData, setData] = useState({});
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
        setKilometers({ ...kilometers, kilometers: e.target.value });
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
    const handleSearch = (e) => {
        setSearch({ ...search_data, search_data: e.target.value });
    };
    const searchMeal = async (e) => {
        e.preventDefault();
        const token = getToken();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/meals/search', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token,
                },
                body: JSON.stringify({
                    search_data: search_data.search_data,
                })
            })
            if (!response.ok) {
            }
            const response_meals = await response.json();
            setSearched(response_meals);
        } catch (error) {
            console.log(error);
        }
    };
    function ProductNull() {
        if (clicked_meal.product == undefined) {
            return null;
        }
        else {
            return <div
                className={`overlay ${showPopup5 ? "show" : ""}`}
                id="overlay"
                onClick={closePopup5}
            >
                <div className="popup" onClick={(e) => e.stopPropagation()}>
                    <div className="maaltijd-container">
                        <img src={apple} alt="maaltijd" className="maaltijd-img"></img>
                        <h2 className="maaltijd-title">{clicked_meal.product.product_name}</h2>
                        <div className="blokjes-container">
                            <div className="kenmerken-container">
                                <h5 className="kenmerken-title">Kenmerken</h5>
                                <div className="kenmerken">
                                    <div className="kenmerk">
                                        Portie
                                        <div className="kenmerk-digit">100g</div>
                                    </div>
                                    <div className="kenmerk-line"></div>
                                    <div className="kenmerk">
                                        Energie (kcal)
                                        <div className="kenmerk-digit">{clicked_meal.product.nutriments["energy-kcal_100g"]}</div>
                                    </div>
                                    <div className="kenmerk-line"></div>
                                    <div className="kenmerk">
                                        Vetten
                                        <div className="kenmerk-digit">{clicked_meal.product.nutriments.fat_100g} gram</div>
                                    </div>
                                    <div className="kenmerk-line"></div>
                                    <div className="kenmerk">
                                        Suikers
                                        <div className="kenmerk-digit">{clicked_meal.product.nutriments.sugars_100g} gram</div>
                                    </div>
                                    <div className="kenmerk-line"></div>
                                </div>
                                <button onClick={() => addMeal(clicked_meal.product.code)} className="maaltijd-opslaan">Toevoegen</button>
                            </div>
                            <div className="feitjes-container">
                                <h5 className="kenmerken-title">Merk(en)</h5>
                                <div className="feitje">
                                    {clicked_meal.product.brands}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    }
    const addMeal = async (e) => {
        const token = getToken();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/meals/add', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token,
                },
                body: JSON.stringify({
                    barcode: clicked_meal.product.code,
                    date: currentDate,
                })
            })
            if (!response.ok) {
            }
            const response_data = await response.json();
            closePopup3();
            closePopup4();
            closePopup5();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="Test">


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
                    <span className="dag-activiteit-count">0</span>
                    <span className="dag-count">0</span>

                    <div className="dag-progress-bar">
                        <div
                            className="dag-progress-bar-fill"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                    <span className="dag-calorie-count">{dailyCalorieGoal}</span>
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
                            <h5 id="recent-title">Recente zoekopdrachten</h5>
                            {dateData.histories && dateData.histories.map((history, i) => {
                                // Return the element. Also pass key     
                                return (<h5 key={i} id="recent">{history.data}</h5>)
                            })}
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
                        <form onSubmit={searchMeal}>
                            <input
                                type="text"
                                id="search"
                                name="search"
                                placeholder="Zoek een maaltijd"
                                required onChange={handleSearch}
                            ></input>
                        </form>

                        {searched_meals.products && searched_meals.products.map((meal, i) => {
                            // Return the element. Also pass key     
                            return (<button key={i} className="result" onClick={() => openPopup5(i)}>
                                <img src={apple} alt="result-img" className="result-img"></img>
                                <h5 className="result-title">
                                    {meal.product_name} {meal.brands}
                                </h5>
                            </button>)
                        })}

                    </div>
                </div>
            </div>
            <ProductNull />

            <div className="dag-middle3-border">
                <div className="dag-maaltijd2-toevoeg">Vandaag gegeten</div>
                {dateData.date_meals && dateData.date_meals.map((meal, i) => {
                    // Return the element. Also pass key     
                    return (<div key={i} className="dag-little-border">
                        <img src={apple} alt="dag-apple" className="dag-apple"></img>
                        <div className="dag-apple-text">{meal.meal.name}</div>
                        <div className="dag-apple-info">{meal.calories_total} kcal (100 gram)</div>
                        <button className="dag-button">
                            <img src={plus2} alt="dag-plus2" className="dag-plus2"></img>
                        </button>
                    </div>)
                })}
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