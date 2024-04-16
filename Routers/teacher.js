const express = require("express");
const router = express.Router();
const teacherController=require('../Controllers/teacher');
router
  .route("/teachers")
  .get(teacherController.teachers)
  .post(teacherController.createTeacher);
router
  .route("/teacher/:id")
  .get(teacherController.getTeacher)
  .put(teacherController.updateTeacher)
  .delete(teacherController.deleteTeacher);
module.exports = router;