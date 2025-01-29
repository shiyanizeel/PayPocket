const SuppliersModel = require('../model/SuppliersModel')



exports.createSupplier = async (req, res) => {
    try {
        const { Name, Contact, Email, ItemsSupplied, LastdeliveryDate, Address, paymentTerms } = req.body;

        const newSupplier = new SuppliersModel({
            Name,
            Contact,
            Email,
            ItemsSupplied,
            LastdeliveryDate,
            Address,
            paymentTerms
        });

        await newSupplier.save();
        res.status(201).json({
            status: 'Supplier created successfully',
            data: newSupplier
        });
    } catch (error) {

        res.status(500).json({
            status: 'Error creating supplier',
            message: error.message
        });
    }
};

// Get all suppliers
exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await SuppliersModel.find();

        res.status(200).json({
            status: 'Suppliers retrieved successfully',
            data: suppliers
        });
    } catch (error) {

        res.status(500).json({
            status: 'Error fetching suppliers',
            message: error.message
        });
    }
};

// Get a supplier by ID
exports.getSupplierById = async (req, res) => {
    try {

        const supplier = await SuppliersModel.findById(req.params.id);

        if (!supplier) {
            res.status(404).json({
                status: 'Supplier not found'
            });
        } else {

             res.status(200).json({
                status: 'Supplier retrieved successfully',
                data: supplier
            })
        }
    } catch (error) {

        res.status(500).json({
            status: 'Error fetching supplier',
            message: error.message
        });
    }
};


exports.updateSupplier = async (req, res) => {
    try {
        
        const updatedSupplier = await SuppliersModel.findByIdAndUpdate(req.params.id,req.body, { new: true });

        if (!updatedSupplier) {
             res.status(404).json({
                status: 'Supplier not found'
            })
        }else{

         res.status(200).json({
            status: 'Supplier updated successfully',
            data: updatedSupplier
        })
    }
    } catch (error) {
         res.status(500).json({
            status: 'Error updating supplier',
            message: error.message
        });
    }
};

// Delete a supplier by ID
exports.deleteSupplier = async (req, res) => {
    try {
        
        const deletedSupplier = await SuppliersModel.findByIdAndDelete(req.params.id);

        if (!deletedSupplier) {
            return res.status(404).json({
                status: 'Supplier not found'
            });
        }else{

         res.status(200).json({
            status: 'Supplier deleted successfully'
        })
    }
    } catch (error) {
         res.status(500).json({
            status: 'Error deleting supplier',
            message: error.message
        });
    }
};
