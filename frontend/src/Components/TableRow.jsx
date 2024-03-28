import Button from "../utils/Button";

const TableRowComponent = ({ student, route, buttonA, buttonB, onAssignMarks }) => {
  const assignedStatus = student.assignedMentor ? "Assigned" : "Unassigned";

  const handleAssignMarksClick = () => {
    onAssignMarks(student);
  };

  return (
    <tr key={student._id}>
      <td className="px-6 py-4 whitespace-nowrap">{student.rollNo}</td>
      <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{assignedStatus}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {route === "view" ? (
          <div className="flex bg-pink-300 justify-end space-x-4">
            <Button classes="" buttonName={buttonA} to="#" />
            <Button
              classes=""
              buttonName={buttonB}
              to="#"
              onClick={handleAssignMarksClick} // Handle Assign Marks button click
            />
          </div>
        ) : (
          <Button classes="" buttonName={buttonA} to="#" />
        )}
      </td>
    </tr>
  );
};

export default TableRowComponent;
