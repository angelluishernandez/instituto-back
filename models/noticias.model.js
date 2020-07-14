const mongoose = require("mongoose");

const noticiaSchema = new mongoose.Schema(
	{
		titulo: {
			type: String,
			required: true,
		},
		descripcion: {
			type: String,
			required: true,
		},
		fotos: {
			type: String,
		},
		texto: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Noticia = mongoose.model("Noticia", noticiaSchema);

module.exports = Noticia;
