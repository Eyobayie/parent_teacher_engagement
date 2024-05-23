const express = require("express");
const router = express.Router();
const helpController=require('../Controllers/help');
router
  .route("/helps")
  .get(helpController.helps)
  .post(helpController.createHelp);
router
  .route("/help/:id")
  .get(helpController.help)
  .put(helpController.updateHelp)
  .delete(helpController.deleteHelp);
router
  .route('/helpWithResponse/:parentId')
  .get(helpController.helpsWithResponsesByParentId);
  
module.exports = router;