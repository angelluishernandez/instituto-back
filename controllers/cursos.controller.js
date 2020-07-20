const Curso = require("../models/curso.model");

module.exports.createCourse = (req, res, next) => {
	const optativas = req.body.optativas;
	const materias = req.body.materias;
	const refuerzos = req.body.refuerzos;

	const course = new Curso({
		disciplina: req.body.disciplina,
		nombre: req.body.nombre,
		materias,
		optativas,
		refuerzos,
	});

	course
		.save()
		.then((course) => {
			res.status(200).json(course);
		})
		.catch((error) => console.log(error));
};

module.exports.listCourses = (req, res, next) => {
	Curso.find()
		.then((cursos) => res.status(200).json(cursos))
		.catch((error) => console.log(error));
};

module.exports.listByDiscipline = (req, res, next) => {
	const disciplina = req.params.disciplina;

	Curso.find({ disciplina })
		.then((cursos) => res.status.json(cursos))
		.catch((error) => console.log(error));
};

module.exports.getCurso = (req, res, next) => {
	const cursoId = req.params.cursoId;
	console.log(cursoId);

	Curso.findById({ _id: cursoId })
		.then((response) => res.status(200).json(response))
		.catch((error) => console.log(error));
};
