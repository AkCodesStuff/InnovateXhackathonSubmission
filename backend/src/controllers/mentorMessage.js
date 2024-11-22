import Student from "../models/student.js";
import Message from "../models/mentorMessage.js";
import cloud from "../lib/cloudinary.js";
export const getUsers = async(req,res) =>{
    try {
       const loggedInUserId = req.user._id;
       const filtered = await Student.find({_id: {$ne:loggedInUserId}}).select("-password");
       res.status(200).json(filtered)
       } 
     catch (error) {
        console.log("Error getUsers"+error);
        res.status(500).json({message:"Server Side error"});
    }
}

export const getMessages = async(req,res) =>{
    try {
        const {id:userOnChat} = req.params
        const meriId = req.user._id;
        const messages = await Message.find({
            $or:[
                {senderId:meriId,receiverId:userOnChat},
                {sender:userOnChat,receiverId:meriId}
            ]
        })
        res.status(200).json(messages)
    }
    catch(err){
        console.log("Error getMessages"+err)
        res.status(500).json({message:"Internal server error"})
    }
}
export const sendMessage = async(req,res) =>{
    try{
        const {text,image} = req.body;
        const {id:receiverId} = req.params;
        const meriId = req.user._id;
        let imageUrl;
        if(image){
            const uploadImage = await cloud.uploader.upload(image)
            imageUrl = uploadImage.secure_url;
        }
        
        const newMessage = new Message({
        senderId,
        receiverId,
        text,
        image:imageUrl
    })
    await newMessage.save()

    //Socket.io implementation

    res.status(201).json(newMessage)
    }catch(err){
        console.log("Error sendMessage control"+err)
        res.status(500).json({err:"Server side error"});
    }
}