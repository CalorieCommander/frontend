import React, { useState } from "react";
import './Inloggen.css';
import { Link, json, useNavigate } from "react-router-dom";
import logo from '../img/caloriecommander.png';

const Inloggen = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    login_email: '',
    login_password: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.login_email,
          password: formData.login_password,
        })
      });
      if (!response.ok) {
        console.log(response);
      }

      const jsonData = await response.json();
      localStorage.setItem('token', jsonData.access_token);
      navigate("/Accountpagina");
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

      <div className="login-text">
        INLOGGEN
      </div>

      <div className="login-container">
        <form onSubmit={handleSubmit} method="post">
          <input type="email" id="email" name="login_email" placeholder="Jouw E-mail adress" onChange={handleChange} required></input>
          <input type="password" id="password" name="login_password" placeholder="Jouw wachtwoord" onChange={handleChange} required></input>
          <button type="submit"> Registreren </button>
        </form>
      </div>
    </div>
  );
};
export default Inloggen;