import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer"  ;   

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Pricing />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
