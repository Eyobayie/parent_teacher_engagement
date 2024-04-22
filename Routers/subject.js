const express = require("express");
const router = express.Router();
const subjectController=require('../Controllers/subject');
router
  .route("/subjects")
  .get(subjectController.subjects)
  .post(subjectController.createSubject);
router
  .route("/subject/:id")
  .get(subjectController.getSubject)
  .put(subjectController.updateSubject)
  .delete(subjectController.deleteSubject);
  
module.exports = router;