import mongoose from "mongoose";
import MemberShip from "../Models/Membership.js";
import Joi from "joi";
import User from "../Models/User.js";

const validMembershipSchema = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": "Name is required.",
    }),
    email: Joi.string().email().required().messages({
        "string.email": "Please provide a valid email address.",
        "string.empty": "Email is required.",
    }), 
    password: Joi.string().min(6).required().messages({
        "string.min": "Password must be at least 6 characters long.",
        "string.empty": "Password is required.",
    }),
    preference: Joi.string()
        .valid("Basic", "Premium", "Elite")
        .default("Basic")
        .required()
        .messages({
            "any.only": "Preference must be one of Basic, Premium, or Elite.",
        }),
    address: Joi.string().required().messages({
        "string.empty": "Address is required.",
    }),
    phoneNumber: Joi.string().optional(),
    membershipType: Joi.string()
        .valid("Free", "Paid", "Trial")
        .default("Paid")
        .optional(),
        starting: Joi.date().default(() => new Date()),

ending: Joi.date()
    .default(() => new Date(new Date().setFullYear(new Date().getFullYear() + 1)))
    .greater(Joi.ref("starting"))
    .messages({
        "date.greater": "Ending date must be after the starting date.",
        "date.empty": "Ending date is required.",
    }),

        
    status: Joi.string()
        .valid("Active", "Expired")
        .default("Active")
        .messages({
            "any.only": "Status must be either Active or Expired.",
        }),
    booksBorrowed: Joi.number().integer().min(0).default(0).messages({
        "number.min": "Books borrowed cannot be negative.",
    }),
    maxBooksAllowed: Joi.number()
        .default(3)
        .when("preference", {
            is: "Premium",
             then: Joi.number().default(5),
            otherwise: Joi.when("preference", {
                is: "Elite",
                then: Joi.number().default(10),
                otherwise: Joi.number().default(3),
            }),
        }),
    paymentStatus: Joi.string()
        .valid("Paid", "Pending", "Failed")
        .default("Pending")
        .optional(),
    profilePicture: Joi.string().optional(),
    membershipFee: Joi.number().optional(),
    updatedBy: Joi.string().optional(),
    createdBy: Joi.string().optional(),
    renewalDate: Joi.date().optional(),
});

const AddMember = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            preference,
            address,
            phoneNumber,
            membershipType,
        } = req.body;

        const subscribingUser = await User.findOne({ email });
        if (!subscribingUser) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        const { value, error } = validMembershipSchema.validate({
            name,
            email,
            password,
            preference,
            address, 
            phoneNumber,
            membershipType, 
            starting: new Date(),
            ending: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), 
            profilePicture: subscribingUser.profilePic,
        });
        value.userId = subscribingUser._id;


        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message,
            });
        }

        
        const newMember = new MemberShip(value);
        await newMember.save();

        return res.status(201).json({
            success: true,
            message: "Membership added successfully!",
            data: value,
            memID: newMember.membershipID
        });
    } catch (error) {
        console.error("Error adding membership:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while adding membership.",
        });
    }


};


const verifyMembership = async(req,res)=>{
    
}
const deleteMembershipByUserID = async (req, res) => {
    let { id } = req.params;

    if (!id) {
        return res.status(400).json({ success: false, message: "Membership ID is required." });
    }

    id = id.trim();
    try {
        const deletedUserMembership = await MemberShip.findOneAndDelete({ _id: id });
        if (!deletedUserMembership) {
            return res.status(404).json({ success: false, message: "No memberships found for this ID to delete." });
        }
        return res.status(200).json({ success: true, message: "Membership deleted successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error.", error });
    }
};

const getAllMemberships = async (req, res) => {
    try {
        const memberships = await MemberShip.find({}, "name email memID preference address phoneNumber membershipType starting ending profilePicture status booksBorrowed maxBooksAllowed paymentStatus userId");

        if (memberships.length > 0) {
            
            return res.json({
                success: true,
                message: "Got the membership DB",
                memberships,  
            });


            
        } else {
            return res.json({ success: false, message: "Failed to get the membership DB" });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching membership DB",
            error,
        });
    }
};

const getAllMembershipsByUSerID = async(req,res)=>{
    const { id } = req.params;
    try {
        const userMembership = await MemberShip.find({id});
        if(!userMembership.length){
            return res.status(404).json({ success: false, message: "No memberships found for this user." });
        }
        return res.status(200).json({ success: true, userMembership });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error.", error });
    }
} 


export { AddMember,getAllMemberships,getAllMembershipsByUSerID,deleteMembershipByUserID };
