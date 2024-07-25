import React, { useState } from "react";
import { Link } from "react-router-dom";

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelect = (packageName) => {
    setSelectedPackage(packageName);
  };

  const bgImage = {
    backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/007/162/507/non_2x/premium-luxury-abstract-black-gold-line-background-illustration-free-vector.jpg')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "250px",
    width: "100%",
  };
  return (
    <div
      style={bgImage}
      className="flex flex-col items-center justify-center min-h-screen py-6 bg-transparent sm:py-12"
    >
      <div className="max-w-4xl mx-auto space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mt-32">
        <PricingCard
          name="Basic Plan"
          price="₹ 0"
          features={["Normal Movie", "Normal Web Series", "Normal Kids Shows"]}
          buttonText="Select Basic"
          isSelected={selectedPackage === "Basic Plan"}
          onSelect={() => handlePackageSelect("Basic Plan")}
        />
        <PricingCard
          name="Standard Plan"
          price="₹ 999"
          features={[
            "No Ads",
            "Full 4KHD",
            "Controller All Functions",
            "New Movies",
          ]}
          buttonText="Select Standard"
          isSelected={selectedPackage === "Standard Plan"}
          onSelect={() => handlePackageSelect("Standard Plan")}
        />
        <PricingCard
          name="Premium Plan"
          price="₹ 4999"
          features={[
            "No Ads",
            "Full 4KHD",
            "Controller All Functions",
            "New Movies",
            "unlimited Movies Web Series kids shows",
            "life time subscription",
          ]}
          buttonText="Select Premium"
          isSelected={selectedPackage === "Premium Plan"}
          onSelect={() => handlePackageSelect("Premium Plan")}
        />
      </div>
    </div>
  );
};

const PricingCard = ({
  name,
  price,
  features,
  buttonText,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`bg-gray-500 shadow-md rounded-lg overflow-hidden ${
        isSelected ? "border-4 border-blue-500" : ""
      }`}
      onClick={onSelect}
    >
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-white">{name}</h2>
        <p className="mt-4 text-green-500">{price}</p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-white">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="ml-2">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
        <Link
          to="/paymentmode"
          className="mt-6 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700 m-2"
        >
          {buttonText}
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
