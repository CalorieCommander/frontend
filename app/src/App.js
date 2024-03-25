import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <div className="Test">
        <nav>
          <ul>
            <li>
              <Link to="/pages/Home">Home</Link>
            </li>
            <li>
              <Link to="/pages/About">About</Link>
            </li>
            <li>
              <Link to="/pages/Test">Test</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/pages/Home" element={<Home />} />
          <Route path="/pages/About" element={<About />} />
          <Route path="/pages/Test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
