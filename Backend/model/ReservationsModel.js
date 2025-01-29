var mongoose = require ('mongoose')

var Reservations_schema = new mongoose.Schema({

    CustomerId : { 
        type : mongoose.Schema.Types.ObjectId,
        ref : "Customer",
        
    },
    ReservationDate : {
        type : Date,
        default : Date.now
    },
    TableId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Table",
        
    },
    Status : {
        type : String,
        enum : ['Confirmed', 'Cancelled'],
        
    },
    PartySize : {
        type : Number,
        required : true
    },
    SpecialRequests : {
        type : String
    }
})

module.exports = mongoose.model('Reservations',Reservations_schema)