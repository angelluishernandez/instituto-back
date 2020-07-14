const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema(
	{
		nombre: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			trim: true,
			lowercase: true,
			match: [EMAIL_PATTERN, "Email is required"],
			unique: true,
		},
		departamento: {
			type: String,
		},
		foto: {
			type: String,
		},
		telefono: {
			type: String,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{ timestamps: true }
);

userSchema.methods.checkPassword = function (password) {
	return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
