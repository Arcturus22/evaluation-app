const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const Marks = require("../models/Marks");

// Marks updation
router.post("/:studentId/marks/update", async (req, res) => {
  try {
    const { studentId } = req.params.studentId;
    const { criteria } = req.body;

    const student = await Student.findOne({ _id: studentId });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    const mentorId = student.assignedMentor;

    const newMarks = new Marks({
      assignedByMentor: mentorId,
      assignedToStudent: studentId,
      criteria,
    });

    await newMarks.save();

    student.assignedMarks = newMarks._id;
    await student.save();

    return res
      .status(200)
      .json({ message: "Marks updated successfully", newMarks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Editing Marks
router.post("/:studentId/marks/edit", async (req, res) => {
  try {
    const { studentId } = req.params.studentId;
    const { criteria } = req.body;

    const student = await Student.findOne({ _id: studentId }).populate(
      "assignedMarks"
    );

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const marks = student.assignedMarks;
    marks.criteria = criteria;

    await marks.save();

    return res
      .status(200)
      .json({ message: "Marks updated successfully", marks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Filter for Students with unassigned Marks
router.get("/:mentorId/students", async (req, res) => {
  try {
    const mentorId = req.params.mentorId;

    const mentor = await Mentor.findOne({ _id: mentorId }).populate(
      "assignedStudents"
    );

    if (!mentor) {
      return res.status(404).json({ error: "Mentor not found" });
    }

    const assignedStudents = mentor.assignedStudents;
    const studentsWithoutMarks = [];
    for (const student of assignedStudents) {
      const marks = await Marks.findOne({
        assignedToStudent: student._id,
      }).catch((error) => {
        console.error("Error retrieving marks:", error);
        return null;
      });

      if (!marks) {
        studentsWithoutMarks.push(student);
      }
    }

    return res
      .status(200)
      .json({ students: studentsWithoutMarks.filter(Boolean) });
      
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Filter for Students with assigned Marks
router.get("/:mentorId/students", async (req, res) => {
  try {
    const mentorId = req.params.mentorId;

    const mentor = await Mentor.findOne({ _id: mentorId }).populate(
      "assignedStudents"
    );

    if (!mentor) {
      return res.status(404).json({ error: "Mentor not found" });
    }

    const assignedStudents = mentor.assignedStudents;
    const studentsWithMarks = [];
    for (const student of assignedStudents) {
      const marks = await Marks.findOne({
        assignedToStudent: student._id,
      }).catch((error) => {
        console.error("Error retrieving marks:", error);
        return null;
      });

      if (marks) {
        studentsWithMarks.push(student);
      }
    }

    return res
      .status(200)
      .json({ students: studentsWithMarks });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
