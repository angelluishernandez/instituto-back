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
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [8, "Password must be at least 8 characters long"],
		},
		foto: {
			type: String,
		},
		telefono: {
			type: String,
		},

		tipo: {
			type: String,
			enum: ["alumno", "profesor", "admin"],
			required: true,
		},
	},
	{ timestamps: true }
);

userSchema.pre("save", function (next) {
	const user = this;
	if (user.isModified("password")) {
		bcrypt
			.genSalt(SALT_WORK_FACTOR)
			.then((salt) => {
				return bcrypt.hash(user.password, salt).then((hash) => {
					user.password = hash;
					next();
				});
			})
			.catch((error) => next(error));
	} else {
		next();
	}
});

userSchema.methods.checkPassword = function (password) {
	return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
