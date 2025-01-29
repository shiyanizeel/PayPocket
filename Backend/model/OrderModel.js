var mongoose = require ('mongoose')

var Order_schema = new mongoose.Schema({

    TableId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Table",
        
    },
    CustomerID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Customer",
        required : true
    },
    OrderDate : {
        type: Date, 
        default: Date.now
    },
    Orderstatus : {
        type : String,
        enum : ['Pending', 'In Process', 'Served', 'Completed'],
       
    },
    TotalAmount :{
        type : String
    },
    WaiterID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Employees",
        
    },
    DiscountApplide : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Discount",
        
    },
    specialInstructions : {
        type : String
    }
})

module.exports = mongoose.model('Order',Order_schema)