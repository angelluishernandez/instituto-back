const mongoose = require("mongoose");

const cursosSchema = new mongoose.Schema({
	disciplina: {
		type: String,
		required: true,
	},
	nombre: {
		type: String,
		required: true,
	},
	materias: {
		type: Array,
		nombre: {
			type: String,
			required: true,
		},
		horas: {
			type: Number,
			required: true,
		},
	},
	optativas: {
		type: Array,
		nombre: {
			type: String,
			required: true,
		},
		horas: {
			type: Number,
			required: true,
		},
	},
	refuerzos: {
		type: Array,
		nombre: {
			type: String,
		},
		horas: {
			type: Number,
		},
	},
});

const Curso = mongoose.model("Cursos", cursosSchema);

module.exports = Curso;
