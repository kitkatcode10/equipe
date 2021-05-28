const Maintenance = require('../models/maintenance');
const User = require('../models/user'); 


// function create(res, req) {
//     Maintenance.create(req.body, function (err, performer) {
//         res.redirect('/gears/show');
//     });
// }


function newJob(req, res) {
    User.find({}, function (err, maintenances) {
        res.render('maintenances/new', { title: 'New Maintenance'
        });
    });
}


module.exports = {
//  index, 
//  create, 
 new: newJob, 

 }