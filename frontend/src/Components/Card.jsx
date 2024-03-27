import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Card = ({ icon, title, text }) => {
  return (
    <div className="max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <div>
          <Icon icon={icon} />
        </div>
        <div>
          <Link to="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
              {title}
            </h5>
          </Link>
        </div>
      </div>
      <p className="mb-3 text-gray-500">{text}</p>
      <Link
        to="#"
        className="px-4 py-2 bg-transparent border border-gray-500 rounded-lg hover:bg-white hover:text-black transition duration-300 text-sm md:text-base"
      >
        Add
        {/* <Icon icon={icon} /> */}
      </Link>
    </div>
  );
};

export default Card;
