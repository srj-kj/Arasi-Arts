import React from "react";
import Hero from "./components/HeroSection";
import NewArrivals from "./components/NewArrivals";
import AboutArtist from "./components/AboutArtist";
import "./App.css";
import ModernCollections from "./components/ModernCollections";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ModernCollections />
      <NewArrivals />
      <AboutArtist />
    </div>
  );
};

export default App;
