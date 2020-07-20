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
		imgUrl: {
			type: String,
		},
		pieDeFoto: String,
		texto: {
			type: String,
			required: true,
		},
		etiquetas: {
			type: Array,
		},
	},
	{ timestamps: true }
);

const Noticia = mongoose.model("Noticia", noticiaSchema);

module.exports = Noticia;
