import React, { useState } from "react";
import './Registreren.css';
import { Link, useNavigate  } from "react-router-dom";
import logo from '../img/caloriecommander.png';

const Registreren = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    register_first_name: '',
    register_last_name: '',
    register_email: '',
    register_password: '',
    register_password_confirmation: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.register_first_name,
          last_name: formData.register_last_name,
          email: formData.register_email,
          password: formData.register_password,
          password_confirmation: formData.register_password_confirmation
        })
      });
      if (!response.ok) {
        console.log(response);
      }
      const jsonData = await response.json();
      navigate("/Inloggen");
      
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
        <Link to="/" className="home">
          <h2>HOME</h2>
        </Link>
      </div>
      <div className="line"></div>

      <div className="register-text">
        REGISTREREN
      </div>


      <div className="register-container">
        <form onSubmit={handleSubmit} method="post">
          <input type="text" id="firstname" name="register_first_name" placeholder="Je voornaam" onChange={handleChange} required></input>
          <input type="text" id="lastname" name="register_last_name" placeholder="Je achternaam" onChange={handleChange} required></input>
          <input type="email" id="email" name="register_email" placeholder="Je email" onChange={handleChange} required></input>
          <input type="password" id="password" name="register_password" placeholder="Je wachtwoord" onChange={handleChange} required></input>
          <input type="password" id="password2" name="register_password_confirmation" placeholder="Bevestig je wachtwoord" onChange={handleChange} required></input>
          <button type="submit"> Registreren </button>
        </form>
      </div>

      <Link to="/Registreren" className="registreer-button">
        registeren
      </Link>

    </div>
  );
};

export default Registreren;
