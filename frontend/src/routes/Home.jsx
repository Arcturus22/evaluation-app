import Card from "../Components/Card";
import Navbar from "../Components/Navbar";

const HomeComponent = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="flex space-x-8 p-8">

      <Card icon="ant-design:user-add-outlined" title="Add New Students" text="Add or Replace new students here "/>
      <Card icon="mdi:account-group" title="View all Students" text="View all your assigned students here "/>
      </div>
    </div>
  );
};

export default HomeComponent;
