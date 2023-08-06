const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: { 
		type: String, 
		required: true 
	},
	age: {
		type: Number, 
		required: true 
	},
	gender: {
		type: String,
		require: true
	},
	email: {
		type: String, 
		required: true, 
		unique: true 
	},
	password: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date, 
		default: new Date().toISOString().split('T')[0] 
	},
});
const User = mongoose.model('User', userSchema);

module.exports = User