var mongoose = require('mongoose')

var Discount_schema = new mongoose.Schema({

    Discription: {
        type: String
    },
    DiscountPercentage: {
        type: String,
       
    },
    StartDate: {
        type: Date,
        
    },
    EndDate: {
        type: Date,
        
    },
    maximumDiscountAmount: { type: Number },
    minimumOrderValue: { type: Number }
})

module.exports = mongoose.model('DiscountsModel',Discount_schema)