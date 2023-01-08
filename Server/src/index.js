'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const port = 3900;

const url = 'mongodb://0.0.0.0:27017/api_rest_reactclient';

//Evita algunos fallos en la conección de MongoDb
mongoose.Promise = global.Promise;

var client_routes = require('./routes/clients');

mongoose.set('strictQuery', true);

//Cargamos body-parser, es un middleware para analizar cuerpos a través de la URL
app.use(bodyParser.urlencoded({ extended: false }));

//Cualquier petición la convertimos en json:
app.use(bodyParser.json());

//Activamos el CORS para permitir las peticiones AJAX y HTTP desde el frontend:
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})

app.use('/api', client_routes);

mongoose.connect(url, { useNewUrlParser: true }).then(() => {
  console.log('Conexión a la bdd realizada con éxito!!!');
  app.listen(port, () => {
    console.log('Lanzando la aplicación en el puerto ' + port);
  });
})