import React, { useState } from "react";
import './Inloggen.css';
import { json, useNavigate } from "react-router-dom";

const Inloggen = () => {
  const [errors, setErrors] = useState({});
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
        const responseData = await response.json();
        if (response.status === 422) {
          console.log(responseData.errors);
          setErrors(responseData.errors);
        } else {
          throw new Error(responseData.message || 'An error occurred.');
        }
      } else {
        const clickeddate = new Date();
        const jsonData = await response.json();
        localStorage.setItem('token', jsonData.access_token);
        localStorage.setItem('first_name', jsonData.user.first_name);
        navigate(
          '/dagoverzicht',
          {
            state: {
              clickeddate
            }
          }
      )
      }


    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="Test">
      <div className="login-text">
        INLOGGEN
      </div>

      <div className="login-container">
        <form onSubmit={handleSubmit} method="post">
          <input type="email" id="login_email" name="login_email" placeholder="Je emailadres" onChange={handleChange} required></input>
          {errors.email && <div className="error">{errors.email[0]}</div>}
          <input type="password" id="login_password" name="login_password" placeholder="Je wachtwoord" onChange={handleChange} required></input>
          {errors.password && <div className="error">{errors.password[0]}</div>}
          <button id="submit_button" type="submit"> Inloggen </button>
        </form>
      </div>
    </div>
  );
};
export default Inloggen;