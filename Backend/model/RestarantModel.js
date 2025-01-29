var mongoose = require('mongoose')

var Restarant_schema = new mongoose.Schema({
    name: {
        type: String,
       
    },
    address: {
        type: String,
       
    },
    phone: {
        type: String,
        
       
    },
    email: {
        type: String,
       
       
    },
    openingHours: {
        type: Map,
        of: String, 
        default: {}
    },
    cuisine: {
        type: [String],  
       
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    reviews: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        reviewText: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    imageUrl: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('RestarantModel',Restarant_schema)