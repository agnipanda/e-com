var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
var userModel = require('../model/users');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.post('/register', function(req,res){
    user = req.body;
    var usermodel = new userModel({
        name: user.name,
        email: user.email,
        password: user.password,
        gender: user.gender,
        date: user.date
    });
    usermodel.save(function(err,doc){
        if(err) res.send("User with given email already exists.");
        else{
            res.send("User registration successful.");
        }
    })
})


module.exports = router;
