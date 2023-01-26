'use strict'

var House = require('../models/houses')

//Objeto que dispone de todos los metodos de ruta definidos:
var controller = {

  //Método POST para guardar un cliente
  saveHouse: (req, res) => {
    var params = req.body;

    var house = new House();

    //Asignamos los valores
    house.typeStreet = params.typeStreet;
    house.direction = params.direction;
    house.roadNumber = params.roadNumber;
    house.postalCode = params.postalCode;
    house.province = params.province;
    house.housingType = params.housingType;
    house.operation = params.operation;
    house.price = params.price;
    house.room = params.room;
    house.bathroom = params.bathroom;
    house.meters = params.meters;

    //Guardamos el artículo 

    house.save((err, houseStored) => {

      if (err || !houseStored) {
        return res.status(404).send({
          status: 'error',
          message: 'El cliente no se a guardado'
        })
      }

      return res.status(200).send({
        status: 'success',
        houseStored
      });

    });
  },

  //Método para actualizar clientes:

  update: (req, res) => {
    var houseId = req.params.id;
    var update = req.body;

    House.findOneAndUpdate({ _id: houseId }, update, { new: true }, (err, houseUpdated) => {
      if (err) {
        return res.status(500).send({
          status: 'error',
          message: 'Error al actualizar el cliente'
        });
      }
      if (!houseUpdated) {
        return res.status(404).send({
          status: 'error',
          message: 'No se ha encontrado el cliente'
        });
      }
      return res.status(200).send({
        status: 'success',
        house: houseUpdated
      });
    });
  },

  //Método para traer un inmueble:
  getHouse: (req, res) => {
    var houseId = req.params.id;

    House.findById(houseId, (err, house) => {
      if (err) {
        return res.status(500).send({
          status: 'error',
          message: 'Error al obtener el inmueble'
        });
      }
      if (!house) {
        return res.status(404).send({
          status: 'error',
          message: 'No se ha encontrado el inmueble'
        });
      }
      return res.status(200).send({
        status: 'success',
        house
      });
    });
  },

  //Método para traer una lista de inmuebles con paginación:

  getHouses: async (req, res) => {

    const { page = 1, search } = req.query;

    let filter = {};
    if (search) {
      const searchRegex = new RegExp(search, 'i');
      if (isNaN(search)) {

        // crea un filtro por string:
        filter = {
          $or: [
            { typeStreet: searchRegex },
            { direction: searchRegex },
            { province: searchRegex },
            { housingType: searchRegex },
            { operation: searchRegex },
          ]
        }
      } else {

        //crea un filtro por number:
        filter = {
          $or: [
            { roadNumber: { $eq: Number(search) } },
            { postalCode: { $eq: Number(search) } },
            { price: { $eq: Number(search) } },
            { room: { $eq: Number(search) } },
            { bathroom: { $eq: Number(search) } },
            { meters: { $eq: Number(search) } },
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
        docs: 'houses',
        totalDocs: 'totalHouses',
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
      const houses = await House.paginate(filter, options);

      if (!houses) {
        res.status(404).send({ status: 'error', message: 'No hay clientes para mostrar' });
      }
      res.status(200).send({ status: 'success', houses });
    } catch (err) {
      res.status(500).send({ status: 'error', message: 'Error al extraer datos' });
    }
  },

  //Método DELETE para eliminar un cliente:
  deleteHouse: (req, res) => {
    //Recoger el id a través de la url:
    var houseId = req.params.id;

    House.findOneAndDelete({ _id: houseId }, (err, houseRemoved) => {
      if (err) {
        return res.status(500).send({
          status: 'error',
          message: 'Error al eliminar el cliente'
        });
      }
      if (!houseRemoved) {
        return res.status(404).send({
          status: 'error',
          message: 'No se ha encontrado el cliente a eliminar'
        });
      }

      return res.status(200).send({
        status: 'success',
        house: houseRemoved
      });
    });
  }
}

module.exports = controller;