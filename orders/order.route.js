var express = require('express')

var router = express.Router()

var ordersController = require('./order.controller');

router.route('/createOrders').post(ordersController.orderPayment);
router.route('/payment').post(ordersController.payment);


module.exports = router;