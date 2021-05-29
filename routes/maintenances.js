var express = require('express');
var router = express.Router();
const maintenancesCtrl = require('../controllers/maintenances');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

router.post('/gears/:id/maintenances', isLoggedIn, maintenancesCtrl.create);
router.get('/gears/:id/maintenances', isLoggedIn, maintenancesCtrl.new); 
module.exports = router;
