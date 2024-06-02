const express= require('express')
const router= express.Router();
const assignmentController= require('../Routers/teacher_assignment');

router
    .route('/assignmets')
    .get(assignmentController.assignments)
    .post(assignmentController.createAssignment);
router
    .route('/assignment/:id')
    .get(assignmentController.getAssignment)
    .put(assignmentController.updateAssignment)
    .delete(assignmentController.deleteAssignment);

module.exports= router;