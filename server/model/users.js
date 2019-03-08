const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type: String, required: false },
    email: {type:String, required:false},
	password: { type: String, required: false },
	gender: {type:String, required:false},
    date: {type: Date},
    friends: [String],
    requests: [String],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
