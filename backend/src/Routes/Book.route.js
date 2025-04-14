import { getAllBooks,getBookById,AddBooks, removeBookByID } from "../Controllers/bookCRUD.controller.js";
import {Router} from 'express';
import { upload } from "../Middleware/multer.middleware.js";

 
const BookRoute = Router();

BookRoute.post('/add',upload.fields([{ name: "coverImg", maxCount: 1 },{name:"authorImg",maxCount:1}]),AddBooks);
BookRoute.get('/get-list',getAllBooks);
BookRoute.get('/get-single-book/:id',getBookById);
BookRoute.delete('/delete/:id',removeBookByID)


export default BookRoute;
