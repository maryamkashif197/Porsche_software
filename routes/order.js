const Order = require("../models/Order");
const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();


//CREATE order works 

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
    // Extract fields from the request body
    const { user_id, products, payment_method, deposit_amount, preOrder_date } = req.body;
 
    try {
        // Generate a unique preOrder_id
        const preOrder_id = generatePreOrderId();

        // Create a new order object
        const newOrder = new Order({
            user_id,
            products,
            preOrder_id,  // Automatically generated preOrder_id
            payment_method,
            deposit_amount,
            preOrder_date //by default its the current day the user orders 
        });

        // Save the order to the database
        const savedOrder = await newOrder.save();

        // Respond with the saved order
        res.status(200).json(savedOrder);
    } catch (err) {
        // Handle errors
        res.status(500).json({ error: "Internal server error", message: err.message });
    }
});

// Function to generate a unique 6-digit preOrder_id
function generatePreOrderId() {
//cs1 nostolgia lol
    return Math.floor(Math.random() * 900000) + 100000;
}
//it will generate a random order id 


//update Order works
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    // Here we will check if it's an admin or customer 
    
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            // To set new information of order
            $set: req.body // This takes everything in the body and resets
            // Verifying it's new
        }, { new: true });
                 
       res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE WORKS
router.delete("/:preOrder_id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Your order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET Orders works for both customer and user
  router.get("/find/:user_id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      const orders = await Order.find({user_id: req.params.user_id});
      
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }); 
  
  //GET ALL orders works
  router.get("/", verifyTokenAndAdmin, async (req, res) => {
    
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);               
    }   
  });


  module.exports = router