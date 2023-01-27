'use strict';

var express = require('express');
var Houses = require('../controllers/houses');

//Llamamos la objeto router de express:
var router = express.Router();

//ruta para guardar un inmueble:
router.post('/saveHouse', Houses.saveHouse);

//ruta para traer una paginación de inmubeles:
router.get('/houses', Houses.getHouses);

//ruta para traer un inmueble por ID:
router.get('/houses/:id', Houses.getHouse);

//ruta para editar un inmueble por ID:
router.get('/house/edit/:id', Houses.editHouse);

//ruta para eliminar un inmueble:
router.delete('/delete/:id', Houses.deleteHouse);

module.exports = router;