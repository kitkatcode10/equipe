var express = require('express');
var router = express.Router();
const maintenancesCtrl = require('../controllers/maintenances');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

router.get('/gears/:id/maintenances/new', isLoggedIn, maintenancesCtrl.new); 
router.post('/gears/:id/maintenances', isLoggedIn, maintenancesCtrl.create);


module.exports = router;
