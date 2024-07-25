import React, { useEffect, useState } from "react";

const FirstSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeAutoNext = 4000;

  const images = [
    "https://images.thedirect.com/media/article_full/loki-season-2-cast.jpg",
    "https://images.indianexpress.com/2021/05/money-heist-2-1200.jpg",
    "https://images.bauerhosting.com/legacy/empire-images/features/5757ed56bf1bdcf50c7ff1d6/Peaky%20Blinders%20main.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80",
    "https://i.pinimg.com/736x/43/2a/51/432a5159f80a297a8a176193bce35595.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      showSlider("next");
    }, timeAutoNext);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const showSlider = (type) => {
    if (type === "next") {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold font-serif text-center mt-4 uppercase">
        World Popular Web Series
      </h1>
      <div className="relative w-[100vw] h-[100vh] overflow-hidden mt-5">
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 w-[100%] h-[100%] object-center ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4 z-10 ml-[25%]">
          {images.map((img, index) => (
            <div key={index} className="relative w-24 h-36 flex-shrink-0">
              <img
                src={img}
                className="w-full h-full object-center rounded-lg"
                alt={`Thumbnail ${index}`}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-1/4 md:bottom-1/5 right-1/2 transform translate-x-1/2 z-10 flex gap-4 items-center">
          <button
            onClick={() => showSlider("prev")}
            className="w-10 h-10 bg-gray-800 bg-opacity-50 text-white rounded-full"
          >
            ‹
          </button>
          <button
            onClick={() => showSlider("next")}
            className="w-10 h-10 bg-gray-800 bg-opacity-50 text-white rounded-full"
          >
            ›
          </button>
        </div>
      </div>

      <a
        href="/webseries"
        className="btn bg-green-500 border-none text-white hover:scale-95 duration-200 hover:bg-transparent ml-[45%] mb-3 mt-5"
      >
        Watch More
      </a>
    </>
  );
};

export default FirstSection;
