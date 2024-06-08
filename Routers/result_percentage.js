const express = require('express');
const router= express.Router();

const resultPercentageController= require('../Controllers/result_percentage');

router
     .route('/result-percentages')
     .get(resultPercentageController.resultPercentages)
     .post(resultPercentageController.createResultPercentage);
router
     .route('/result-percentage/:id')
     .get(resultPercentageController.getResultPercentage)
     .delete(resultPercentageController.deleteResultPercentage)
     .put(resultPercentageController.updateResultPercentage);
   
module.exports= router;