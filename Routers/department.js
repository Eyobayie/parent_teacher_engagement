const express = require("express");
const router = express.Router();
const departmentController=require('../Controllers/department');
router
  .route("/departments")
  .get(departmentController.departments)
  .post(departmentController.createDepartment);
router
  .route("/department/:id")
  .get(departmentController.getDepartment)
  .put(departmentController.updateDepartment)
  .delete(departmentController.deleteDepartment);
  
module.exports = router;