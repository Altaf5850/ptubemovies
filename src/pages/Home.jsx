import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import FirstSection from "../components/FirstSection";
import Card from "../components/card";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <div className="w-full h-3 bg-gray-600 "></div>
      <Carousel />
      <div className="w-full h-3 bg-gray-600 "></div>
      <FirstSection />
      <div className="w-full h-3 bg-gray-600 "></div>
      <Card />
      <div className="w-full h-3 bg-gray-600 "></div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
