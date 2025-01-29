var mongoose = require('mongoose')

var Payment_schema = new mongoose.Schema({

    OrderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        
    },
    PaymentMethode: {
        type: String,
        enum: ['Cash', 'Card', 'UPI'],
       
    },
    Amount: {
        type: Number
    },
    PaymentDate: {
        type: Date,
        default: Date.now
    },
    TransactionId: {
        type: String
    },
    PaymentStatus: {
        type: String,
        enum: ['Success', 'Failed', 'Pending'],
        
    },
    tipAmount: {
        type: Number

    }
})

module.exports = mongoose.model('Payment', Payment_schema)