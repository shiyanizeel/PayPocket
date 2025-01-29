const CustomerModel = require('../model/CustomerModel');

exports.createCustomer = async (req, res) => {
    try {
        const { Name, PhoneNo, Address, RestarantId, OrderId } = req.body;
        const newCustomer = new CustomerModel({
            Name,
            PhoneNo,
            Address,
            RestarantId,
            OrderId
        });

        const savedCustomer = await newCustomer.save();
        res.status(201).json({
            status: "Customer Add ",
            savedCustomer
        })
    } catch (error) {
        res.status(500).json({
            status: "Error creating customer",
            message: error.message
        })
    }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await CustomerModel.find().populate('RestarantId').populate('OrderId')
        res.status(200).json({
            status: "Get All Customer",
            customers
        })
    } catch (error) {
        res.status(500).json({
            status: "Error retrieving customers",
            message: error.message
        })
    }
}

// Get a single customer by ID
exports.getCustomerById = async (req, res) => {
    try {
        const customer = await CustomerModel.findById(req.params.id).populate('RestarantId').populate('OrderId')
        if (!customer) {
            return res.status(404).json({
                status: 'Customer not found'
            })
        }
        res.status(200).json({
            status: "Get one Customer",
            customer
        })
    } catch (error) {
        res.status(500).json({
            status: 'Error retrieving customer',
            message: error.message
        })
    }
};

// Update a customer by ID
exports.updateCustomer = async (req, res) => {
    try {
        const { Name, PhoneNo, Address, RestarantId, OrderId } = req.body;
        const updatedCustomer = await CustomerModel.findByIdAndUpdate(
            req.params.id,
            { Name, PhoneNo, Address, RestarantId, OrderId },
            { new: true }
        );

        if (!updatedCustomer) {
            res.status(404).json({
                status: 'Customer not found'
            })
        } else {

            res.status(200).json({
                status: "Customer update successfuly",
                updatedCustomer
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'Error updating customer',
            message: error.message
        })
    }
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
    try {
        const deletedCustomer = await CustomerModel.findByIdAndDelete(req.params.id);
        if (!deletedCustomer) {
            res.status(404).json({
                status: 'Customer not found'
            })
        } else {
            res.status(200).json({
                status: 'Customer deleted successfully'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'Error deleting customer',
            message: error.message
        });
    }
};


