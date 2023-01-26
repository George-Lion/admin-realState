'use strinct'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var Schema = mongoose.Schema;

var HouseSchema = new Schema({

  typeStreet: { type: String, required: true },
  direction: { type: String, required: true },
  roadNumber: { type: Number, default: null },
  postalCode: { type: Number, default: null },
  province: { type: String, default: "" },
  housingType: { type: String, default: "" },
  operation: { type: String, required: true },
  price: { type: Number, required: true },
  room: { type: Number, default: null },
  bathroom: { type: Number, default: null },
  meters: { type: Number, default: null },
  date: { type: Date, default: Date.now },

});

HouseSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('House', HouseSchema);
