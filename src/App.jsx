import React from "react";
import Navigation from "./Sections/Navigation";
import Footer from "./Sections/Footer";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";

function App() {
  return (
    <Router>
    
      
      
       <Navigation/>
        <Routes>
        <Route exact path="/" Component={Home}>

           
        </Route>
        <Route exact path="/Services" Component={Services}>
        </Route>

       </Routes>
       

       
      <Footer/>
    
    </Router>
  );
}

export default App;
