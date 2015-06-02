/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Offers = require('./offers.model');

exports.register = function(socket) {
  Offers.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Offers.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('offers:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('offers:remove', doc);
}