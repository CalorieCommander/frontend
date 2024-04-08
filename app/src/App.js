// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
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

        <Routes>
          <Route path="/pages/Account" element={<AccountPage />} />
          <Route path="/*" element={<PageWithAccountButton />} />
        </Routes>
      </div>
    </Router>
  );
}

function PageWithAccountButton() {
  const location = useLocation();
  // Render de "Account" knop alleen als de huidige locatie niet de "Account" pagina is
  if (location.pathname !== "/pages/Account") {
    return (
      <div>
        <Link to="/pages/Account" className="button">
          Account
        </Link>
      </div>
    );
  }
  return null;
}

export default App;
