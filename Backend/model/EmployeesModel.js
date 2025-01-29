var mongoose = require ('mongoose')

var Employees_schema = new mongoose.Schema({

    Name : {
        type : String
    },
    Role : {
        type :String,
        enum : ['Waiter','Manager','Chef']
    },
    Contact : {
        type : String
    },
    Salary : {
        type : Number
    },
    WorkHours : {
        type : Number,
        default : 0
    },
    JoinDate : {
        type : Date,
        default : Date.now
    },
    Email : {
        type : String
    },
    Address : {
        type : String
    },
    EmergancyContact : {
        type : String
    },
    ParformanceRating : {
        type : String
    },
    Restarant : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Restarant",
        
    }
})

module.exports = mongoose.model('Emloyees',Employees_schema)