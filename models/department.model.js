const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
	head: {
		type: String,
		required: true,
		unique: true,
	},
	teachers: {
		type: Array,
		required: true,
	},
	areas: {
		type: Array,
	},
});

const Departments = mongoose.model("Departments", departmentSchema);

module.exports = Departments;
