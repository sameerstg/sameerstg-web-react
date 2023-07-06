import React from "react";
import Navigation from "./Sections/Navigation";
import About from "./Sections/About";
import Services from "./Sections/Services";
import Contact from "./Sections/Contact";



function App() {
  return (
    <div className="text-white">
      
       <Navigation/>
       <About/>
       <Services/>
       <Contact/>

    </div>
  );
}

export default App;
