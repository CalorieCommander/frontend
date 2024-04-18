import React, { useState, useEffect } from "react";
import './Accountpagina.css';
import { Link, useNavigate } from "react-router-dom";

const Accountpagina = () => {
    let navigate = useNavigate();
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [showPopup4, setShowPopup4] = useState(false);
    const [showPopup5, setShowPopup5] = useState(false);
  
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
    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const openPopup = () => {
        setShowPopup(true);
    };
    const closePopup = () => {
        setShowPopup(false);
    };
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
                setData(jsonData);
            } catch (error) {
                console.log(error);
            }
        };
        userData();
    }, []);
    const [formData, setFormData] = useState({
        account_gender: '',
        account_age: '',
        account_length: '',
        account_weight: '',
    });
    const handleSubmit = async (e) => {
        console.log(formData);
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
                    gender: formData.account_gender,
                    age: formData.account_age,
                    weight: formData.account_weight,
                    height: formData.account_length,
                })
            });
            if (!response.ok) {
                console.log(response);
            }
            const respond = await response.json();
            console.log(respond);
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const [passwordPopupData, setPasswordPopupData] = useState({
        password: '',
        password_confirmation: '',
    });
    const handlePasswordChange = (e) => {
        setPasswordPopupData({ ...passwordPopupData, [e.target.name]: e.target.value });
    };
    const handlePasswordSubmit = async (e) => {
        console.log(passwordPopupData);
        e.preventDefault();
        const token = getToken();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/user/update_password', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token,
                },
                body: JSON.stringify({
                    password: passwordPopupData.account_password,
                    password_confirmation: passwordPopupData.account_password_confirmation,
                })
            });
            if (!response.ok) {
                const responseData = await response.json();
                if (response.status === 422) {
                    console.log(responseData.errors);
                    setErrors(responseData.errors);
                } else {
                    throw new Error(responseData.message || 'An error occurred.');
                }
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="Test">
            <div
                className={`account-overlay ${showPopup ? "account-show" : ""}`}
                id="account-overlay"
                onClick={closePopup}
            >
                <div className="account-popup" onClick={(e) => e.stopPropagation()}>
                    <div className="account-ww_container">
                        <form onSubmit={handlePasswordSubmit} method="post">
                            <input type="password" id="password_popup_password" name="account_password" onChange={handlePasswordChange} placeholder="Nieuw wachtwoord" required></input>
                            {errors.password && <div className="error">{errors.password[0]}</div>}
                            <input type="password" id="password_popup_password_confirmation" name="account_password_confirmation" onChange={handlePasswordChange} placeholder="Nieuw wachtwoord herhalen" required></input>
                            {errors.password_confirmation && <div className="error">{errors.password_confirmation[0]}</div>}
                            <button type="submit" className="account-save_password_button">Opslaan</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="account-border">
                <div className="account-name">{data.first_name}</div>
                <div className="account-gegevens">Gegevens</div>
                <div className="account-naam">
                    <div>
                        Voornaam
                        <input className="account" name="account-firstname" disabled type="text" defaultValue={data.first_name} />
                    </div>
                    <div>
                        Achternaam
                        <input className="account" name="account-lastname" disabled type="text" defaultValue={data.last_name} />
                    </div>
                    <div>
                        E-mailadres
                        <input className="account" name="account-email" disabled type="text" defaultValue={data.email} />
                    </div>
                    <div>
                        Geslacht
                        <input className="account" name="account_gender" type="text" onChange={handleChange} defaultValue={data.gender} />
                    </div>
                </div>
                
                
                
                <form onSubmit={handleSubmit}>
                    <button className="account-password-link" onClick={openPopup}>
                        Wachtwoord veranderen
                    </button>
                    <div className="account-BMI">BMI</div>
                    <div className="account-bmi-gegevens">
                        <div>
                            Leeftijd:
                            <input className="account" name="account_age" type="text" onChange={handleChange} defaultValue={data.age} />
                        </div>
                        <div>
                            Lengte (CM):
                            <input className="account" name="account_height" type="text" onChange={handleChange} defaultValue={data.height} />
                        </div>
                        <div>
                            Gewicht (KG):
                            <input className="account" name="account_weight" type="text" onChange={handleChange} defaultValue={data.weight} />
                        </div>
                    </div>
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