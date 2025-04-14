import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";

const connectDB = async ()=>{
    const dbURl = process.env.MONGO_DB_URI;
    try {
        const connectionInstance = await mongoose.connect(`${dbURl}/${DB_NAME}`);
        console.log('DB Connection Successfully established');
        console.log(`connection Instance : \n\n${connectionInstance.connection.host}\n\n`)        
    } catch (error) {
        console.log(`MONGODB connection ERROR in connect DB function : ${error}`);
        process.exit(1);
        
    }
}

export default connectDB