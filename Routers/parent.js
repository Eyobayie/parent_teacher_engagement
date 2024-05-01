const express = require("express");
const router = express.Router();
const parentController=require('../Controllers/parent');
router
  .route("/parents")
  .get(parentController.parents)
  .post(parentController.createParent);
router
  .route("/parent/:id")
  .get(parentController.getParent)
  .put(parentController.updateParent)
  .delete(parentController.deleteParent);
module.exports = router;