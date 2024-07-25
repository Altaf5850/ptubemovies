import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import FooterBg from "../assets/footer.png";

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "250px",
  width: "100%",
};
const Footer = () => {
  return (
    <footer style={bgImage} className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              <span className="text-green-500">P</span> tube
            </h2>
            <p className="text-gray-400 font-mono capitalize">
              We bring you the best movies, TV shows, and <br /> web series and
              more content from around the world.
            </p>
          </div>
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold mb-4 font-serif">Quick Links</h2>
            <ul className="font-mono">
              <li className="mb-2">
                <a
                  href="/"
                  className="hover:underline hover:text-green-500 duration-200"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/kidsshows"
                  className="hover:underline hover:text-green-500 duration-200"
                >
                  Kids Shows
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/movies"
                  className="hover:underline hover:text-green-500 duration-200"
                >
                  Movies
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/webseries"
                  className="hover:underline hover:text-green-500 duration-200"
                >
                  WebSeries
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/about"
                  className="hover:underline hover:text-green-500 duration-200"
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/packages"
                  className="hover:underline hover:text-green-500 duration-200"
                >
                  Packages
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3">
            <h2 className="text-2xl font-bold mb-4 font-serif">Contact Us</h2>
            <p className="font-mono">Email: info@Ptube.com</p>
            <p className="font-mono">Phone: +123 456 7890</p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-blue-500 hover:scale-75 duration-200"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a
                href="https://instagram.com"
                className="text-pink-500 hover:scale-75 duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-blue-700 hover:scale-75 duration-200"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 ml-36 font-serif">
          <p>
            &copy; 2024 <span className="text-green-500">P</span>tube. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
