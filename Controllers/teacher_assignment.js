const TeacherAssignment = require('../models/teacher_assign');

// Get all assignments
exports.getAllTeacherAssignments = async (req, res) => {
  try {
    const assignments = await TeacherAssignment.findAll();
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get assignment by ID
exports.getTeacherAssignmentById = async (req, res) => {
  try {
    const assignment = await TeacherAssignment.findByPk(req.params.id);
    if (assignment) {
      res.json(assignment);
    } else {
      res.status(404).json({ error: 'Assignment not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new assignment
exports.createTeacherAssignment = async (req, res) => {
  try {
    const newAssignment = await TeacherAssignment.create(req.body);
    res.status(201).json(newAssignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update assignment
exports.updateTeacherAssignment = async (req, res) => {
  try {
    const assignment = await TeacherAssignment.findByPk(req.params.id);
    if (assignment) {
      await assignment.update(req.body);
      res.json(assignment);
    } else {
      res.status(404).json({ error: 'Teacher Assignment not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete teacher assignment
exports.deleteTeacherAssignment = async (req, res) => {
  try {
    const assignment = await TeacherAssignment.findByPk(req.params.id);
    if (assignment) {
      await assignment.destroy();
      res.json({ message: 'Assignment deleted' });
    } else {
      res.status(404).json({ error: 'Assignment not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


