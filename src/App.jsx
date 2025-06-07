import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home"
import Project from "./pages/Project";
import Contact from "./pages/Contact";
function App() {
  return (
    <div>
      <Home/>
      <Navbar />
      <Project/>
      <Contact/>
      
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
