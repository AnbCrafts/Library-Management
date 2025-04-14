import { Router } from "express";
import { getAllBlogs,getBlogById,AddBlog, deleteBlogById } from "../Controllers/blogCRUD.controller.js";
import { upload } from "../Middleware/multer.middleware.js";

const BlogRoute = Router();

BlogRoute.post('/add',upload.fields([{ name: "coverImg", maxCount: 1 }]),AddBlog)
BlogRoute.get('/get-list',getAllBlogs)
BlogRoute.get('/get-single-blog/:id',getBlogById)
BlogRoute.delete('/delete/:id',deleteBlogById)

export default BlogRoute