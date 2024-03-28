import axios from "axios";
import { SERVER_URL, CURRENT_MENTOR_ID } from "./config";

// fetch unassigned students
export const fetchUnasignedStudents = async () => {
  try {
    const res = await axios.get(`${SERVER_URL}/student/unassignedStudents`);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

// fetch assigned students
export const fetchAssignedStudents = async () => {
  try {
    const res = await axios.get(`${SERVER_URL}/student/${CURRENT_MENTOR_ID}/assignedStudents`);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

// assign marks
export const assignMarks = async (assignedMarks, assignedToStudent) => {
  try {
    const res = await axios.get(`${SERVER_URL}/marks/${CURRENT_MENTOR_ID}/assignMarks`, { assignedMarks, assignedToStudent });
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

// update marks
export const updateMarks = async (assignedMarks, assignedToStudent) => {
  try {
    const res = await axios.get(`${SERVER_URL}/marks/${CURRENT_MENTOR_ID}/updateMarks`, { assignedMarks, assignedToStudent });
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
