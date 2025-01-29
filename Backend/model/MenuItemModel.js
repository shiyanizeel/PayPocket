var mongoose = require('mongoose')

var MenuItem_schema = new mongoose.Schema({

    Name : {
        type : String
    },
    Price : {
        type : Number
    },
    Category : {
        type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            
    },
    SubCategory : {
        type: String,
        
        enum: ['Veg','Non-Veg','Svaminarayn','Svaminarayn-jin']
    },
    Description : {
        type : String
    },
    imageUrl: {
        type: String,
        trim: true,
    }
})

module.exports = mongoose.model('MenuItem',MenuItem_schema)