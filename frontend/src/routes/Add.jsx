import Navbar from "../Components/Navbar";
import { useState } from "react";
import TableRowComponent from "../Components/TableRow";

const AddComponent = () => {


    const [data, setData] = useState([
        { id: 1, name: 'John Doe', age: 30, occupation: 'Developer' },
        { id: 2, name: 'Jane Smith', age: 25, occupation: 'Designer' },
        // Add more data as needed
      ]);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Roll No.
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Occupation
            </th>
          </tr>
        </thead>
        <tbody className="bg-slate-50 divide-y divide-gray-200 w-full ">
          {data.map((row) => (
            <TableRowComponent row={row} buttonA="Add" buttonB="" route="add"  />
          ))}
        </tbody>
      </table>
    </div>

    </div>
  );
};

export default AddComponent;
