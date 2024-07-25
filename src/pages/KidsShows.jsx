import React, { useEffect, useState } from "react";
import SecondSection from "../components/SecondSection";

export default function KidsShows() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeRunning = 3000;
  const timeAutoNext = 4000;
  const images = [
    "https://images-cdn.ubuy.co.in/635e51017621060f69396263-doraemon-12-x-16-inch-poster-bhurma.jpg",

    "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaQSSUC82VLkAkJrwUjVCqJExJxoUUc1VbiNTJ4WYw-HE7CXiAc3W6Q2BylyZv81Eh8Dd4spkOVwOl5pv_3JvIl2S9-K6uFKuw4H.jpg?r=55a",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a923bf5-7544-439b-bc4b-0383036aae85/dgyb91d-6d0b3e95-bded-4430-b8eb-ea6bcc5c9da1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhOTIzYmY1LTc1NDQtNDM5Yi1iYzRiLTAzODMwMzZhYWU4NVwvZGd5YjkxZC02ZDBiM2U5NS1iZGVkLTQ0MzAtYjhlYi1lYTZiY2M1YzlkYTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.T1ffQ_GJ-H38zJdqmftU_CRAp8-4gEQvTO9EbcFS0RU",
    "https://static0.moviewebimages.com/wordpress/wp-content/uploads/2024/01/land_16_9.jpeg",
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
      <div className="w-full overflow-hidden">
        <div className="relative w-[100vw] h-[100vh] overflow-hidden">
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
                  className="w-full h-full object-center"
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
                  className="w-full h-full object-cover rounded-lg"
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
        <div>
          <SecondSection />
        </div>
      </div>
    </>
  );
}
