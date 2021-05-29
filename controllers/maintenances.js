const { SchemaType } = require('mongoose');
const Maintenance = require('../models/maintenance');
const User = require('../models/user'); 


function newJob(req, res) {
    User.findById(req.params.id, function (err, user) {
        res.render('maintenances/new', { gear });
    });
}



function create(req, res) {
    User.findById(req.params.id, function (err, user) {
        req.body.gear = gear._id;
        Maintenance.create(req.body, function (err, maintenance) {
            Maintenance.find({ gear: gear._id }, function (err, maintenance) {
                gear.save(function (err) {
                    res.redirect(`/gears/${gear._id}`)
                });
            });
        })
    });
}


module.exports = {
    create, 
    new : newJob 
 }