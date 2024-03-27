import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonName, to, classes }) => {
  return (
    <Link
      to={to}
      className={`px-4 py-2 bg-transparent border text-gray-100  border-gray-300 rounded-lg hover:bg-white hover:text-black transition duration-300 text-sm md:text-base ${classes}`}
    >
      {buttonName}
    </Link>
  );
};

export default Button;
