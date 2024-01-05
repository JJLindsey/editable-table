'use strict';

var utils = require('../utils/writer.js');
var NewOrder = require('../service/NewOrderService');

module.exports.post_orders = function post_orders (req, res, next, body) {
  NewOrder.post_orders(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
