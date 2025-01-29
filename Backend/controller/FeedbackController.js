const FeedbackModel = require('../model/FeedbackModel')

exports.createFeedback = async (req, res) => {
    try {
        const { CustomerId, OrderId, FeedbackText, Rating, Response } = req.body;

        const newFeedback = new FeedbackModel({
            CustomerId,
            OrderId,
            FeedbackText,
            Rating,
            Response
        });

        const savedFeedback = await newFeedback.save();
        res.status(201).json({
            status: 'Feedback created successfully',
            data: savedFeedback
        });
    } catch (error) {
        res.status(400).json({
            status : "Error creating Feddback",
            message: error.message
        })
    }
};

// Get All Feedbacks
exports.getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await FeedbackModel.find()
            .populate('CustomerId', 'name')
            .populate('OrderId', 'orderDetails');

        res.status(200).json({
            status: 'Feedbacks retrieved successfully',
            data: feedbacks
        });
    } catch (error) {
        res.status(500).json({
            status : "Error getall feedback",
            message: error.message
        })
    }
};

// Get Single Feedback by ID
exports.getFeedbackById = async (req, res) => {
    try {
        const feedback = await FeedbackModel.findById(req.params.id)
            .populate('CustomerId', 'name')
            .populate('OrderId', 'orderDetails');

        if (!feedback) {
            res.status(404).json({
                message: "Feedback not found"
            });
        } else {

            res.status(200).json({
                status: 'Feedback retrieved successfully',
                data: feedback
            })
        }
    } catch (error) {
        res.status(500).json({
            status : "Error get one feedback",
            message: error.message
        })
    }
};

// Update Feedback
exports.updateFeedback = async (req, res) => {
    try {
        const { FeedbackText, Rating, Response } = req.body;

        const updatedFeedback = await FeedbackModel.findByIdAndUpdate(
            req.params.id,
            { FeedbackText, Rating, Response },
            { new: true }
        );

        if (!updatedFeedback) {
            res.status(404).json({
                message: "Feedback not found"
            });
        } else {

            res.status(200).json({
                status: 'Feedback updated successfully',
                data: updatedFeedback
            })
        }
    } catch (error) {
        res.status(400).json({
            status : "Error update feedback",
            message: error.message
        })
    }
};

// Delete Feedback
exports.deleteFeedback = async (req, res) => {
    try {
        const feedback = await FeedbackModel.findByIdAndDelete(req.params.id);

        if (!feedback) {
            res.status(404).json({
                status: "Feedback not found"
            });
        } else {

            res.status(200).json({
                status: 'Feedback deleted successfully'
            })
        }
    } catch (error) {
        res.status(500).json({
            status : "Error delete feedback",
            message: error.message
        });
    }
};
