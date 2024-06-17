const express = require("express");
const router = express.Router();
const teacherController=require('../Controllers/teacher');
const { route } = require("./student");
router
  .route("/teachers")
  .get(teacherController.teachers)
  .post(teacherController.createTeacher);
router
  .route("/teacher/:id")
  .get(teacherController.getTeacherDetails)
  .put(teacherController.updateTeacher)
  .delete(teacherController.deleteTeacher);
router
  .route("/teachercount")
  .get(teacherController.countTeachers);  

module.exports = router;