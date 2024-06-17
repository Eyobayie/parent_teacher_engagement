const express= require('express');
const router= express.Router();
const studnetController= require('../Controllers/student');

router
    .route('/students')
    .get(studnetController.students)
    .post(studnetController.createsStudent);
router
    .route('/students/:parentId/section/:sectionId')
    .get(studnetController.getStudentsByParentId);    
router
    .route('/student/:id')
    .get(studnetController.getStudent)
    .put(studnetController.updateStudent)
    .delete(studnetController.deleteStudent);
router
    .route('/gradelevel/:gradeLevelId/section/:sectionId')
    .get(studnetController.getStudentPerSection);
   
router
    .route('/studentscount')
    .get(studnetController.countStudents);
    
module.exports =router;