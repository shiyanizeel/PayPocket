var express = require('express');
const { createPayment, getAllPayments, getPaymentById, updatePayment, deletePayment } = require('../controller/PaymentController');
var router = express.Router();

router.post('/createPayment',createPayment)
router.get('/getAllPayments',getAllPayments)
router.get('/getPaymentById/:id',getPaymentById)
router.get('/updatePayment/:id',updatePayment)
router.post('/deletePayment/:id',deletePayment)

module.exports = router;
