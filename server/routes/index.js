var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
var userModel = require('../model/users');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.post('/register', function(req,res){
    userModel.find({'email':user.email},function(err,data){
        if(data){
            res.send("User already exists.Try loging in...");
        }
        else if(err){
            res.send(err)
        }
        else{
            var usermodel = new userModel({
                name: user.name,
                email: user.email,
                password: user.password,
                gender: user.gender,
                date: user.date
            });
            usermodel.save(function(err,doc){
                if(err) res.send(err);
                else{
                    res.send("User registration successful.");
                }
            })
        }
    })
})


module.exports = router;
