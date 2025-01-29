const PaymentModel = require ('../model/PaymentModel')


exports.createPayment = async (req, res) => {
    try {
        const { OrderId, PaymentMethode, Amount, TransactionId, PaymentStatus, tipAmount } = req.body;

       
        const newPayment = new PaymentModel({
            OrderId,
            PaymentMethode,
            Amount,
            TransactionId,
            PaymentStatus,
            tipAmount
        });

       
        const savedPayment = await newPayment.save();

       
        res.status(201).json({
            status: "Payment created successfully",
            data: savedPayment
        });
    } catch (err) {
        res.status(500).json({
            status: "Error creating payment",
            message: err.message
        });
    }
};



exports.getAllPayments = async (req, res) => {
    try {
        const payments = await PaymentModel.find().populate('OrderId');

        res.status(200).json({
            status: "Payments fetched successfully",
            data: payments
        });
    } catch (err) {
        res.status(500).json({
            status: "Error fetching payments",
            message: err.message
        });
    }
};


exports.getPaymentById = async (req, res) => {
    try {
        const payment = await PaymentModel.findById(req.params.id).populate('OrderId');

        if (!payment) {
            return res.status(404).json({
                status: "Payment not found"
            });
        }

        res.status(200).json({
            status: "Payment fetched successfully",
            data: payment
        });
    } catch (err) {
        res.status(500).json({
            status: "Error fetching payment",
            message: err.message
        });
    }
};


exports.updatePayment = async (req, res) => {
    try {
        const updatedPayment = await PaymentModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } 
        );

        if (!updatedPayment) {
            return res.status(404).json({
                status: "Payment not found"
            });
        }

        res.status(200).json({
            status: "Payment updated successfully",
            data: updatedPayment
        });
    } catch (err) {
        res.status(500).json({
            status: "Error updating payment",
            message: err.message
        });
    }
};


exports.deletePayment = async (req, res) => {
    try {
        const deletedPayment = await PaymentModel.findByIdAndDelete(req.params.id);

        if (!deletedPayment) {
            return res.status(404).json({
                status: "Payment not found"
            });
        }

        res.status(200).json({
            message: "Payment deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            status: "Error deleting payment",
            message: err.message
        });
    }
};
