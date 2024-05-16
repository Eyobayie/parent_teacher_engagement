const express = require("express");
const router = express.Router();
const announcementController=require('../Controllers/announcement');
router
  .route("/announcements")
  .get(announcementController.announcements)
  .post(announcementController.createAnnouncement);
router
  .route("/announcement/:id")
  .get(announcementController.getAnnouncement)
  .put(announcementController.updateAnnouncement)
  .delete(announcementController.deleteAnnouncement);
  
module.exports = router;