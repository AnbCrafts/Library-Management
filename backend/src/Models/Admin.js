import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true, 
        },
        phone: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        profilePic:{
            type:String,
            default:""

        },
        password: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            default: "active", 
            enum: ["active", "inactive"], 
        },
        permissions: {
            type: [String], 
            required: true,
        },
    },
    { timestamps: true }
);

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

export default Admin;
