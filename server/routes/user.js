const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user")

const router = express.Router();

router.post("/register", async (req, res)=>
{
    const username= req.body.username;
    const password= req.body.password;

    const user = await User.findOne({username});
    if(user){
        return res.status(400).json({message: "username already exists"});
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({username, password: hashedPassword});
    await newUser.save();
    res.json({message: "user registerd successfully"});
});
router.post("/login", async(req, res)=>
{
    const username= req.body.username;
    const password= req.body.password;
   const user = await User.findOne({username});

   if(!user){
    return res
    .status(400)
    .json({message:"username or password is incorrect"});
   }
   const isPasswordValid = await bcrypt.compare(password, user.password);
   if(!isPasswordValid){
    return res
    .status(400)
     .json({message:"username or password is incorrect"});
   }
   const token = jwt.sign({id:user._id},"secret");
   res.json({token, userID: user._id});
});

module.exports = router;