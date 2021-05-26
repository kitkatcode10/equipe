var express = require('express');
var router = express.Router();
const gearsCtrl = require('../controllers/gears');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

router.get('/gears', isLoggedIn, gearsCtrl.index);
router.post('/gears', isLoggedIn, gearsCtrl.create); 
router.get('/gears/new', isLoggedIn, gearsCtrl.new);
router.delete('/gears/:id', isLoggedIn, gearsCtrl.delete); 
router.get('/gears/:id', isLoggedIn, gearsCtrl.show); 
 
module.exports = router;
