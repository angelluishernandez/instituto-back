const Noticia = require("../models/noticias.model");

module.exports.listNoticias = (req, res, next) => {
	Noticia.find()
		.then((noticias) => res.status(200).json(noticias))
		.catch((error) => console.log(error));
};

module.exports.createNoticias = (req, res, next) => {
	console.log(req.body);

	const noticia = new Noticia({
		titulo: req.body.titulo,
		descripcion: req.body.descripcion,
		imgUrl: req.body.imgUrl,
		texto: req.body.texto,
		etiquetas: req.body.etiquetas,
	});

	noticia
		.save()
		.then((noticia) => res.status(202).json(noticia))
		.catch((error) => console.log(error));
};
