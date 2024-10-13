const Employee = require('../models/Employee');

// GET: Retrieve all employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// POST: Create a new employee
exports.createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).json({ message: 'Employee created successfully', employee_id: employee._id });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// GET: Retrieve an employee by ID
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.eid);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// PUT: Update an employee by ID
exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.eid, req.body, { new: true });
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee details updated successfully', employee });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// DELETE: Delete an employee by ID
exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.eid);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(204).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

