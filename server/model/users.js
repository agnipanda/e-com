const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type: String},
    email: {type:String,unique:true},
	password: { type: String},
	gender: {type:String},
    date: {type: Date},
    friends: [String],
    requests: [String],
});

var userModel = mongoose.model('user',userSchema);
module.exports = userModel;
