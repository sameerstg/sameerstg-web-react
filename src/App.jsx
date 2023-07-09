import React from "react";
import Navigation from "./Sections/Navigation";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Portfolio from "./Sections/Portfolio";
import Technologies from "./Sections/Technologies";



function App() {
  return (
    <div className="text-white">
      
       <Navigation/>
       <About/>
       {/* <Portfolio/> */}
        <Technologies/>
       
      <Footer/>
    </div>
  );
}

export default App;
