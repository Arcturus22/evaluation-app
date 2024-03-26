const mongoose = require("mongoose");

//SCHEMA
const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true,
  },
  assignedMentor: {
    type: mongoose.Types.ObjectId,
    ref: "Mentor",
  },
  assignedMarks: {
    type: mongoose.Types.ObjectId,
    ref: "Marks",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
  },
});

const studentModel = mongoose.model("Student", studentSchema);
module.exports = studentModel;
