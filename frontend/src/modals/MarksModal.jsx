import React, { useState } from "react";
import TextInput from "../Components/TextInput";

const EditMarksModal = ({ student, onClose }) => {
  const [ideationMarks, setIdeationMarks] = useState("");
  const [presentationMarks, setPresentationMarks] = useState("");
  const [vivaMarks, setVivaMarks] = useState("");
  const [executionMarks, setExecutionMarks] = useState("");

  const handleUpdateMarks = () => {
    // Here you can perform the logic to update the marks for the student
    // For simplicity, let's just log the marks for now
    console.log("Ideation Marks:", ideationMarks);
    console.log("Presentation Marks:", presentationMarks);
    console.log("Viva Marks:", vivaMarks);
    console.log("Execution Marks:", executionMarks);

    // After updating marks, you can close the modal
    onClose();
  };

  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Update Marks</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <TextInput
                  label="Ideation"
                  placeholder="Enter marks out of 25"
                  value={ideationMarks}
                  onChange={(e) => setIdeationMarks(e.target.value)}
                />
                <TextInput
                  label="Presentation"
                  placeholder="Enter marks out of 25"
                  value={presentationMarks}
                  onChange={(e) => setPresentationMarks(e.target.value)}
                />
                <TextInput
                  label="Viva"
                  placeholder="Enter marks out of 25"
                  value={vivaMarks}
                  onChange={(e) => setVivaMarks(e.target.value)}
                />
                <TextInput
                  label="Execution"
                  placeholder="Enter marks out of 25"
                  value={executionMarks}
                  onChange={(e) => setExecutionMarks(e.target.value)}
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="bg-blue-700 text-white active:bg-blue-800 hover:bg-blue-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleUpdateMarks}
              >
                Update Marks
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default EditMarksModal;
