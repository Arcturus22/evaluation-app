import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import TableRowComponent from "../Components/TableRow";
import EditMarksModal from "../modals/MarksModal";
import { fetchUnasignedStudents } from "../utils/serverHelper";

const AddComponent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const unassignedStudents = await fetchUnasignedStudents();
        setStudents(unassignedStudents);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStudents();
    console.log("/add rendered");
  }, []);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">

          <thead className="bg-gray-100">
            <tr >
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
          <tbody className="bg-slate-50 divide-y divide-gray-200 w-full">
            {students.map((student) => (
              <
                TableRowComponent
                key={student._id}
                route="route"
                student={student}
                buttonA="Add"
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddComponent;
