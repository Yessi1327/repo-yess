const express = require('express');
const router = express.Router();

const infoController = require('../controllers/info.controller');

router.get('/historia', infoController.getHistoria);
router.get('/ubicacion', infoController.getUbicacion);
router.get('/horarios', infoController.getHorarios);

module.exports = router;