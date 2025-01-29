var express = require('express');
const { createBill, getAllBillings, getBillingById, updateBilling, deleteBilling } = require('../controller/BillingController');
var router = express.Router();

router.post('/createBill',createBill)
router.get('/getAllBillings',getAllBillings)
router.get('/getBillingById/:id',getBillingById)
router.get('/updateBilling/:id',updateBilling)
router.post('/deleteBilling/:id',deleteBilling)

module.exports = router;
