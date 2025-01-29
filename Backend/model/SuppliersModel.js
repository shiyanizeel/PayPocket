var mongoose = require('mongoose')

var Suppliers_schem = new mongoose.Schema({

    Name: {
        type: String
    },
    Contact: {
        type: Number
    },
    Email: {
        type: String
    },
    ItemsSupplied: {
        type: String
    },
    LastdeliveryDate: {
        type: Date,
    },
    Address: {
        type: String
    },
    paymentTerms: {
        type: String
    }
})

module.exports = mongoose.model('Suppliers',Suppliers_schem)