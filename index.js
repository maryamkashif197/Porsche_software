const express = require('express');
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");//to work with the .env file
const userRoute = require("./routes/user")
const authenticationRoute = require("./routes/authentication")
const productRoute = require("./routes/product");

const orderRoute = require("./routes/order");
 
const cartRoute = require("./routes/cart");         
const cors = require("cors");
dotenv.config();


//middle ware to insert
app.use(express.json());

app.post('/api/products',(req,res)=>{
    console.log(req.body); //shows whatever the client inserts
    res.send(req.body);
});



mongoose.connect('mongodb://localhost:27017/PORSCHEdatabase')
  .then(() => console.log('Connected!')
  ).catch(()=>{
    console.log('Connection failed!')
  });

app.use(cors()); 
app.use("/api/users", userRoute);
app.use("/api/authentication",authenticationRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.use("/api/cart",cartRoute);      
  
 
app.listen(3400 ,()=>{
    console.log("Backend server is running...")
}); 

app.get('/',(req,res)=>{
    res.send('Hello from Node API :)')
});

