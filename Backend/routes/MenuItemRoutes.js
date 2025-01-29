var express = require('express');
const { createMenuItem, getAllMenuItems, getMenuItemById, updateMenuItem, deleteMenuItem } = require('../controller/MenuItemController');
var router = express.Router();

router.post('/createMenuItem',createMenuItem)
router.get('/getAllMenuItems',getAllMenuItems)
router.get('/getMenuItemById/:id',getMenuItemById)
router.get('/updateMenuItem/:id',updateMenuItem)
router.post('/deleteMenuItem/:id',deleteMenuItem)

module.exports = router;
