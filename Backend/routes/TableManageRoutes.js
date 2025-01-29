var express = require('express');
const { createTable, getAllTables, getTableById, updateTable, deleteTable } = require('../controller/TableManageController');
const { get } = require('mongoose');
var router = express.Router();

router.post('/createTable',createTable)
router.get('/getAllTables',getAllTables)
router.get('/getTableById/:id',getTableById)
router.get('/updateTable/:id',updateTable)
router.post('/deleteTable/:id',deleteTable)

module.exports = router;
