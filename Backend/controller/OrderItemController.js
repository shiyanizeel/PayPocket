const error = require('mongoose/lib/error');
const OrderItemModel = require('../model/OrderItemModel')




exports.createOrderItem = async (req, res) => {
    try {
        const { OrderId, MenuItemId, Quantity, ItemPrice, customizations, cookingPreference } = req.body;


        const newOrderItem = new OrderItemModel({
            OrderId,
            MenuItemId,
            Quantity,
            ItemPrice,
            customizations,
            cookingPreference
        });


        const savedOrderItem = await newOrderItem.save();


        res.status(201).json({
            status: "Order item created successfully",
            data: savedOrderItem
        });
    } catch (err) {
        res.status(500).json({
            status: "Error creating order item",
            error: err.message
        });
    }
};


exports.getAllOrderItems = async (req, res) => {
    try {
        const orderItems = await OrderItemModel.find().populate('OrderId').populate('MenuItemId');

        res.status(200).json({
            status: "Order items fetched successfully",
            data: orderItems
        });
    } catch (err) {
        res.status(500).json({
            status: "Error fetching order items",
            message: err.message
        });
    }
};


exports.getOrderItemById = async (req, res) => {
    try {
        const orderItem = await OrderItemModel.findById(req.params.id).populate('OrderId').populate('MenuItemId')

        if (!orderItem) {
            res.status(404).json({
                status: "Order item not found"
            });
        } else {

            res.status(200).json({
                status: "Order item fetched successfully",
                data: orderItem
            })
        }
    } catch (err) {
        res.status(500).json({
            status: "Error fetching order item",
            message: err.message
        });
    }
};


exports.updateOrderItem = async (req, res) => {
    try {
        const updatedOrderItem = await OrderItemModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedOrderItem) {
            res.status(404).json({
                status: "Order item not found"
            });
        }else{

        res.status(200).json({
            status: "Order item updated successfully",
            data: updatedOrderItem
        })
    }
    } catch (err) {
        res.status(500).json({
            status: "Error updating order item",
            message: err.message
        });
    }
};


exports.deleteOrderItem = async (req, res) => {
    try {
        const deletedOrderItem = await OrderItemModel.findByIdAndDelete(req.params.id);

        if (!deletedOrderItem) {
             res.status(404).json({
                status: "Order item not found"
            });
        }else{

        res.status(200).json({
            status: "Order item deleted successfully"
        })
    }
    } catch (err) {
        res.status(500).json({
            status: "Error deleting order item",
            message: err.message
        });
    }
};
