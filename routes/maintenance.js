const express = require('express');

const router = express.Router();
const maintenanceCtrl = require('../controllers/maintenances');

router.get('/maintenances/new', isLoggedIn, maintenanceCtrl.new);
// router.post('/maintenances', isLoggedIn, maintenanceCtrl.create);
// router.get('/maintenances', isLoggedIn, maintenanceCtrl.index);

module.exports = router; 
