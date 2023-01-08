'use strict';

var express = require('express');
var Clients = require('../controllers/clients');

//Llamamos la objeto router de express:
var router = express.Router();

//Rutas para los clientes

router.post('/save', Clients.save);

router.get('/clients', Clients.getClients);

router.delete('/delete/:id', Clients.deleteClient);

module.exports = router;