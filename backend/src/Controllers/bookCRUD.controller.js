import Book from "../Models/Book.js";
import Joi from "joi";
import mongoose from "mongoose";
import { uploadOnCloudinary } from "../Config/Cloudinary.config.js";

const bookValidSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    coverImg: Joi.string().uri().allow(""),
    author: Joi.string().required(),
    authorImg: Joi.string().uri().allow(""),
    price: Joi.number().positive().required(),
    category: Joi.string().required(),
    publisher: Joi.string().default("Unknown"),
    publicationYear: Joi.number()
        .integer()
        .min(1000)
        .max(new Date().getFullYear())
        .default(new Date().getFullYear()),
    language: Joi.string().required(),
    totalCount: Joi.number().integer().min(0).required(),
    availableCount: Joi.number().integer().min(0).max(Joi.ref("totalCount")).required(),
    borrowedCount: Joi.number().integer().min(0).max(Joi.ref("totalCount")).required(),
    location: Joi.string().required(),
    status: Joi.string()
        .valid("Available", "Not Available", "Reserved", "Borrowed", "Out of Stock")
        .default("Available")
        .required(),
});

const AddBooks = async (req, res) => {
    try {
        const {
            title,
            description,
            author,
            price,
            category,
            publisher,
            publicationYear,
            language,
            totalCount,
            availableCount,
            borrowedCount,
            location,
            status,
        } = req.body;

        const coverImgLocalPath = req.files?.coverImg?.[0]?.path;
        const authorImgLocalPath = req.files?.authorImg?.[0]?.path;

        if (!coverImgLocalPath || !authorImgLocalPath) {
            return res.status(400).json({
                success: false,
                message: "Cover image and author image are required",
            });
        }

        const { error } = bookValidSchema.validate({
            title,
            description,
            author,
            price,
            category,
            publisher,
            publicationYear,
            language,
            totalCount,
            availableCount,
            borrowedCount,
            location,
            status,
        }); 

        if (error) {
            return res.status(400).json({ success: false, msg: error.details[0].message });
        }

        const coverImg = await uploadOnCloudinary(coverImgLocalPath);
        const authorImg = await uploadOnCloudinary(authorImgLocalPath);

        const newBook = new Book({
            coverImg: coverImg.url,
            authorImg: authorImg.url,
            title,
            description,
            author,
            price,
            category,
            publisher,
            publicationYear,
            language,
            totalCount,
            availableCount,
            borrowedCount,
            location,
            status,
        });

        const addedBook = await newBook.save();
        return res.status(201).json({
            success: true,
            message: "Book added successfully",
            data: addedBook,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const books = await Book.find({})
            .skip((page - 1) * limit)
            .limit(Number(limit));
        return res.status(200).json({
            success: true,
            message: "Books obtained successfully",
            data: books,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const getBookById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid book ID" });
    }

    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Book obtained successfully",
            data: book,
        }); 
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const removeBookByID = async(req,res)=>{
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid book ID" });
    }
    try {
        const book = await Book.findById(id);
        if(!book){
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }
        else{
            await Book.findByIdAndDelete(id);
            return res.status(200).json({
                success: true,
                message: "Book deleted successfully",
            });
        }
        
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" });
        
    }
}



export { AddBooks, getAllBooks, getBookById,removeBookByID };
