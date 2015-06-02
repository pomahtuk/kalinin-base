'use strict';

var _ = require('lodash');
var Offers = require('./offers.model');

// Get list of offerss
exports.index = function(req, res) {
  Offers.find(function (err, offerss) {
    if(err) { return handleError(res, err); }
    return res.json(200, offerss);
  });
};

// Get a single offers
exports.show = function(req, res) {
  Offers.findById(req.params.id, function (err, offers) {
    if(err) { return handleError(res, err); }
    if(!offers) { return res.send(404); }
    return res.json(offers);
  });
};

// Creates a new offers in the DB.
exports.create = function(req, res) {
  Offers.create(req.body, function(err, offers) {
    if(err) { return handleError(res, err); }
    return res.json(201, offers);
  });
};

// Updates an existing offers in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Offers.findById(req.params.id, function (err, offers) {
    if (err) { return handleError(res, err); }
    if(!offers) { return res.send(404); }
    var updated = _.merge(offers, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, offers);
    });
  });
};

// Deletes a offers from the DB.
exports.destroy = function(req, res) {
  Offers.findById(req.params.id, function (err, offers) {
    if(err) { return handleError(res, err); }
    if(!offers) { return res.send(404); }
    offers.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}