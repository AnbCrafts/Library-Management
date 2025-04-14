import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
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
        profilePic: {
            type: String,
            default: "", 
        },
        address: {
            type: String,
            required: true,
        },
        memberShipType: {
            type: String,
            enum: ["Basic", "Premium", "VIP"], 
        },
        password: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "Active",
            enum: ["Active", "Inactive", "Blocked"],
        },
        memberShipStartDate: {
            type: Date,
            default: Date.now, 
        },
        memberShipExpiryDate: {
            type: Date,
            default: Date.now, 
        },
        borrowings: {
            type: [
                {
                    bookId: mongoose.Schema.Types.ObjectId, // Reference to the Book model
                    borrowedDate: { type: Date },
                    dueDate: { type: Date },
                },
            ],
            default: [], 
        },
        reserves: {
            type: [
                {
                    bookId: mongoose.Schema.Types.ObjectId, 
                    reservedDate: { type: Date },
                },
            ],
            default: [], 
        }, 
        Orders: [
            {
                orderId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Order", 
                    required: true,
                },
                orderDate:{
                    type:Date,
                    default:Date.now
                },
                status:{
                    type:String,
                    enum: ["Pending", "Approved", "Issued", "Returned", "Overdue"],
                    default: "Pending",
                }
            }
            
        ],
        fine: {
             type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
 