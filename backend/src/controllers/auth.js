import { generateToken } from "../lib/utils.js";
import Student from "../models/student.js";
import bcrypt from 'bcryptjs'
import cloud from "../lib/cloudinary.js";

export const signup = async (req,res) =>{
    const {fullName, email, password} = req.body;
    try{
        //Hashing the password
        if(!fullName || !email || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        if(password.length<6){
            return res.status(400).json({message:"Must be atleast 6 characters"})
        }        
    const user = await Student.findOne({email});

    if(user) return res.status(400).send({message:"User already exists"});

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new Student({
        fullName,
        email,
        password: hashedPassword
    })

    if(newUser){
        generateToken(newUser._id,res)
        await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email: newUser.email,
            profilePic: newUser.profilePic
        })
    }else{
        res.status(400).json({message:"Something went wrong"})
    }

    }catch(err){
        console.log("Error in Signup controller"+err);
        return res.status(400).send({message:"Server side Error"})
    }
}
export const login = async (req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await Student.findOne({email});
        if(!user) return res.status(400).json({message:"Invalid Credentials"});
        const passwordCheck = await bcrypt.compare(password,user.password);
        if (!passwordCheck) return res.status(400).json({message:"Invalid Credentials"});
        generateToken(user._id,res)
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            profilePic:user.profilePic
        })

    }catch(err){
        console.log("Error Login controller",err.message);
        res.status(500).json({message:"Server side Error"})
    }
}
export const logout = (req,res)=>{
    try{
        res.cookie("jwt","",{
            maxAge:0
        })
        res.status(200).json("Logged out successfully")
    }catch(err){
        console.log("Error logout controller",err.message);
        res.status(500).json({message:"Server side Error"})
    }
}
export const updateProfile = async (req,res) =>{
    try {
        const {profilePic} = req.body;
        const userId = req.user._id;
        if(!profilePic){
            return res.status(400).json({message:"Profile pic is required"});
        }
        const response = await cloud.uploader.upload(profilePic)
        const updatedUser = await Student.findByIdAndUpdate(userId, {profilePic:response.secure_url},{new:true})
        res.status(200).json({message:updatedUser})
    } catch (error) {
        console.log("Error update profile",error);
        res.status(500).json({message:"Internal Server Error"})   
    }
}
export const checkAuth = (req,res) =>{
    try{
        res.status(200).json(req.user);   
    }catch(error){
        console.log("Error CheckAuth Control",error)
        return res.status(500).json({message:"Internal server Error"})
    }
}