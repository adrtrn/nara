var express = require('express');
var router = express.Router();

var ctrlReports = require('../controllers/reports'); 

/* REPORT pages */ 
router.get('/', ctrlReports.homelist); 
router.get('/reports', ctrlReports.new); 
router.get('/reports/search', ctrlReports.search); 

module.exports = router; 
