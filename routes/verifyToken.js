const jwt = require("jsonwebtoken");
const User = require("../models/User");


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SEC, (err, user) => {
        if (err) res.status(403).json("Token is not valid!"); //
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  };


  const verifyTokenAndAuthorization = (req, res, next) => {
    //calling out verifyToken  // customer and admin 
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next(); // Call next middleware if authorization succeeds t
        } else {
            return res.status(403).json("You are not authorized to perform this action");
        }
    });
};          

const verifyTokenAndAdmin = (req, res, next) => {
    // Call verifyToken middleware to verify the token first
    verifyToken(req, res, () => {
        // If token verification succeeds, check if the user is an admin
        if (req.user.isAdmin) {
            // User is an admin, allow the operation to proceed
            next();
        } else {
            // User is not an admin, return a 403 Forbidden error
            res.status(403).json("You are not allowed to do that");
        }
    });
};

module.exports = {verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin};