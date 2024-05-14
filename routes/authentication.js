const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")
//REGISTER  
router.post("/register", async(req, res) =>{ //user send info
    
    const newUser = new User({
        user_id: req.body.user_id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        email: req.body.email,
        userName:req.body.userName,  
        phoneNo: req.body.phoneNo,
        zipCode: req.body.zipCode,         
        location: req.body.lastname,
        isAdmin: req.body.isAdmin,  
    });
    
   
        try {
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    
    
    // Then call the function



});

router.post("/login", async(req, res)=>{
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(401).json("Wrong Credentials!")

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword !==req.body.password && 
        res.status(401).json("Wrong Credentials!");

        const accessToken = jwt.sign({
            user_id: user.user_id,
            isAdmin: user.isAdmin,
        }, 
        process.env.JWT_SEC,
        {expiresIn:"3d"}
      );

        const {password, ...others} = user._doc;  

     res.status(200).json({...others, accessToken});
    }
     catch (err) {
        res.status(500).json(err)
    }
 
});

module.exports = router 