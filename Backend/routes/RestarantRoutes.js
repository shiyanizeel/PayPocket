var express = require('express');
const { createRestaurant, createRrstarant, getAllRestaurants, getRestaurantById, updateRestaurant, deleteRestaurant } = require('../controller/RestarantController');

var router = express.Router();

router.post('/createRrstarant',createRrstarant)
router.get('/getAllRestaurants',getAllRestaurants)
router.get('/getRestaurantById/:id',getRestaurantById)
router.get('/updateRestaurant/:id',updateRestaurant)
router.post('/deleteRestaurant/:id',deleteRestaurant)

module.exports = router;