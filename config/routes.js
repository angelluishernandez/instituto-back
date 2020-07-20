const express = require("express");
const router = express.Router();
const cursosController = require("../controllers/cursos.controller");
const noticiasController = require("../controllers/news.controller");
const userController = require("../controllers/user.controller");
const homeController = require("../controllers/home.controller");

router.get("/cursos", cursosController.listCourses);
router.get("/noticias", noticiasController.listNoticias);
router.post("/cursos", cursosController.createCourse);
router.post("/noticias", noticiasController.createNoticias);
router.post("/login", userController.doLogin);
router.post("/create-user", userController.createUser);
router.post("/add-carousel-item", homeController.addCarouselItem);
router.post("/create-galleryItem", homeController.addGalleryItem);
router.get("/cursos/:cursoId", cursosController.getCurso);
router.get("/cursos/:disciplina", cursosController.listByDiscipline);

//Require controllers here

// =>

//Set routes here

// =>

module.exports = router;
