var express = require('express');
const { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } = require('../controller/OrderController');
var router = express.Router();

router.post('/createOrder',createOrder)
router.get('/getAllOrders',getAllOrders)
router.get('/getOrderById/:id',getOrderById)
router.get('/updateOrder/:id',updateOrder)
router.post('/deleteOrder/:id',deleteOrder)

module.exports = router;
