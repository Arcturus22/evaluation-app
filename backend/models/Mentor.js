const mongoose = require("mongoose");

//SCHEMA
const mentorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
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
  assignedStudents: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Student",
      required: false,
    },
  ],
});

const mentorModel = mongoose.model("Mentor", mentorSchema);
module.exports = mentorModel;
