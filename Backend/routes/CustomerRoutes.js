var express = require('express');
const { createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer } = require('../controller/CustomerController');
var router = express.Router();

router.post('/createCustomer',createCustomer)
router.get('/getAllCustomers',getAllCustomers)
router.get('/getCustomerById/:id',getCustomerById)
router.get('/updateCustomer/:id',updateCustomer)
router.post('/deleteCustomer/:id',deleteCustomer)

module.exports = router;
