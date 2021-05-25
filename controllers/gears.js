const User = require('../models/user');

function index(req, res, next) {    
    User.findById(req.user.id)
        .then(function (user) {
            res.render('gears/index', {
                user, 
                name: req.user.firstName,
                title: "my gear line up"
            })
        })
        .catch(function (err) {
            return next(err)
        });
};

// fix this function so it shows the index of all the gear that's been submitted 

function newGear(req, res) {
    res.render('gears/new', {title: 'Add Gear'}); 
};

function create(req, res) {

    User.findById(req.user.id)
        .then(function (user) {
            console.log(req.body); 
            req.body.forBorrow = !!req.body.forBorrow; 
            console.log('after formatingborrow', req.body)
            return user.save()
        })
        .then(function () {
            res.redirect(`/gears`);
        })
        .catch(function (err) {
            console.log("error:", err);
            res.redirect('/gears'); 
        })
    }; 

    module.exports = {
    index, 
    create, 
    new: newGear, 
 }