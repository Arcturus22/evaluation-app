import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import TableRowComponent from "../Components/TableRow";
import { fetchAssignedStudents } from "../utils/serverHelper";
import EditMarksModal from "../modals/MarksModal";

const ViewComponent = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const assignedStudents = await fetchAssignedStudents();
        setStudents(assignedStudents);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleAssignMarks = (student) => {
    setSelectedStudent(student);
  };

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
                Marks Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-50 divide-y divide-gray-200 w-full ">
            {students.map((student) => (
              <TableRowComponent
                key={student._id}
                student={student}
                buttonA="Delete"
                buttonB="Assign Marks"
                onAssignMarks={handleAssignMarks} // Pass the function to handle Assign Marks button click
              />
            ))}
          </tbody>
        </table>
      </div>
      {selectedStudent && (
        <EditMarksModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)} // Close the modal when needed
        />
      )}
    </div>
  );
};

export default ViewComponent;
