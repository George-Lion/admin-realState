'use strict'

var Client = require('../models/clients');

//Creamos un objeto para disponer de todos los metodos de ruta que vamos a definir

var controller = {
  //Método para guardar un cliente
  save: (req, res) => {
    var params = req.body;

    var client = new Client();

    //Asignamos los valores
    client.name = params.name;
    client.lastName = params.lastName;
    client.phone = params.phone;
    client.email = params.email;
    client.direction = params.direction;

    //Guardamos el artículo 

    client.save((err, clientStored) => {

      if (err || !clientStored) {
        return res.status(404).send({
          status: 'error',
          message: 'El cliente no se a guardado'
        })
      }

      return res.status(200).send({
        status: 'success',
        clientStored
      });

    });
  },

  //Método para listar los clientes:

  getClients: (req, res) => {
    var query = Client.find({});
    query.sort('-date').exec((err, clients) => {
      if (err) {
        return res.status(500).send({
          status: 'error',
          message: 'Error al extraer datos'
        });
      }
      if (!clients) {
        return res.status(404).send({
          status: 'error',
          message: 'No hay clientes para mostrar'
        });
      }

      return res.status(200).send({
        status: 'success',
        clients
      });
    });
  },

  //Método para eliminar un cliente:
  deleteClient: (req, res) => {
    //Recoger el id a través de la url:
    var clientId = req.params.id;

    Client.findOneAndDelete({ _id: clientId }, (err, clientRemoved) => {
      if (err) {
        return res.status(500).send({
          status: 'error',
          message: 'Error al eliminar el cliente'
        });
      }
      if (!clientRemoved) {
        return res.status(404).send({
          status: 'error',
          message: 'No se ha encontrado el cliente a eliminar'
        });
      }

      return res.status(200).send({
        status: 'success',
        client: clientRemoved
      });
    });
  }
}

module.exports = controller;