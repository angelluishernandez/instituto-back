const fs = require("fs");
const createError = require("http-errors");

module.exports.getHorarios = (req, res, next) => {
	fs.readFile("public/horarios.json", "utf8", (error, data) => {
		if (error) {
			createError(error);
		}
		res.status(200).json(JSON.parse(data));
	});
};
