import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import TableRowComponent from "../Components/TableRow";
import { fetchAllStudents } from "../utils/serverHelper";

const AddComponent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const allStudents = await fetchAllStudents();
        
        setStudents(allStudents);

      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

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
                Mentor Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-50 divide-y divide-gray-200 w-full ">
            {students.map((student) => (
              <TableRowComponent
                student ={student}
                buttonA="Add"
                buttonB=""
                route="add"
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddComponent;
