var mongoose = require('mongoose')
const { schema } = require('./CustomerModel')

var FeedBack_schema = new mongoose.Schema({

    CustomerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
       
    },
    OrderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        
    },
    FeedbackText : {
        type : String
    },
    Rating : {
        type : String
    },
    Date : {
        type : Date,
        default : Date.now
    },
    Response : {
        type : String
    }
})

module.exports = mongoose.model('Feedback',FeedBack_schema)