var express = require('express');
var router = express.Router();

// assign the cruise controller
var ctrlCruises = require('../controllers/cruises.controller.js')

// list all the cruises
router
  .route('/cruises')
  .get( ctrlCruises.cruises);
// list cruise by destination
router
  .route('/cruises/:destination')
  .get( ctrlCruises.cruisesDestination);

module.exports = router;