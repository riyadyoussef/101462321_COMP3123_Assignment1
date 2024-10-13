const express = require('express');
const {
    getAllEmployees,
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employeeController');
const router = express.Router();

// GET: Retrieve all employees
router.get('/employees', getAllEmployees);

// POST: Create a new employee
router.post('/employees', createEmployee);

// GET: Retrieve an employee by ID
router.get('/employees/:eid', getEmployeeById);

// PUT: Update an employee by ID
router.put('/employees/:eid', updateEmployee);

// DELETE: Delete an employee by ID
router.delete('/employees/:eid', deleteEmployee);

module.exports = router;
