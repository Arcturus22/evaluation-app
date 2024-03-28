import axios from "axios";
import { backendUrl } from "./config";

// Fetch all Students
export const fetchAllStudents = async () => {
  try {
    const response = await axios.get(`${backendUrl}/student/allstudents`);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

// Fetch assigned students
export const fetchAssignedStudents = async () => {
  try {
    const response = await axios.get(`${backendUrl}/student/allstudents`);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

