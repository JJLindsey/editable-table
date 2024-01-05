'use strict';

var utils = require('../utils/writer.js');
var UpdateOrder = require('../service/UpdateOrderService');

module.exports.put_orders = function put_orders (req, res, next, id) {
  UpdateOrder.put_orders(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
