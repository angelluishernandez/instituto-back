const express = require("express");
const router = express.Router();
const cursosController = require("../controllers/cursos.controller");
const noticiasController = require("../controllers/news.controller");
const userController = require("../controllers/user.controller");
const homeController = require("../controllers/home.controller");
const infoController = require("../controllers/info.controller");
const horariosController = require("../controllers/horarios.controller");
const departmentController = require("../controllers/department.controller");
router.get("/cursos", cursosController.listCourses);
router.get("/noticias", noticiasController.listNoticias);
router.get("/get-gallery-items", homeController.getGallery);
router.get("/get-carousel-items", homeController.getCarousel);
router.get("/get-info-url", infoController.getInfoUrls);
router.get("/horarios", horariosController.getHorarios);
router.get("/department", departmentController.getDepartments);
router.post("/department", departmentController.addDepartment);
router.post("/cursos", cursosController.createCourse);
router.post("/noticias", noticiasController.createNoticias);
router.post("/login", userController.doLogin);
router.post("/create-user", userController.createUser);

router.post("/add-carousel-item", homeController.addCarouselItem);
router.post("/add-gallery-item", homeController.addGalleryItem);
router.post("/create-galleryItem", homeController.addGalleryItem);
router.get("/cursos/:cursoId", cursosController.getCurso);
router.get("/cursos/:disciplina", cursosController.listByDiscipline);

//Require controllers here

// =>

//Set routes here

// =>

module.exports = router;
