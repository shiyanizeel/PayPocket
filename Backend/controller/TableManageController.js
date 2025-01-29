const { startSession } = require('mongoose');
const TableManageModel = require('../model/TableManageModel')


exports.createTable = async (req, res) => {
    try {
        const table = await TableManageModel.create(req.body)
        res.status(200).json({
            status: "Table create",
            table
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};


exports.getAllTables = async (req, res) => {
    try {
        const table = await TableManageModel.find().populate('WaiterAssigned');
        res.status(200).json({
            status: "get All table",
            table
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};


exports.getTableById = async (req, res) => {
    
    try {
        const table = await TableManageModel.findById(req.params.id).populate('WaiterAssigned');
        if (!table) {
            res.status(404).json({
                status: 'Table not found'
            })
        } else {
            res.status(200).json({
                status: "get one table",
                table
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};


exports.updateTable = async (req, res) => {
    
    try {
        const table = await TableManageModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!table) {
            res.status(404).json({
                status: 'Table not found'
            })
        } else {
            res.status(200).json({
                status: "Table update successfully",
                table
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};


exports.deleteTable = async (req, res) => {
    
    try {
        const table = await TableManageModel.findByIdAndDelete(req.params.id);
        if (!table) {
            res.status(404).json({
                status: 'Table not found'
            })
        } else {
            res.status(200).json({
                status: 'Table deleted successfully'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message 
        })
    }
};
