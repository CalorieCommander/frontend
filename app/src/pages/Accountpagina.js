import React, { useState, useEffect } from "react";
import './Accountpagina.css';
import { Link, useNavigate } from "react-router-dom";
import logo from '../img/caloriecommander.png';

const Accountpagina = () => {
    const [data, setData] = useState("");
    const getToken = () => {
        return localStorage.getItem('token');
    };
    useEffect(() => {
        const userData = async () => {
            const token = getToken();
            try {
                const response = await fetch('http://127.0.0.1:8000/api/user', {
                    method: 'get',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    },
                })
                if (!response.ok) {
                    console.log(response);
                }
    
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData);
            } catch (error) {
                console.log(error);
            }
        };
        userData();
    }, []);
    const [formData, setFormData] = useState({
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = getToken();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/user/update', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token,
                },
                body: JSON.stringify({
                    age: formData.account_age,
                    weight: formData.account_weight,
                    height: formData.account_height,
                })
            });
            if (!response.ok) {
                console.log(response);
            }

            const jsonData = await response.json();
            localStorage.setItem('token', jsonData.token);
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className="Test">
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="line"></div>
            <div className="account-border">
                <div className="account-name">cerchio</div>
                <div className="account-gegevens">Gegevens</div>
                <div className="account-naam">
                    Voornaam:
                    <br />
                    Achternaam:
                    <br />
                    E-mailadres:
                    <br />
                    Geslacht:
                </div>
                <input className="account-firstname" type="text" value={data.first_name}/>
                <input className="account-lastname" type="text" value={data.last_name}/>
                <input className="account-email" type="text" value={data.email} />
                <input className="account-gender" type="text" value={data.gender} />
                <a className="account-password-link" href="#">
                    Wachtwoord veranderen
                </a>
                <div className="account-BMI">BMI</div>
                <div className="account-bmi-gegevens">
                    Leeftijd:
                    <br />
                    Lengte:
                    <br />
                    Gewicht:
                </div>
                <form onSubmit={handleSubmit}>
                    <input className="account_age" type="text" value={data.age}/>
                    <input className="account_length" type="text" value={data.height} />
                    <input className="account_weight" type="text" value={data.weight} />
                    <button className="account-bewerken">
                        Gegevens bewerken
                    </button>
                    <a href="#" className="account-verwijderen-text">
                        Account verwijderen
                    </a>
                </form>
            </div>
        </div>
    );
}
export default Accountpagina;