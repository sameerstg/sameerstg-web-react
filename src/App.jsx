import React from "react";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Section/Footer";

function App() {
  return (
    <Router>
    
      
      
       
        <Routes>
        <Route exact path="/" Component={Home}>

           
        </Route>

       </Routes>
       

       <Footer/>
    
    </Router>
  );
}

export default App;
