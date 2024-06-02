const express= require('express');
const router= express.Router();
const teacherassignmentController= require('../Controllers/teacher_assignment');

router
     .route('/teacherassignments')
     .get(teacherassignmentController.getAllTeacherAssignments)
     .post(teacherassignmentController.createTeacherAssignment);
router
     .route('/teacherAssignment/:id')
     .get(teacherassignmentController.getTeacherAssignmentById)
     .put(teacherassignmentController.updateTeacherAssignment)
     .delete(teacherassignmentController.deleteTeacherAssignment);  
     
 module.exports= router;    