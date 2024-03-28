import Button from "../utils/Button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-blue-700 py-3 px-4 md:px-7 border-b border-gray-400">
      <div className="text-lg text-white font-semibold truncate">Evaluation Dashboard</div>
      <div className="hidden md:flex items-center space-x-4">
        <Button classes="text-sm text-gray-100 px-3 py-1 rounded-md bg-blue-800 hover:bg-blue-600" buttonName="Submit" to="" />
        <Button classes="text-sm text-gray-100 px-3 py-1 rounded-md bg-blue-800 hover:bg-blue-600" buttonName="Logout" to="/" />
      </div>
    </div>
  );
};

export default Navbar;
