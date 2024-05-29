const express = require("express");
const router = express.Router();
const semisterController=require('../Controllers/semister');
router
  .route("/semisters")
  .get(semisterController.semisters)
  .post(semisterController.createSemister);
router
  .route("/semister/:id")
  .get(semisterController.getSemisterById)
  .put(semisterController.updateSemister)
  .delete(semisterController.deleteSemister);
router
  .route('/academicyearsemisters/:academicYearId')
  .get(semisterController.getSemistersByAcademicYearId)
router
  .route('/academicyear/:academicYearId/semister/:id')
  .get(semisterController.semisterByAcademicYearAndSemisterId);
module.exports = router;