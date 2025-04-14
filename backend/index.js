import express from 'express'
import dotenv, { configDotenv } from 'dotenv'
import cors from 'cors'
import connectDB from './src/DB/connectDB.js';
import EnrollmentRoute from './src/Routes/Enrollment.route.js';
import BookRoute from './src/Routes/Book.route.js';
import BlogRoute from './src/Routes/Blog.route.js';
import OrderRoute from './src/Routes/Order.route.js';
import MemberRoute from './src/Routes/Membership.route.js';


 
configDotenv();
connectDB();









const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/enroll',EnrollmentRoute);

app.use('/api/books',BookRoute)
app.use('/api/blogs',BlogRoute)
app.use('/api/orders',OrderRoute)
app.use('/api/membership',MemberRoute)




  
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST','PUT','DELETE'],
    credentials: true,
}));
app.use('/public', express.static('public'));




app.get('/',(req,res)=>{
    res.send("Server Started Successfully, you are in the homepage...")
})





app.listen(port,()=>{
    console.log(`Server running on port: http://localhost:${port}`)
})