const EmployeesModel = require ('../model/EmployeesModel')


exports.createEmployee = async (req, res) => {
    try {
       const employees = await EmployeesModel.create(req.body)
       res.status(200).json({
        status : "employees Add successfully",
        employees
       })
    } catch (error) {
        res.status(400).json({
            message: error.message 
        })
    }
};


exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await EmployeesModel.find().populate('Restarant'); 
        res.status(200).json({
            status : "get all Employees",
            employees
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
         });
    }
};


exports.getEmployeeById = async (req, res) => {
    
    try {
        const employee = await EmployeesModel.findById(req.params.id).populate('Restarant');
        if (!employee) {
             res.status(404).json({
                status: 'Employee not found'
             })
        }else{
        res.status(200).json({
            status : "get one Employees"
        })
    }
    } catch (error) {
        res.status(400).json({
            message: error.message 
        })
    }
};


exports.updateEmployee = async (req, res) => {
    
    try {
        const employee = await EmployeesModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!employee) {
             res.status(404).json({
                status: 'Employee not found' 
            })
        }else{
        res.status(200).json({
            status : "update nsuccessfully",
            employee
        })
    }
    } catch (error) {
        res.status(400).json({
            message: error.message 
        })
    }
};


exports.deleteEmployee = async (req, res) => {
    
    try {
        const employee = await EmployeesModel.findByIdAndDelete(req.params.id);
        if (!employee) {
             res.status(404).json({
                status: 'Employee not found'
             });
        }else {
        res.status(200).json({ 
            status: 'Employee deleted successfully' 
        })
    }
    } catch (error) {
        res.status(400).json({ 
            message: error.message 
        })
    }
};
