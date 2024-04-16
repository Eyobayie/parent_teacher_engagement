const express = require("express");
const router = express.Router();
const gradelevelController=require('../Controllers/gradelevel');
router
  .route("/gradelevels")
  .get(gradelevelController.gradelevels)
  .post(gradelevelController.createGradelevel);
router
  .route("/gradelevel/:id")
  .get(gradelevelController.getGradelevel)
  .put(gradelevelController.updateGradelevel)
  .delete(gradelevelController.deleteGradelevel);
module.exports = router;