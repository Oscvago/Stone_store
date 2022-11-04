const User = require("../models/auth")
const catchAsyncErrors= require("../middleware/catchAsyncErrors")

//Register a new user --> /api/user/register

exports.userRegister= catchAsyncErrors(async (req, res, next) =>{
    const {navigator, email, password} = req.body;

    const user = await User.create({
       
        UserName:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        role:{
            type: String,
            required: true
        },
    });

    res.status(201).json({
        success:true,
        user
    })
})