const express = require('express');
const router= express.Router();
const studentResultController=require('../Controllers/student_result');

router
     .route('/student-results/:studentId')
     .get(studentResultController.getResults)
     .post(studentResultController.createResult);

router
     .route('/student-result/:id')
     .get(studentResultController.getResult)
     .delete(studentResultController.deleteResult)
     .put(studentResultController.updateResult);
     
module.exports = router;