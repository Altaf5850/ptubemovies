import React from "react";

function Hero() {
  return (
    <div className="w-full overflow-hidden relative">
      <img
        src="https://nius.moviebloc.com/news/20230405/org/291f9bd9f824afb1e2c5d8ee235bdb0a.jpg"
        alt=""
        className="w-full h-screen object-cover opacity-40"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4">
        <h1 className="text-lg sm:text-5xl font-serif uppercase">
          Welcome to
          <span className="text-green-500 text-4xl sm:text-6xl"> P </span>
          <span className="capitalize">tube</span>
        </h1>
        <p className="text-md sm:text-2xl pt-2 font-serif">
          Unlimited movies, TV shows and more
        </p>
        <p className="font-mono font-bold text-sm sm:text-xl pt-2">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-3">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-2 bg-transparent border rounded-lg text-white mb-2 sm:mb-0 sm:mr-3 w-full sm:w-auto"
          />
          <button className="p-2 bg-green-500 text-white font-serif rounded-lg w-full sm:w-auto">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
