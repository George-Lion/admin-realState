'use strinct'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({

  name: String,
  lastName: String,
  phone: { type: Number, integer: true },
  email: String,
  direction: String,
  date: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Client', ClientSchema);
