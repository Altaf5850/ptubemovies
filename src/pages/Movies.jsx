import React, { useEffect, useState } from "react";
import Apim from "../components/Apim";

function Movies() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://wallpapers.com/images/featured/avengers-vm16xv4a69smdauy.jpg",
    "https://wallpapers.com/images/hd/joker-poster-37j6jfl9mk1jmozx.jpg",
    "https://www.computermagazine.it/wp-content/uploads/2022/10/black-panther-wakanda-forever-costumi-black-angels_jpeg_1200x0_crop_q85-2.jpg",
    "https://www.whoa.in/download/hollywood-upcoming-movies-doctor-strange-2016-hd-poster",
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
      <div>
        <Apim />
      </div>
    </>
  );
}

export default Movies;
