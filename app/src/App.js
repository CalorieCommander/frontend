import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import Accountpagina from "./pages/Accountpagina";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";
import Dagoverzicht from "./pages/Dagoverzicht";
import Maandoverzicht from "./pages/Maandoverzicht";
import logo from "./img/caloriecommander.png";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const getName = () => {
    return localStorage.getItem('first_name');
  };
  const name = getName();
  const showName =
    location.pathname !== "/" &&
    location.pathname !== "/login" &&
    location.pathname !== "/register";
    const logo_link =
    location.pathname !== "/" &&
    location.pathname !== "/login" &&
    location.pathname !== "/register";
  return (
    <div>
      <div className="navbar">
      <Link to="/dagoverzicht">
      {logo_link && <img src={logo} alt="logo" className="logo" />}
        </Link>

        <Link to="/account">
          {showName && <div className="name-corner">{name}</div>}
        </Link>
      </div>
      <div className="line"></div>
      <Routes>
        <Route path="/pages/Account" element={<Accountpagina />} />
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Inloggen />} />
        <Route exact path="/account" element={<Accountpagina />} />
        <Route exact path="/register" element={<Registreren />} />
        <Route exact path="/dagoverzicht" element={<Dagoverzicht />} />
        <Route exact path="/maandoverzicht" element={<Maandoverzicht />} />
      </Routes>
    </div>
  );
};

export default App;
