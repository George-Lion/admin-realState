'use strict'

var Client = require('../models/clients')

//Objeto que dispone de todos los metodos de ruta definidos:
var controller = {

  //Método POST para guardar un cliente
  save: (req, res) => {
    var params = req.body;

    var client = new Client();

    //Asignamos los valores
    client.name = params.name;
    client.surName = params.surName;
    client.secondSurName = params.secondSurName;
    client.typeOfRoad = params.typeOfRoad;
    client.direction = params.direction;
    client.houseNumber = params.houseNumber;
    client.postal = params.postal;
    client.province = params.province;
    client.landLine = params.landLine;
    client.phone = params.phone;
    client.email = params.email;

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

  //Método para actualizar clientes:

  update: (req, res) => {
    var clientId = req.params.id;
    var update = req.body;

    Client.findOneAndUpdate({ _id: clientId }, update, { new: true }, (err, clientUpdated) => {
      if (err) {
        return res.status(500).send({
          status: 'error',
          message: 'Error al actualizar el cliente'
        });
      }
      if (!clientUpdated) {
        return res.status(404).send({
          status: 'error',
          message: 'No se ha encontrado el cliente'
        });
      }
      return res.status(200).send({
        status: 'success',
        client: clientUpdated
      });
    });
  },

  //Método para traer una lista de clientes con paginación:

  getClients: async (req, res) => {

    const { page = 1, search } = req.query;

    let filter = {};
    if (search) {
      const searchRegex = new RegExp(search, 'i');
      if (isNaN(search)) {

        // crea un filtro por string:
        filter = {
          $or: [
            { name: searchRegex },
            { surName: searchRegex },
            { secondSurName: searchRegex },
            { email: searchRegex },
            { typeOfRoad: searchRegex },
            { direction: searchRegex },
            { province: searchRegex },
          ]
        }
      } else {

        //crea un filtro por number:
        filter = {
          $or: [
            { landLine: { $eq: Number(search) } },
            { phone: { $eq: Number(search) } },
            { houseNumber: { $eq: Number(search) } },
            { postal: { $eq: Number(search) } },
            { date: { $eq: Number(search) } }
          ]
        }
      }
    }

    const options = {
      limit: 5,
      page: Number(page),
      sort: { date: -1 },
      customLabels: {
        docs: 'clients',
        totalDocs: 'totalClients',
        limit: 'perPage',
        page: 'currentPage',
        nextPage: 'next',
        prevPage: 'prev',
        totalPages: 'totalPages',
        hasPrevPage: 'hasPrev',
        hasNextPage: 'hasNext'
      }
    };

    try {
      const clients = await Client.paginate(filter, options);

      if (!clients) {
        res.status(404).send({ status: 'error', message: 'No hay clientes para mostrar' });
      }
      res.status(200).send({ status: 'success', clients });
    } catch (err) {
      res.status(500).send({ status: 'error', message: 'Error al extraer datos' });
    }
  },

  //Método DELETE para eliminar un cliente:
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