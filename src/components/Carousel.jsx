import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const movies = [
  {
    id: 1,
    title: "The Dark Knight",
    image:
      "https://static.javatpoint.com/best/images/best-hollywood-movies4.jpg",
    Rating: "9.1/10",
  },
  {
    id: 2,
    title: "Titanic",
    image:
      "https://static.javatpoint.com/best/images/best-hollywood-movies3.jpg",
    Rating: "7.9/10",
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    image:
      "https://static.javatpoint.com/best/images/best-hollywood-movies6.jpg",
    Rating: "8.4/10",
  },
  {
    id: 4,
    title: "Avatar",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1i88No7Y35z87UK5V0JQ2ttZ7Tx9TW4tY3F0W3OeWN5v3s2xC",
    Rating: "7.8/10",
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    image:
      "https://static.javatpoint.com/best/images/best-hollywood-movies1.jpg",
    Rating: "9.3/10",
  },
];

function Carousel() {
  const [activeCard, setActiveCard] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current, next) => setActiveCard(next),
  };

  return (
    <>
      <div className="w-full p-8">
        <h2 className="text-3xl font-serif font-bold mb-4 text-center uppercase">
          World Popular Movies
        </h2>
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              onClick={() => setActiveCard(index)}
              className={`cursor-pointer p-4 ${
                activeCard === index
                  ? "transform scale-110 transition-transform duration-300"
                  : ""
              }`}
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-center font-mono mt-2">{movie.title}</h3>
              <h3 className="text-center text-gray-400">{movie.Rating}</h3>
            </div>
          ))}
        </Slider>
      </div>
      <a
        href="/movies"
        className="btn bg-green-500 border-none text-white hover:scale-95 duration-200 hover:bg-transparent ml-[45%] mb-3"
      >
        Watch More
      </a>
    </>
  );
}

export default Carousel;
