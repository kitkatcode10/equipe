const User = require('../models/user');

function index(req, res, next) {
       // let modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};
    // let sortKey = req.query.sort || 'name';
    User.findById(req.user.id)
        // .sort(sortKey).exec
        .then(function (user) {
            res.render('gears/index', {
                user,
                // name: req.query.name,
                // sortKey,
                title: "my gear lineup"
            })
        })
        .catch(function (err) {
            return next(err)
        });
};

function newGear(req, res) {
    res.render('gears/new', {title: 'Add Gear'}); 
};

function create(req, res) {

    User.findById(req.user.id)
        .then(function (user) {
            console.log(user.gears); 
            req.body.forBorrow = !!req.body.forBorrow; 
            user.gears.push(req.body); 
            console.log(user.gears)
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