'use strinct'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var Schema = mongoose.Schema;

var ClientSchema = new Schema({

  name: { type: String, required: true },
  surName: { type: String, default: "" },
  secondSurName: { type: String, default: "" },
  typeOfRoad: { type: String },
  direction: { type: String, default: "" },
  houseNumber: { type: Number, default: null },
  province: { type: String, default: "" },
  landLine: { type: Number, required: true },
  phone: { type: Number, required: true },
  email: { type: String, unique: true, required: true },
  date: { type: Date, default: Date.now },

});

ClientSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Client', ClientSchema);
