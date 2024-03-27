import Button from "../utils/Button";

const TableRowComponent = ({ row, route, buttonA, buttonB }) => {
  return (
    <tr key={row.id}>
      <td className="px-6 py-4 whitespace-nowrap">{row.age}</td>
      <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{row.occupation}</td>
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
