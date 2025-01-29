var express = require('express');
const { createOrderItem, getAllOrderItems, getOrderItemById, updateOrderItem, deleteOrderItem } = require('../controller/OrderItemController');
var router = express.Router();

router.post('/createOrderItem',createOrderItem)
router.get('/getAllOrderItems',getAllOrderItems)
router.get('/getOrderItemById/:id',getOrderItemById)
router.get('/updateOrderItem/:id',updateOrderItem)
router.post('/deleteOrderItem/:id',deleteOrderItem)

module.exports = router;
