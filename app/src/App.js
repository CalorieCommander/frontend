import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
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
  const showName =
    location.pathname !== "/" &&
    location.pathname !== "/login" &&
    location.pathname !== "/register";

  return (
    <div>
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        {showName && <div className="name-corner">CERCHIO</div>}
      </div>
      <div className="line"></div>
      <Routes>
        <Route path="/pages/Account" element={<Accountpagina />} />
      </Routes>
      <Routes>
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
