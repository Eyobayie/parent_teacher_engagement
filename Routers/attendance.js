const express = require("express");
const router = express.Router();
const attendanceController=require('../Controllers/attendance');
router
  .route("/attendances/:studentId")
  .get(attendanceController.attendances)
  .post(attendanceController.createAttendance);
router
  .route("/attendances/:studentId/:id")
  .get(attendanceController.getAttendance)
  .put(attendanceController.updateAttendance)
  .delete(attendanceController.deleteAttendance);
  
module.exports = router;