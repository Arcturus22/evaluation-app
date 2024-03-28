const express = require("express");
const router = express.Router();

const { body, validationResult } = require("express-validator");

const Mentor = require("../models/Mentor");

// create a new mentor in DB
router.post("/createMentor", [
    body("name", "Invalid name").exists(),
    body("email", "Invalid email").isEmail(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    
        const { name, email } = req.body;
    
        const mentor = await Mentor.findOne({ email: email });
        if (mentor) return res.status(200).json({ error: "A mentor with same email already exists" });
    
        const newMentorData = { name, email };
        const newMentor = await Mentor.create(newMentorData);
        return res.status(200).json(newMentor.toJSON());
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// get all students assigned to this mentor
router.get("/:mentorId/myStudents", async (req, res) => {
    try {
        const { mentorId } = req.params;

        const mentor = await Mentor.findById(mentorId).populate('assignedStudents');
        if (!mentor) return res.status(404).json({ message: "Mentor not found" });
    
        const assignedStudents = mentor.assignedStudents;
        res.json({ assignedStudents });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

const Student = require("../models/Student");

// add/assign a new student to this mentor
router.post("/:mentorId/addStudent", async (req, res) => {
    try {
        const { mentorId } = req.params;
        const { studentId } = req.body;
        
        const mentor = await Mentor.findById(mentorId);
        const student = await Student.findById(studentId);

        if (!mentor) return res.status(400).json({ message: "Mentor not found" });
        if (!student) return res.status(400).json({ message: "Student not found" });
        if (student.assignedMentor) {
            if (student.assignedMentor.toString() === mentorId.toString()) return res.status(400).json({ message: "Student is already assigned to this mentor" });
            return res.status(400).json({ message: "Student is already assigned to another mentor" });
        }

        mentor.assignedStudents.push(studentId);
        student.assignedMentor = mentorId;

        await mentor.save();
        await student.save();

        return res.status(200).json({ mentor, student });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// edit/replace a student assigned to this mentor
router.post("/:mentorId/editStudent", async (req, res) => {
    try {
        const { mentorId } = req.params;
        const { oldStudentId, newStudentId } = req.body;

        const mentor = await Mentor.findById(mentorId);
        const oldStudent = await Student.findById(oldStudentId);
        const newStudent = await Student.findById(newStudentId);
        if (!mentor) return res.status(400).json({ error: "Mentor not found" });
        if (!oldStudent) return res.status(400).json({ error: "Old student not found" });
        if (!newStudent) return res.status(400).json({ error: "New student not found" });
        if(!oldStudent.assignedMentor.equals(mentorId)) return res.status(400).json({ error: "Old student is not assigned to this mentor" });
        if(newStudent.assignedMentor) return res.status(400).json({ error: "New student is already assigned to another mentor" });

        mentor.assignedStudents = mentor.assignedStudents.map((id) =>
            id.equals(existingStudentId) ? newStudentId : id
        );
        await mentor.save();

        oldStudent.assignedMentor = null;
        await oldStudent.save();
        newStudent.assignedMentor = mentorId;
        await newStudent.save();

        return res.status(200).json({ mentor, oldStudent, newStudent });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// remove a student assigned to this mentor
router.post("/:mentorId/removeStudent", async (req, res) => {
    try {
        const { mentorId } = req.params;
        const { studentId } = req.body;

        const mentor = await Mentor.findById(mentorId);
        const student = await Student.findById(studentId);
        if (!mentor) return res.status(400).json({ error: "Mentor not found" });
        if (!student) return res.status(400).json({ error: "Student not found" });
        if (student.assignedMentor && !student.assignedMentor.equals(mentorId)) return res.status(400).json({ error: "This student is not assigned to this mentor" });

        mentor.assignedStudents = mentor.assignedStudents.filter((student) => student._id.toString() !== studentId.toString());
        mentor.save();

        student.assignedMentor = null;
        await student.save();

        return res.status(200).json({ mentor, student });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
