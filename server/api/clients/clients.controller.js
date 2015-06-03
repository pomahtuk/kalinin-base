'use strict';

var _ = require('lodash');
var Clients = require('./clients.model');

// Get list of clients
exports.index = function(req, res) {
  Clients.find(function (err, clients) {
    if(err) { return handleError(res, err); }
    return res.json(200, clients);
  });
};

// Get list of clients
exports.search = function(req, res) {
  var regex = new RegExp(req.params.query, "i"),
    query = {
      $or: [
        {
          name: regex
        }, {
          inn: regex
        }, {
          address: regex
        }, {
          phone: regex
        }, {
          fio: regex
        }
      ]
    };

  Clients.find(query, function (err, clients) {
    if(err) { return handleError(res, err); }
    return res.json(200, clients);
  });
};

// Get a single client
exports.show = function(req, res) {
  Clients.findById(req.params.id, function (err, clients) {
    if(err) { return handleError(res, err); }
    if(!clients) { return res.send(404); }
    return res.json(clients);
  });
};

// Creates a new client in the DB.
exports.create = function(req, res) {
  Clients.create(req.body, function(err, clients) {
    if(err) { return handleError(res, err); }
    return res.json(201, clients);
  });
};

// Updates an existing client in the DB.
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

// Deletes a client from the DB.
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
