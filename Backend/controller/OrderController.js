const OrderModel = require('../model/OrderModel')



// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const order = await OrderModel.create(req.res)
        res.status(200).json({
            status: "create order",
            order
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const order = await OrderModel.find()
            .populate('TableId')
            .populate('CustomerID')
            .populate('WaiterID')
            .populate('DiscountApplide');
        res.status(200).json({
            status: "get all order",
            order
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};

// Get order by ID
exports.getOrderById = async (req, res) => {

    try {
        const order = await OrderModel.findById(req.params.id)
            .populate('TableId')
            .populate('CustomerID')
            .populate('WaiterID')
            .populate('DiscountApplide');
        if (!order) {
            res.status(404).json({
                status: 'Order not found'
            })
        } else {
            res.status(200).json({
                status: "get one order",
                order
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};

// Update an order
exports.updateOrder = async (req, res) => {

    try {
        const order = await OrderModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .populate('TableId')
            .populate('CustomerID')
            .populate('WaiterID')
            .populate('DiscountApplide');
        if (!order) {
            res.status(404).json({
                status: 'Order not found'
            })
        } else {
            res.status(200).json({
                status: "update order",
                order
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
   
    try {
        const order = await OrderModel.findByIdAndDelete(req.params.id);
        if (!order) {
             res.status(404).json({
                status: 'Order not found'
             })
        }else{
        res.status(200).json({
            status: 'Order deleted successfully' 
        })
    }
    } catch (error) {
        res.status(400).json({ 
            message: error.message 
        })
    }
};
