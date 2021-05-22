var express = require('express');
var router = express.Router();

const User = require('../models/user');


// /* GET users listing. */
// router.get('/users/index', function(req, res, next) {
//   User.findbyId(req.user.id)
//   .then(function(user) {
//     res.render('users/index', {user}
//     )})
// }); 


module.exports = router;
