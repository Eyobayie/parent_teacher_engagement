const express= require('express')
const assignmentController= require('../Controllers/assignment');

const router= express.Router();

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