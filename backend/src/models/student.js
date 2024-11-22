import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        uinque: true,
    },
    fullName: {
        type: String,
        required: true,

    },
    password: {
        type:String,
        required:true,
        minlength: 6,
    },
    profilePic:{
        type:String,
        default: ""
    },
    
},
{timestamps:true}
)

const Student = mongoose.model("User",studentSchema)
export default Student;