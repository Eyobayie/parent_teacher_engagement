const express = require("express");
const router = express.Router();
const academicYearController=require('../Controllers/academicYear');
const authenticateToken = require("../Auth/authentication_token");
router
  .route("/academicyears")
  .get(academicYearController.academicyears)
  .post(academicYearController.createAcademicYear);
router
  .route("/academicyear/:id")
  .get(academicYearController.getAcademicYear)
  .put(academicYearController.updateAcademicYear)
  .delete(academicYearController.deleteAcademicYear);
  
module.exports = router;