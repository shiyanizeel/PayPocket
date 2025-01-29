var express = require('express');
const { createDiscount, getAllDiscounts, getDiscountById, updateDiscount, deleteDiscount } = require('../controller/DiscountController');
var router = express.Router();

router.post('/createDiscount',createDiscount)
router.get('/getAllDiscounts',getAllDiscounts)
router.get('/getDiscountById/:id',getDiscountById)
router.get('/updateDiscount/:id',updateDiscount)
router.post('/deleteDiscount/:id',deleteDiscount)

module.exports = router;
