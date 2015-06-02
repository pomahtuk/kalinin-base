'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClientsSchema = new Schema({
  name: String,
  inn: String,
  address: String,
  phone: String,
  fio: String
});

module.exports = mongoose.model('Clients', ClientsSchema);
