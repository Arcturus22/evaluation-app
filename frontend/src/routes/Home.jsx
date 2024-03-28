import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import EditMarksModal from "../modals/MarksModal";

const HomeComponent = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="container mx-auto py-8 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            icon="ant-design:user-add-outlined"
            title="Add New Students"
            text="Add or replace new students here."
            to="/add"
            buttonName="Add"
          />
          <Card
            icon="mdi:account-group"
            title="View All Students"
            text="View all your assigned students here."
            to="/view"
            buttonName="View"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
