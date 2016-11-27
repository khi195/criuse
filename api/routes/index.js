var express = require('express');
var router = express.Router();


var ctrlCruises = require('../controllers/cruises.controller.js')


router
  .route('/cruises')
  .get( ctrlCruises.cruises);

router
  .route('/cruises/:destination')
  .get( ctrlCruises.cruisesDestination);

router
  .route('/angular')
  .get( ctrlCruises.angular);

module.exports = router;