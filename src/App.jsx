import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Company from "./Pages/Company";
import Footer from "./Section/Footer";
import Navbar from "./Section/Navbar";

function App() {
  
  return (
    <div className="mx-2">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="company" Component={Company} />
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
