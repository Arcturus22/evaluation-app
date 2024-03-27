const express = require("express");
const router = express.Router();
const Mentor = require("../models/Mentor");
const Student = require("../models/Student");

// Get all the students
router.get("/allstudents", async (req, res) => {
  try {
    const allStudents = await Student.find();

    if (!allStudents) {
      res.status(400).json({ error: "No student found" });
    }
    res.status(200).json(allStudents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Mentor adding a student
router.post("/:mentorId/students/add", async (req, res) => {
  try {
    const mentorId = req.params.mentorId;
    const { studentId } = req.body;

    const mentor = await Mentor.findOne({ _id: mentorId });
    if (!mentor) {
      return res.status(400).json({ error: "Mentor not found" });
    }

    if (mentor.assignedStudents.length === 4) {
      return res
        .status(400)
        .json({ error: "Mentor already has maximum students assigned!" });
    }

    const student = await Student.findOne({ _id: studentId });
    if (!student) {
      return res.status(400).json({ error: "Student not found" });
    }

    if (student.assignedMentor && !student.assignedMentor.equals(mentorId)) {
      return res
        .status(400)
        .json({ error: "This student is already assigned to another mentor" });
    }

    mentor.assignedStudents.push(studentId);
    await mentor.save();
    student.assignedMentor = mentorId;
    await student.save();

    return res
      .status(200)
      .json({ message: "Student added successfully", student });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Mentor removing a student
router.post("/:mentorId/students/remove", async (req, res) => {
  try {
    const mentorId = req.params.mentorId;
    const { studentId } = req.body;

    const mentor = await Mentor.findOne({ _id: mentorId });
    if (!mentor) {
      return res.status(400).json({ error: "Mentor not found" });
    }

    const student = await Student.findOne({ _id: studentId });
    if (!student) {
      return res.status(400).json({ error: "Student not found" });
    }

    if (student.assignedMentor && !student.assignedMentor.equals(mentorId)) {
      return res
        .status(400)
        .json({ error: "This student is not assigned to this mentor" });
    }

    // Removing studentId from mentor.assignedStudents
    const index = mentor.assignedStudents.findIndex((id) =>
      id.equals(studentId)
    );
    mentor.assignedStudents.splice(index, 1);

    await mentor.save();

    student.assignedMentor = null;
    await student.save();

    return res
      .status(200)
      .json({ message: "Student removed successfully", student });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Mentor editing a student
router.post("/:mentorId/students/edit", async (req, res) => {
  try {
    const mentorId = req.params.mentorId;
    const { existingStudentId, newStudentId } = req.body;

    const mentor = await Mentor.findOne({ _id: mentorId });
    if (!mentor) {
      return res.status(400).json({ error: "Mentor not found" });
    }

    if (mentor.assignedStudents.length === 4) {
      return res
        .status(400)
        .json({ error: "Mentor already has maximum students assigned!" });
    }

    const existingStudent = await Student.findOne({ _id: existingStudentId });
    if (!existingStudent) {
      return res.status(400).json({ error: "Student not found" });
    }

    if (
      existingStudent.assignedMentor &&
      !existingStudent.assignedMentor.equals(mentorId)
    ) {
      return res
        .status(400)
        .json({ error: "This student is not assigned to this mentor" });
    }

    const newStudent = await Student.findOne({ _id: newStudentId });
    if (!newStudent) {
      return res.status(400).json({ error: "New Student not found" });
    }

    if (
      newStudent.assignedMentor &&
      !newStudent.assignedMentor.equals(mentorId)
    ) {
      return res
        .status(400)
        .json({ error: "This student is already assigned to another mentor" });
    }

    mentor.assignedStudents = mentor.assignedStudents.map((id) =>
      id.equals(existingStudentId) ? newStudentId : id
    );
    await mentor.save();

    existingStudent.assignedMentor = null;
    await existingStudent.save();
    newStudent.assignedMentor = mentorId;
    await newStudent.save();

    return res.status(200).json({
      message: "Student replaced successfully",
      newStudent,
      existingStudent,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
