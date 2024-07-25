import React from "react";
import Aboutd from "../components/Aboutd";

function About() {
  return (
    <>
      <div className="w-full">
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/172/994/original/happy-family-watching-television-together-in-living-room-family-illustration-in-cartoon-style-vector.jpg"
          alt="img"
          className="w-full h-[50vh] md:h-[70vh] lg:h-[90vh] object-cover"
        />
      </div>
      <div>
        <Aboutd />
      </div>
    </>
  );
}

export default About;
