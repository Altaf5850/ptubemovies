import React from "react";
import Img from "../assets/aut.png";

function Aboutd() {
  return (
    <div className="px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-serif p-4 uppercase">
          About Us
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left px-4">
          Welcome to <span className="text-green-500 text-2xl">P</span>tube,
          your ultimate destination for discovering the best in movies, web
          series, and cartoon shows! Our platform is designed to cater to all
          your entertainment needs by providing detailed information, reviews,
          and recommendations for a wide variety of visual content.
          <div>
            <h1 className="text-3xl font-bold font-serif p-4 uppercase">
              Our Mission
            </h1>
            <p className="px-4">
              At <span className="text-green-500 text-2xl">P</span>tube, our
              mission is to help you find your next favorite show or movie.
              Whether you are a fan of gripping dramas, thrilling adventures,
              heartwarming romances, or laugh-out-loud comedies, we have
              something for everyone. We aim to create a community where
              enthusiasts can explore, discuss, and enjoy the world of
              entertainment.
            </p>
          </div>
        </div>
        <img
          src={Img}
          alt="img"
          className="w-full h-auto mx-auto md:mx-0 md:w-80"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
        <img
          src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-agreement-clipart-two-men-shaking-hands-with-paper-cartoon-vector-png-image_6796255.png"
          alt="img"
          className="w-full h-auto"
        />
        <div className="px-4">
          <h1 className="text-3xl font-bold font-serif text-center md:text-left p-4 uppercase">
            What We Offer
          </h1>
          <p className="text-center md:text-left font-mono">
            Movie Recommendations: Dive into our extensive collection of movies
            across all genres. From timeless classics to the latest
            blockbusters, we provide reviews, ratings, and synopses to help you
            choose the perfect film for your mood. <br /> <br />
            Web Series Insights: Stay updated with the hottest web series
            streaming on popular platforms. Our curated lists, detailed reviews,
            and episode guides ensure you never miss a must-watch show. <br />{" "}
            <br />
            Cartoon Shows: Relive your childhood with our selection of beloved
            cartoon shows or discover new animated gems. Our content covers a
            range of age groups, ensuring fun for both kids and adults. <br />{" "}
            <br />
            Related Content: Find connections between different movies, series,
            and cartoons. Our unique recommendation system suggests related
            content based on your viewing history and preferences. <br /> <br />
            Community and Reviews: Join our community of entertainment lovers.
            Share your thoughts, read user reviews, and participate in
            discussions about your favorite shows and movies.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold font-serif text-center p-4 uppercase">
          Why Choose Us?
        </h1>
        <p className="text-center font-mono p-4">
          Curated Content: Our team of experts carefully curates and reviews all
          content, ensuring you get the best recommendations. <br />
          User-Friendly Interface: Easily navigate through our categories and
          find exactly what you’re looking for with our intuitive search and
          filter options. <br />
          Regular Updates: Stay in the loop with the latest releases and
          trending shows, thanks to our regularly updated database. <br />
          At <span className="text-green-500 text-2xl">P</span>tube, we believe
          that great entertainment can bring people together and create lasting
          memories. Explore, discover, and enjoy with us!
        </p>
      </div>
    </div>
  );
}

export default Aboutd;
