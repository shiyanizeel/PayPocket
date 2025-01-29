var mongoose = require ('mongoose')

var Category_schema = new mongoose.Schema({
    Name : {
        type : String
    },
    Description : {
        type : String
    },
    imageUrl: {
        type: String,
        trim: true,
    }
})

module.exports = mongoose.model('Category',Category_schema)