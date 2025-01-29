var mongoose = require('mongoose')

var Inventory_schema = new mongoose.Schema({

    ItemName: {
        type: String
    },
    Quantity: {
        type: String
    },
    Unit: {
        type: String,
       
    },
    SupplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Suppliers",
       
    },
    lastUpdated: { type: Date, default: Date.now },
    reorderLevel: { type: Number,  },
    expiryDate: { type: Date },
    storageLocation: { type: String }
})

module.exports = mongoose.model('Inventory',Inventory_schema)