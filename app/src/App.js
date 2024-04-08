import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AccountPage from "./pages/Account";
import logo from "./img/caloriecommander.png";

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <img src={logo} alt="logo" className="logo" />
          <div className="name-corner">CERCHIO</div>
        </div>
        <div className="line"></div>

        <Link to="/pages/Account" className="button">
          Account
        </Link>

        <Routes>
          <Route path="/pages/Account" element={<AccountPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
