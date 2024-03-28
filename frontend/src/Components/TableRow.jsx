import Button from "../utils/Button";

const TableRowComponent = ({ route, student, buttonA, buttonB, onAssignMarks }) => {
  const handleAssignMarksClick = () => {
    onAssignMarks(student);
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">{student.rollNo}</td>
      <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
      <td className="px-6 py-4 whitespace-nowrap"><i>{student.assignedMentor ? "assigned" : "unassigned"}</i></td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex justify-end space-x-4">
          <Button buttonName={buttonA} style={{backgroundColor: "#FFEA00", color: "gray", border: "0px", fontWeight: "bold"}} />
          {
            route === "view"
            ? <Button buttonName={buttonB} style={{backgroundColor: "#AAFF00", color: "gray", border: "0px", fontWeight: "bold"}} onClick={handleAssignMarksClick} />
            : <></>
          }
        </div>
      </td>
    </tr>
  );
};

export default TableRowComponent;
