import React, { useState } from "react";
import TextInput from "../Components/TextInput";
import { assignMarks, updateMarks } from "../utils/serverHelper";

const EditMarksModal = ({ student, onClose }) => {
  const [ideationMarks, setIdeationMarks] = useState("");
  const [presentationMarks, setPresentationMarks] = useState("");
  const [viva_pitchMarks, setViva_PitchMarks] = useState("");
  const [executionMarks, setExecutionMarks] = useState("");

  const handleSaveMarks = () => {
    const save = async () => {
      const assignedMarks = [
        {
          parameter: "ideation",
          marksVal: ideationMarks
        }, {
          parameter: "execution",
          marksVal: executionMarks
        }, {
          parameter: "viva-pitch",
          marksVal: viva_pitchMarks
        }, {
          parameter: "presentation",
          marksVal: presentationMarks
        }
      ];

      await assignMarks(assignedMarks, student._id);
      await updateMarks(assignedMarks, student._id);
    };

    onClose();
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Marks</h3>
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
                  placeholder=""
                  value={ideationMarks}
                  setValue={(e) => setIdeationMarks(e.target.value)}
                />
                <TextInput
                  label="Execution"
                  placeholder=""
                  value={executionMarks}
                  setValue={(e) => setExecutionMarks(e.target.value)}
                />
                <TextInput
                  label="Viva/Pitch"
                  placeholder=""
                  value={viva_pitchMarks}
                  setValue={(e) => setViva_PitchMarks(e.target.value)}
                />
                <TextInput
                  label="Presentation"
                  placeholder=""
                  value={presentationMarks}
                  setValue={(e) => setPresentationMarks(e.target.value)}
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-red-700 text-white active:bg-red-800 hover:bg-red-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="bg-blue-700 text-white active:bg-blue-800 hover:bg-blue-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSaveMarks}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default EditMarksModal;
