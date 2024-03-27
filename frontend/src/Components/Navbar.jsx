import { Link } from "react-router-dom";
import Button from "../utils/Button";

const Navbar = () => {
  return (
    <div className="flex items-center  bg-blue-700 justify-between py-3 border-b border-gray-400">
      <div className="text-xl text-white font-semibold p-5 pl-7">Evaluation Dashboard</div>
      <nav>
        <div className="flex items-center space-x-4 px-4">
          <Button classes="text-gray-100" buttonName="Submit" to="" />
          <Button classes="text-gray-100" buttonName="Logout" to="/" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
