const express = require('express');
const router = express.Router();

const animales_controller= require("../controllers/zoo.controller")

//para peticiones http GET
router.get("/agregar",animales_controller.get_agregar);
//No tuve que copiar de nuevo el codigo 
router.get("/add",animales_controller.get_agregar);

//para peticiones http POST
router.post("/agregar",animales_controller.post_agregar);

//para peticiones http GET
router.get("/alimentar", animales_controller.get_alimentar);

router.get("/", animales_controller.get_root)

// Esto es lo que estoy importando el router
module.exports = router;