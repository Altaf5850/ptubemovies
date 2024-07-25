import React from "react";

function card() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center mt-3 uppercase">
        World Popular Kids Shows
      </h1>
      <div className="carousel carousel-end rounded-box">
        <div className="carousel-item">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384010-fchlbmjvwh-portrait.jpg"
            className="w-96 h-70 object-center"
            alt="Movie"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://image.tmdb.org/t/p/w780/je5Z7gbFTzrs3FPHINo9yGiHoVo.jpg"
            className="w-96 h-70 object-center"
            alt="Movie"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://static0.colliderimages.com/wordpress/wp-content/uploads/2023/11/coco-movie-poster.jpg"
            className="w-96 h-70 object-center"
            alt="Movie"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00379741-zgtxqvvxpq-portrait.jpg"
            className="w-96 h-70 object-center"
            alt="Movie"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/aladdin-1532612274.jpg?crop=0.952xw:0.938xh;0.0225xw,0.0272xh&resize=980:*"
            className="w-96 h-70 object-center"
            alt="Movie"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/toy-story-1529421942.jpg?crop=0.9950248756218905xw:1xh;center,top&resize=980:*"
            className="w-96 h-70 object-center"
            alt="Movie"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.liveabout.com/thmb/_o-_iCHC6AHPDBR67Pl8Fd0UBMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TheNutJob-56a575333df78cf772887292.jpg"
            className="w-96 h-70 object-center"
            alt="Movie"
          />
        </div>
      </div>
      <a
        href="/kidsshows"
        className="btn bg-green-500 border-none text-white hover:scale-95 duration-200 hover:bg-transparent ml-[45%] mb-3 mt-5"
      >
        Watch More
      </a>
    </div>
  );
}

export default card;
