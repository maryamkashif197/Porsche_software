const mongoose = require("mongoose")
const { Schema, model } = require("mongoose");
const Product = require("../models/Product");

const ShoppingCartItemSchema = Schema({
    
    products: [
      {  
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },}]
});
const UserSchema = new mongoose.Schema( //register   
    {
        user_id:{type: String,required: true, unique: true},
        firstname:{type: String, required: true, unique: false},
        lastname:{type: String, required: true, unique: false},
        userName:{type: String, required: false, unique: true},
        password:{type: String, required: true, unique: true},
        email:{type: String, required: true, unique: true},
        phoneNo:{type: String, required: true, unique: true},
        zipCode:{type: String, required: true, unique: false},
        location:{type: String, required: true, unique: true},
        isAdmin:{
            type: Boolean, 
            default: false
        },
        shoppingCart: [ShoppingCartItemSchema]
       
    },
        {timestamps:true} //created and upadates at times
    );

    module.exports = mongoose.model("User", UserSchema);