'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OffersSchema = new Schema({
  client: { type: Schema.Types.ObjectId, ref: 'Clients' },
  title: String,
  startSum: Number,
  orderProof: Number,
  contractProof: Number,
  link: String,
  dateTime: Date,
  dateTimeAuction: Date,
  resultSum: Number,
  winner: String
});

module.exports = mongoose.model('Offers', OffersSchema);
