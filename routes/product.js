const User = require("../models/User");
const Product = require("../models/Product");


const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken"); 
 


const router = require("express").Router();

//admin can only create update and delete :))) 

//CREATE 
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

       
     
  //UPDATE works
  router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETEEE
  router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET PRODUCT          
  router.get("/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET ALL  PRODUCTSSS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const filterParams = req.query; // Get all query parameters   
  
    try {
      let product;
  
      if (qNew) {
        product = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (Object.keys(filterParams).length > 0) {
        product = await Product.find(filterParams); // Filter based on all query parameters
      } else {
        product = await Product.find();
      }
  
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  });  //finding product by its name 

  router.get('/find/:model', async (req, res) => {
    const modelName = req.params.model;
    try {
        const products = await Product.find({ model: { $regex: modelName, $options: 'i' } });
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router

