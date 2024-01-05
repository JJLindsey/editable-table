'use strict';

var utils = require('../utils/writer.js');
var DeleteOrder = require('../service/DeleteOrderService');

module.exports.delete_orders = function delete_orders (req, res, next, id) {
  DeleteOrder.delete_orders(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
