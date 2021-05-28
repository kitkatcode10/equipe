const User = require('../models/user');

function index(req, res, next) {     
    User.findById(req.user.id)
        .then(function (user) {
        console.log(user.gear)
        return user.gear 
        })
    .then(function (gears) {
        res.render('gears/index', {
            gears, 
            name: req.user.firstName,
            title: "my gear line up"
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
            console.log(req.body); 
            req.body.forBorrow = !!req.body.forBorrow; 
            console.log('after formattingborrow', req.body)
            user.gear.push(req.body);
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

function deleteGear(req, res) {
    User.findById(req.user.id)
        .then(function (user) {
        console.log(req.body);
        user.gear.id(req.params.id).remove(); 
        return user.save()
    })
        .then(function () {
        res.redirect(`/gears`);
    })
        .catch(function (err) {
        console.log("error", err);
        res.redirect('/gears');
    })
}

function show(req, res) {
    User.findById(req.user.id)
        .then(function (user) {
        return user.gear.id(req.params.id)
        })
        .then(function (gear) {
            res.render('gears/show', {title: 'Gear Details', gear});
        })
        .catch(function (err) {
            res.redirect('/gears')
        })
};

function edit(req, res) {
    User.findById(req.user.id)
    .then(function (user) {
    console.log('is this working')
    return user.gear.id(req.params.id)
    })
    .then (function (gear) {
    res.render('gears/:id/edit', {gear}); 
    })
    .catch(function (err) {
        res.redirect('/gears')
    })
}; 




//     User.findById(req.params.id, function(err, user) {
//         if(!gear.user.equals(req.user._id)) return res.redirect('/gears');
//         rers.render('gears/edit', {gear});
//     });
// }


    //     User.findByIdAndUpdate({'gears._id':req.params.id, updateData, {new: true}})
//     .then(function (gear) {
//         return user.save()
//     })
//     .then(function (gear) {
//         console.log("updated the gear")
//         res.render(`/gears/${req.params.id}`)
//     })
//     .catch(function (err) {
//         res.redirect('/gears')
//     })
// }; 

module.exports = {
    index, 
    create, 
    new: newGear, 
    delete: deleteGear,
    show, 
    edit
 }