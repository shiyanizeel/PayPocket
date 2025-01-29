var express = require('express');
const { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } = require('../controller/CategoryController');
var router = express.Router();

router.post('/createCategory',createCategory)
router.get('/getAllCategories',getAllCategories)
router.get('/getCategoryById/:id',getCategoryById)
router.get('/updateCategory/:id',updateCategory)
router.post('/deleteCategory/:id',deleteCategory)

module.exports = router;
