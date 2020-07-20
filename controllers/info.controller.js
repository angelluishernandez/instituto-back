const fs = require("fs");
const createError = require("http-errors");

module.exports.getInfoUrls = (req, res, next) => {
	const urlsFile = fs.readFile(
		"public/infoUrls.json",
		"utf8",
		(error, data) => {
			if (error) {
				createError(error);
			}

			console.log(data);
			res.status(200).json(JSON.parse(data));
		}
	);
};
