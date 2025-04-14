import Joi from "joi";
import mongoose from "mongoose";
import { uploadOnCloudinary } from "../Config/Cloudinary.config.js";
import Blog from "../Models/Blog.js";

const validBlogSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    coverImg: Joi.string().uri().allow(""),
    category: Joi.string().required(),
    date: Joi.date().default(new Date()), 
});

const AddBlog = async (req,res)=>{
    try {
        const{title,content,date,category} = req.body;
        const coverImgLocalPath = req.files?.coverImg?.[0]?.path;
        if (!coverImgLocalPath) {
            return res.status(400).json({
                success: false,
                message: "Cover image is required",
            });
        }


        const {error} = validBlogSchema.validate({
            title,content,date,category
        })
        if(error){
            return res.json({
                success:false,
                message:error.details[0].message
            })
        }
        const coverImg = await uploadOnCloudinary(coverImgLocalPath);
        const newBlog = await new Blog({
            title,content,date,category,coverImg:coverImg.url
        })

        const newBlogSaved = await newBlog.save();

        if(newBlogSaved){
            return res.status(201).json({
                success: true,
                message: "Blog added successfully",
                data: newBlog,
            });
        }
        
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            message:"Error while adding blog"
        })
    }
}

const getAllBlogs = async(req,res)=>{
    try {
        const blogs = await Blog.find({});

        if(blogs){
            return res.status(200).json({
                success: true,
                message: "Blogs obtained successfully",
                data: blogs,
            });
        }
        else{
            return res.json({
                success:false,
                message:"Error while getting blogs array"
            }) 
        }
        
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            message:"Error while fetching blogs"
        })
    }
}

const getBlogById = async(req,res)=>{

    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({
            success:false,
            message:"Invalid id"
        })
    }
    else{
        try {

            const blog = await Blog.findById(id);
            if(blog){
                return res.status(200).json({
                    success: true,
                    message: "Blogs obtained successfully",
                    data: blog,
                }); 
            }
            else{
                return res.status(400).json({
                    success: false,
                    message: "error while getting blog by id",
                });
            }
            
        } catch (error) {
            
        }
    }

}

const deleteBlogById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid id",
        });
    }
    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }
        await Blog.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while deleting blog by id",
        });
    }
};

 
export {AddBlog,getAllBlogs,getBlogById,deleteBlogById};