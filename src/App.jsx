import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Section/Footer";
import Navbar from "./Section/Navbar";

function App() {
  
  return (
    <div >
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
