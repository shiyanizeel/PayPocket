var mongoose = require('mongoose')
const MenuItemModel = require('./MenuItemModel')

var OrderItem_schema = new mongoose.Schema({

    OrderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        
    },
    MenuItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
        
    },
    Quantity: {
        type: String
    },
    ItemPrice: {
        type: Number
    },
    customizations: {
        type: String
    },
    cookingPreference: {
        type: String
    }
})

module.exports = mongoose.model('OrderItem',OrderItem_schema)