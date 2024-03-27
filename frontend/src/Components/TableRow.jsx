import Button from "../utils/Button";

const TableRowComponent = ({ student, route, buttonA, buttonB }) => {
  const assignedStatus = student.assignedMentor ? "Assigned" : "Unassigned";

  return (
    <tr key={student._id}>
      <td className="px-6 py-4 whitespace-nowrap">{student.rollNo}</td>
      <td className="px-6 py-4 whitespace-nowrap">{`${student.firstName} ${student.lastName}`}</td>
      <td className="px-6 py-4 whitespace-nowrap">{assignedStatus}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {route === "view" ? (
          <div className="flex justify-end space-x-4">
            <Button classes="" buttonName={buttonA} to="/" />
            <Button classes="" buttonName={buttonB} to="/" />
          </div>
        ) : (
          <Button classes="" buttonName={buttonA} to="/" />
        )}
      </td>
    </tr>
  );
};

export default TableRowComponent;
