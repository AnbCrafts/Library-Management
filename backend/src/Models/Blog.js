import mongoose from "mongoose";


const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true 
    },
    content:{ 
        type:String,
        required:true
    },
    coverImg:{
        type:String,
        required:true
    },
    category:{
        type:String, 
        required:true
    },
    date:{
        type:Date,
        default: Date.now()
    }

},{timestamps:true});

const Blog = mongoose.models.Blog || mongoose.model("Blog",BlogSchema);

export default Blog