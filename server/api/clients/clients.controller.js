'use strict';

var _ = require('lodash');
var Clients = require('./clients.model');

// Get list of clientss
exports.index = function(req, res) {
  Clients.find(function (err, clientss) {
    if(err) { return handleError(res, err); }
    return res.json(200, clientss);
  });
};

// Get a single clients
exports.show = function(req, res) {
  Clients.findById(req.params.id, function (err, clients) {
    if(err) { return handleError(res, err); }
    if(!clients) { return res.send(404); }
    return res.json(clients);
  });
};

// Creates a new clients in the DB.
exports.create = function(req, res) {
  Clients.create(req.body, function(err, clients) {
    if(err) { return handleError(res, err); }
    return res.json(201, clients);
  });
};

// Updates an existing clients in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Clients.findById(req.params.id, function (err, clients) {
    if (err) { return handleError(res, err); }
    if(!clients) { return res.send(404); }
    var updated = _.merge(clients, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, clients);
    });
  });
};

// Deletes a clients from the DB.
exports.destroy = function(req, res) {
  Clients.findById(req.params.id, function (err, clients) {
    if(err) { return handleError(res, err); }
    if(!clients) { return res.send(404); }
    clients.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}