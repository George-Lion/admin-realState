'use strict'

var Client = require('../models/clients')

//Creamos un objeto para disponer de todos los metodos de ruta que vamos a definir
var controller = {

  //Método para guardar un cliente
  save: (req, res) => {
    var params = req.body;

    var client = new Client();

    //Asignamos los valores
    client.name = params.name;
    client.surName = params.surName;
    client.secondSurName = params.secondSurName;
    client.landLine = params.landLine;
    client.phone = params.phone;
    client.email = params.email;
    client.direction = params.direction;
    client.houseNumber = params.houseNumber;

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

  //Método para listar los clientes con paginación:

  getClients: async (req, res) => {

    const { page = 1, search } = req.query;

    // Crea una expresión regular a partir de os datos del search para hacer una búsqueda en cualquier parte del nombre o dato del cliente

    const searchRegex = new RegExp(search, 'i');
    console.log(searchRegex.exec('ale'));

    // Crea el filtro para la búsqueda utilizando la expresión regular creada anteriormente
    const filter = search ? {

      $or: [
        { name: searchRegex },
        { surName: searchRegex },
        { secondSurName: searchRegex },
        { email: searchRegex },
        /*  { landLine: { $eq: search } },
         { phone: { $eq: search } }, */
        { direction: searchRegex },
        /* { houseNumber: { $eq: search } }, */
      ]
    } : {};

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