const Departments = require("../models/department.model");

module.exports.getDepartments = (req, res, next) => {
	Departments.find()
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => console.log(error));
};

module.exports.addDepartment = (req, res, next) => {
	const department = new Departments({
		head: req.body.head,
		teachers: req.body.teachers,
		areas: req.body.areas,
	});

	department
		.save()
		.then((department) => res.status(200).json(department))
		.catch((error) => console.log(error));
};
