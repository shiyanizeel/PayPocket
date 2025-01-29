const DiscountModel = require('../model/DiscountModel')


exports.createDiscount = async (req, res) => {
    try {
        const { Discription, DiscountPercentage, StartDate, EndDate, maximumDiscountAmount, minimumOrderValue } = req.body;

        const newDiscount = new DiscountModel({
            Discription,
            DiscountPercentage,
            StartDate,
            EndDate,
            maximumDiscountAmount,
            minimumOrderValue
        });

        await newDiscount.save();
        res.status(201).json({
            status: 'Discount created successfully',
            data: newDiscount
        });
    } catch (error) {
        res.status(500).json({
            status: 'Error creating discount',
            message: error.message
        });
    }
};

// Get all discounts
exports.getAllDiscounts = async (req, res) => {
    try {
        const discounts = await DiscountModel.find()

        res.status(200).json({
            status: 'Discounts retrieved successfully',
            data: discounts
        });
    } catch (error) {
        res.status(500).json({
            status: 'Error fetching discounts',
            message: error.message
        });
    }
};

// Get a discount by ID
exports.getDiscountById = async (req, res) => {
    try {

        const discount = await DiscountModel.findById(req.params.id);

        if (!discount) {
            res.status(404).json({
                status: 'Discount not found'
            });
        } else {

            res.status(200).json({
                status: 'Discount retrieved successfully',
                data: discount
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'Error fetching discount',
            message: error.message
        });
    }
};

// Update a discount by ID
exports.updateDiscount = async (req, res) => {
    try {


        const updatedDiscount = await DiscountModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!updatedDiscount) {
            res.status(404).json({
                status: 'Discount not found'
            });
        } else {

            res.status(200).json({
                status: 'Discount updated successfully',
                data: updatedDiscount
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'Error updating discount',
            message: error.message
        });
    }
};

// Delete a discount by ID
exports.deleteDiscount = async (req, res) => {
    try {

        const deletedDiscount = await DiscountModel.findByIdAndDelete(req.params.id);

        if (!deletedDiscount) {
            res.status(404).json({
                status: 'Discount not found'
            });
        } else {

            res.status(200).json({
                status: 'Discount deleted successfully'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'Error deleting discount',
            message: error.message
        });
    }
};
