import React, { useState } from "react";
import './Inloggen.css';
import { Link } from "react-router-dom";
import logo from '../img/caloriecommander.png';

const Inloggen = () => {
  const [formData, setFormData] = useState({
    login_email: '',
    login_pasword: '',
  });
  const handleSubmit = async (e) => {
        console.log(formData)
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.login_pasword,
          password: formData.login_password,
        })
      });
      if (!response.ok) {
        console.log(response);
      }
      const jsonData = await response.json();
      
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

      <div className="text">
        INLOGGEN
      </div>

      <div className="login-container">
        <form onSubmit={handleSubmit} method="post">
          <input type="email" id="email" name="login_email" placeholder="Jouw E-mail adress" onChange={handleChange} required></input>
          <input type="password" id="password" name="login_password" placeholder="Jouw wachtwoord" onChange={handleChange} required></input>
          <button type="submit"> Registreren </button>
        </form>
      </div>

      <Link to="/Inloggen" className="login-button">
        Inloggen
      </Link>
    </div>
  );
};
export default Inloggen;