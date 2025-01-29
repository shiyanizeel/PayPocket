const BillingModel = require('../model/BillingModel')

exports.createBill = async (req, res) => {
    try {
        const { orderId, customerId, items, subTotal, discount, tax, finalAmount, paymentMethod, paymentStatus } = req.body;

        const newBill = new BillingModel({
            orderId,
            customerId,
            items,
            subTotal,
            discount,
            tax,
            finalAmount,
            paymentMethod,
            paymentStatus
        });

        const savedBill = await newBill.save();
        res.status(201).json({
            status: 'Bill created successfully',
            data: savedBill
        });
    } catch (error) {
        res.status(400).json({
            status: "Error create billing ",
            message: error.message
        });
    }
};

exports.getAllBillings = async (req, res) => {
    try {
        const billings = await BillingModel.find()
            .populate('orderId', 'orderDetails')
            .populate('customerId', 'name email')
            .populate('items.itemId', 'name price');

        res.status(200).json({
            status: "get all billing",
            billings
        });
    } catch (err) {
        res.status(500).json({
            status: "Error getall billing",
            message: err.message
        });
    }
};


exports.getBillingById = async (req, res) => {
    try {
        const billing = await BillingModel.findById(req.params.Id)
            .populate('orderId', 'orderDetails')
            .populate('customerId', 'name email')
            .populate('items.itemId', 'name price');

        if (!billing) {
            res.status(404).json({
                status: 'Billing entry not found'
            });
        } else {

            res.status(200).json({
                status: "get one bill",
                billing
            })
        }
    } catch (err) {
        res.status(500).json({
            status: "Error get one bill",
            message: err.message
        })
    }
};


exports.updateBilling = async (req, res) => {
    try {
        const updatedBilling = await BillingModel.findByIdAndUpdate(
            req.params.Id,
            {
                $set: req.body
            },
            { new: true }
        );

        if (!updatedBilling) {
            res.status(404).json({
                status: 'Billing entry not found'
            });
        } else {

            res.status(200).json({
                status: "Bill update successfully",
                updatedBilling
            })
        }
    } catch (err) {
        res.status(500).json({
            status: "Error update bill",
            message: err.message
        })
    }
};


exports.deleteBilling = async (req, res) => {
    try {
        const billing = await BillingModel.findByIdAndDelete(req.params.Id);

        if (!billing) {
            res.status(404).json({
                status: 'Billing entry not found'
            });
        } else {

            res.status(200).json({
                message: 'Billing entry deleted successfully'
            })
        }
    } catch (err) {
        res.status(500).json({
            status: "Error delete bill",
            message: err.message
        });
    }
};