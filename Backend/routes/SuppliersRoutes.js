var express = require('express');
const { createSupplier, getAllSuppliers, getSupplierById, updateSupplier, deleteSupplier } = require('../controller/SuppliersController');
var router = express.Router();

router.post('/createSupplier',createSupplier)
router.get('/getAllSuppliers',getAllSuppliers)
router.get('/getSupplierById/:id',getSupplierById)
router.get('/updateSupplier/:id',updateSupplier)
router.post('/deleteSupplier/:id',deleteSupplier)


module.exports = router;
