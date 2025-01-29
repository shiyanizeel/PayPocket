var express = require('express');
const { createInventory, getAllInventory, getInventoryById, updateInventory, deleteInventory } = require('../controller/InventoryController');
var router = express.Router();

router.post('/createInventory',createInventory)
router.get('/getAllInventory',getAllInventory)
router.get('/getInventoryById/:id',getInventoryById)
router.get('/updateInventory/:id',updateInventory)
router.post('/deleteInventory/:id',deleteInventory)

module.exports = router;
