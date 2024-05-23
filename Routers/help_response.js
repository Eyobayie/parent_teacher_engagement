const express = require("express");
const router = express.Router();
const helpResponseController=require('../Controllers/help_response');
router
  .route("/responses")
  .get(helpResponseController.helpResponses)
  .post(helpResponseController.createResponse);
router
  .route("/response/:id")
  .get(helpResponseController.helpresponse)
  .put(helpResponseController.updateHelpResponse)
  .delete(helpResponseController.deleteHelpResponse);
  
module.exports = router;