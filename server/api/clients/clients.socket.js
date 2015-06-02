/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Clients = require('./clients.model');

exports.register = function(socket) {
  Clients.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Clients.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('clients:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('clients:remove', doc);
}