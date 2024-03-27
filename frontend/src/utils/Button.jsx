import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonName, to, classes }) => {
  return (
    <Link
      to={to}
      className={` ${classes} px-4 py-2 bg-transparent border border-gray-300 rounded-lg hover:bg-white  hover:text-black transition duration-300 text-sm md:text-base `}
    >
      {buttonName}
    </Link>
  );
};

export default Button;
