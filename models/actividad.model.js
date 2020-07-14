const mongoose = require("mongoose");

const actividadSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	descripcion: {
		type: String,
	},
	fecha: {
		type: Date,
		required: true,
	},
	texto: String,
	fotos: [String],
});

const Actividad = mongoose.model("Actividades", actividadSchema);

module.exports = Actividad;
