var express = require('express');
const { createReservation, getAllReservations, getReservationById, updateReservation, deleteReservation } = require('../controller/ReservationsController');
var router = express.Router();

router.post('/createReservation',createReservation)
router.get('/getAllReservations',getAllReservations)
router.get('/getReservationById/:id',getReservationById)
router.get('/updateReservation/:id',updateReservation)
router.post('/deleteReservation/:id',deleteReservation)

module.exports = router;
