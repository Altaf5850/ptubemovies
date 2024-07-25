import React, { useEffect, useState } from "react";
import Web from "../components/Web";

function WebSeries() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://assets.mspimages.in/gear/wp-content/uploads/2022/11/Wednesday.jpg",
    "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/12/Money-Heist-Season-5-Volume-2.jpg?fit=1200%2C675&ssl=1",
    "https://static.javatpoint.com/best/images/best-web-series12.png ",
    "https://qph.cf2.quoracdn.net/main-qimg-c4879d15a4aafe86602f2d970699ab03-lq",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((preSlide) => (preSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <>
        <div>
          <div className="carousel w-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item w-full ${
                  currentSlide === index ? "block" : "hidden"
                }`}
              >
                <img src={slide} className="w-full h-[90%]" />
              </div>
            ))}
            <div className="flex w-full  justify-center gap-2 py-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`btn bg-transparent border-none text-white hover:bg-transparent ${
                    currentSlide === index ? "opacity-100" : "opacity-50"
                  }`}
                >
                  .
                </button>
              ))}
            </div>
          </div>
        </div>
      <div className="w-full">
        <Web />
      </div>
    </>
  );
}

export default WebSeries;
