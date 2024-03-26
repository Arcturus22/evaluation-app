const mongoose = require("mongoose");

//SCHEMA
const marksSchema = new mongoose.Schema({
  assignedByMentor: {
    type: mongoose.Types.ObjectId,
    ref: "Mentor",
  },
  assignedToStudent: {
    type: mongoose.Types.ObjectId,
    ref: "Student",
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  totalMarks: {
    type: Number,
    min: 0,
    default: 0,
    max: 100,
  },
  criteria: [
    {
      name: {
        type: String,
        enum: ["ideation", "viva", "execution"],
        required: true,
      },
      marks: {
        type: Number,
        min: 0,
        max: 10,
      },
    },
  ],
});

//Calculating the totalMarks before savingg
marksSchema.pre("save", function (next) {
  let totalMarks = 0;
  for (const criterion of this.criteria) {
    totalMarks += criterion.marks;
  }
  this.totalMarks = totalMarks;
  next();
});

const marksModel = mongoose.model("Marks", marksSchema);
module.exports = marksModel;
