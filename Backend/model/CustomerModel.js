var mongoose = require('mongoose')

var customer_schema = new mongoose.Schema({

    Name: {
        type: String
    },
    PhoneNo: {
        type: String
    },
    Address: {
        type: String
    },
    RestarantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restarant',
    },
    OrderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    },
    createdat: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('CustomerModel',customer_schema)