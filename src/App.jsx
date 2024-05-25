import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Pricing />
    </div>
  );
};

export default App;
