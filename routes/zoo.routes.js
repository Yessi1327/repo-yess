const { response, request } = require('express');
const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth');
const canView = require('../util/canViewAnimales');

const animales_controller= require("../controllers/zoo.controller")

//para peticiones http GET
router.get('/agregar', isAuth, animales_controller.get_agregar);
router.get('/add', isAuth, animales_controller.get_agregar);

//router.get("/agregar",animales_controller.get_agregar);
//No tuve que copiar de nuevo el codigo 
//router.get("/add",animales_controller.get_agregar);

//para peticiones http POST
router.post('/agregar', isAuth, animales_controller.post_agregar);
//router.post("/agregar",animales_controller.post_agregar);

//para peticiones http GET
router.get('/alimentar', isAuth, animales_controller.get_alimentar);
//router.get("/alimentar", animales_controller.get_alimentar);

//A BASE DE PRIVILEGIOS
router.get('/:id', isAuth, canView, animales_controller.get_root);
router.get('/', isAuth, canView, animales_controller.get_root);
//router.get('/:id', isAuth,  animales_controller.get_root);
//router.get("/", isAuth,  animales_controller.get_root)

//router.get('/:id', animales_controller.get_root);
//router.get("/", animales_controller.get_root)

// Esto es lo que estoy importando el router
module.exports = router;