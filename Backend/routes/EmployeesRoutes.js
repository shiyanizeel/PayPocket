var express = require('express');
const { createEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee } = require('../controller/EmployeesController');
var router = express.Router();

router.post('/createEmployee',createEmployee)
router.get('/getAllEmployees',getAllEmployees)
router.get('/getEmployeeById/:id',getEmployeeById)
router.get('/updateEmployee/:id',updateEmployee)
router.post('/deleteEmployee/:id',deleteEmployee)

module.exports = router;
