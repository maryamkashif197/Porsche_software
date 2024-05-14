const mongoose = require("mongoose");
const PreOrderSchema = mongoose.Schema({
    user_id:{type:String,required: true},
    product: [
        {   product_id:{
                type:Number,
                int:true,
                required:true,
              
                
                
            },
        },
    ],
    preOrder_id:{
        type: Number,
        int: true,
     
    },
    payment_method:{
        type:String,
        required: true
    },
    deposit_amount:{
        type:Number,
        required: true,
    },
    preOrder_date:{
    type:Date,
    default: Date.now
    },
    payment_status:{
        type:String,
        
    },
    expected_pick_up_date:{
        type:Date,
             
    },
 

},{timestamps:true});



module.exports = mongoose.model("Order", PreOrderSchema);