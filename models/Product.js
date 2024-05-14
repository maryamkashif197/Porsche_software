const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
    product_id:{type:Number,int:true,required: true},
    model:{type:String,required: true},
    image:{type:String,required:false},
    price:{type:Number,required: true},
    starting_price:{type:Number,required: true},
    color:{type:String},         
    year_of_production:{type:Date,required: true},
    description:{type:String,required: true},
    category:{type:String,required: true},
},{timestamps: true});   //productmodel

ProductSchema.index({ model: 'text' });
            
module.exports = mongoose.model("Product",ProductSchema); 