const User = require("../models/user.model");

//LIST USUARIOS

module.exports.allUsers = (req, res, next) => {
	User.find()
		.then((res) => res.json())
		.catch((error) => console.log(error));
};

// FIND ONE USER

module.exports.findUserById = (req, res, next) => {
	const userId = req.body.userId;

	User.findById(userId)
		.then((user) => res.json(user))
		.catch((error) => console.log(error));
};

// USER LOGIN

module.exports.doLogin = (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		res.json("El usuario o el password son incorrectos");

		throw createError(400, "Faltan credenciales");
	}

	User.findOne({ email: email })
		.then((user) => {
			if (!user) {
				res.json("No existe este usuario");

				throw createError(404, "No existe este usuario");
			} else {
				return user.checkPassword(password).then((match) => {
					if (!match) {
						throw createError(400, "invalid password");
					} else {
						req.session.user = user;
						res.json(user);
					}
				});
			}
		})
		.catch(next);
};

// USER LOGOUT

module.exports.logout = (req, res, next) => {
	req.session.destroy();
	res.status(204).json();
};
