import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    profilePicture:{
        type:String,
    },
    followers:{
        type:[String],
        default:[]
    },
    following:{
        type:[String],
        default:[]
    },
    bio:{
        type:String,
        default:""
    }
})

 export const User = mongoose.model("User",userSchema);