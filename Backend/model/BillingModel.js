var mongoose =require ('mongoose')



const billingSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        
    },
    items: [{
        itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MenuItem",
            
        },
        quantity: {
            type: Number,
            
        },
        price: {
            type: Number,
            
        },
        total: {
            type: Number,
            
        }
    }],
    subTotal: {
        type: Number,
        
    },
    discount: {
        type: Number,
       
    },
    tax: {
        type: Number,
        
    },
    finalAmount: {
        type: Number,
        
    },
    paymentMethod: {
        type: String,
        enum: ['Cash', 'Card', 'UPI', 'Online'],
       
    },
    paymentStatus: {
        type: String,
        enum: ['Paid', 'Pending'],
       
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("BillingModel", billingSchema);
