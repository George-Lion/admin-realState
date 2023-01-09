'use strinct'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var Schema = mongoose.Schema;

var ClientSchema = new Schema({

  name: String,
  surName: String,
  secondSurName: String,
  landLine: { type: Number, integer: true },
  phone: { type: Number, integer: true },
  email: String,
  direction: String,
  houseNumber: { type: Number, integer: true },
  date: { type: Date, default: Date.now },

});

ClientSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Client', ClientSchema);
