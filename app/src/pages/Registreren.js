import React, { useState } from "react";
import './Registreren.css';
import { useNavigate } from "react-router-dom";

const Registreren = () => {
  let navigate = useNavigate();
  const [errors, setErrors] = useState({});
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
        const responseData = await response.json();
        if (response.status === 422) {
          console.log(responseData.errors);
          setErrors(responseData.errors);
        } else {
          throw new Error(responseData.message || 'An error occurred.');
        }
      } else {
        const jsonData = await response.json();
        console.log(jsonData);
        navigate("/login");
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
      <div className="register-text">
        REGISTREREN
      </div>


      <div className="register-container">
        <form onSubmit={handleSubmit} method="post">
          <input type="text" id="register_firstname" name="register_first_name" placeholder="Je voornaam" onChange={handleChange} required></input>
          {errors.first_name && <div className="error">{errors.first_name[0]}</div>}
          <input type="text" id="register_lastname" name="register_last_name" placeholder="Je achternaam" onChange={handleChange} required></input>
          {errors.last_name && <div className="error">{errors.last_name[0]}</div>}
          <input type="email" id="register_email" name="register_email" placeholder="Je emailadres" onChange={handleChange} required></input>
          {errors.email && <div className="error">{errors.email[0]}</div>}
          <input type="password" id="register_password" name="register_password" placeholder="Je wachtwoord" onChange={handleChange} required></input>
          {errors.password && <div className="error">{errors.password[0]}</div>}
          <input type="password" id="register_password_confirmation" name="register_password_confirmation" placeholder="Bevestig je wachtwoord" onChange={handleChange} required></input>
          <button id="submit_button" type="submit"> Registreren </button>
        </form>
      </div>

    </div>
  );
};

export default Registreren;
