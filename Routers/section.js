const express = require("express");
const router = express.Router();
const sectionController=require('../Controllers/section');
router
  .route("/sections")
  .get(sectionController.sections)
  .post(sectionController.createSection);
router
  .route("/section/:id")
  .get(sectionController.getSection)
  .put(sectionController.updateSection)
  .delete(sectionController.deleteSection);
module.exports = router;