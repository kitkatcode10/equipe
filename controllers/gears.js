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

function editGear(req, res) {
        User.findById(req.user.id)
        .then(function (user) {
        return user.gear.id(req.params.id) 
        })
        .then(function (gear) {
            res.render('gears/edit', { title: 'Update Gear', gear }); 
        })
        .catch(function (err) {
            res.redirect('/gears')
        })
};


function updateGear(req, res) {
    User.findById(req.user.id)
    .then(function (user) {
    
    return user.gear.id(req.params.id)
    const updateData = req.body; 
    User.findByIdAndUpdate(gearId, updateData)
    return user.save
})


    .then(function (gear) {
        res.render('gears/show');
    })
    .catch(function (err) {
        res.redirect('/gears')
    })
};

then(function (user) {
    console.log(req.body); 
    req.body.forBorrow = !!req.body.forBorrow; 
    console.log('after formattingborrow', req.body)
    user.gear.push(req.body);
    return user.save()
// find the users gear to update
// capture the new data coming in
// modify and save at the same time 
// handle the edit gear form ^ update the database and rediret to the showview 

    module.exports = {
    index, 
    create, 
    new: newGear, 
    delete: deleteGear,
    show, 
    update: updateGear, 
    edit: editGear 
 }