var mongoose = require('mongoose')

var Table_schema = new mongoose.Schema({

    TableName: {
        type: String
    },
    Capacity: {
        type: String
    },
    Status: {
        type: String,
        enum: ['Available', 'Reserved', 'Occupied'],
        
    },
    WaiterAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Emloyees"
    },
    bookingStartTime: {
        type: Date
    },
    bookingEndTime: {
        type: Date
    }
})

module.exports = mongoose.model('TableManage',Table_schema)