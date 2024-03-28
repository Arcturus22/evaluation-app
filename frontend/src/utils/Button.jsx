import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonName, to, classes, style, onClick }) => {
  return (
    <Link to={to} className={`${classes} px-3 py-1 md:px-4 md:py-2 bg-transparent border border-gray-300 rounded-md hover:bg-white hover:text-black transition duration-300 text-xs md:text-sm`} style={style} onClick={onClick}>
      {buttonName}
    </Link>
  );
};

export default Button;
