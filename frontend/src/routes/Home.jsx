import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import EditMarksModal from "../modals/MarksModal";

const HomeComponent = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="flex space-x-8 p-8">
        <Card
          icon="ant-design:user-add-outlined"
          title="Add New Students"
          text="Add or Replace new students here "
          to="/add"
          buttonName="Add"
        />
        <Card
          icon="mdi:account-group"
          title="View all Students"
          text="View all your assigned students here "
          to="/view"
          buttonName="View"
        />
      </div>
    </div>
  );
};

export default HomeComponent;
