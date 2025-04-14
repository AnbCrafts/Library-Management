import User from "../Models/User.js";
import Admin from "../Models/Admin.js";
import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { uploadOnCloudinary } from "../Config/Cloudinary.config.js";
import mongoose from "mongoose";

 

const UserRegisterSchema = Joi.object({

    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    phone:Joi.string().required(),
    profilePic:Joi.string().required(),
    address:Joi.string().required(),
    profilePic:Joi.string().required()
   
})

const UserLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});

const AdminRegisterSchema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    phone:Joi.string().required(),
    profilePic:Joi.string(),
    role:Joi.string().required(),
    status: Joi.string()
    .valid("active", "inactive")
    .default("active"),  
    permissions: Joi.array()
    .items(Joi.string())  
    .required()

})

const AdminLoginSchema = Joi.object({
    email:Joi.string().email().required(),
    password: Joi.string().min(8).required(),
}) 

const registerNewUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, address } = req.body;
        const profilePicLocalPath = req.files?.profilePic?.[0]?.path;

        if (!profilePicLocalPath) {
            return res.json({ success: false, message: "Profile picture not found" });
        }

        const { error } = UserRegisterSchema.validate({
            firstName,
            lastName,
            email,
            password,
            phone,
            address,
            profilePic: profilePicLocalPath,
        });

        if (error) {
            console.log("Error -> ", error.details[0].message)

            return res.json({ success: false, msg: error.message });
        }

        const profilePic = await uploadOnCloudinary(profilePicLocalPath);
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            password: hashedPassword,
            email,
            profilePic: profilePic.url,
            phone,
            address,
        });

        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, 'your-secret-key', { expiresIn: '2h' });

        return res.json({
            success: true,
            message: "User registered successfully",
            data: newUser,
            token,
        });
    } catch (error) {
        console.log("Error registering user:", error);
        return res.json({ success: false, msg: "Something went wrong while registering the user" });
    }
};


const loginRegisteredUser = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const {error} = UserLoginSchema.validate({email,password});
        if(error){
            console.log("Error -> ", error.details[0].message)
            return res.json({success:false, message:"Invalid credentials, try again"})

        }
        const existingAdmin = await User.findOne({email});

        if(!existingAdmin){
            return res.json({success:false, message:"This email does not exist , please register first"})

        }
        const isValidPass = await bcrypt.compare(password,existingAdmin.password);
        if(!isValidPass){
            return res.json({success:false, message:"Enter a valid password"});
        }
        const token = jwt.sign({ userId: existingAdmin._id , email:existingAdmin.email}, 'your-secret-key', { expiresIn: '2h' });

        return res.json({
            success:true,
            message:"User logged in successfully",
            token,
            existingAdmin:{
            id: existingAdmin._id,
            firstName: existingAdmin.firstName,
            lastName: existingAdmin.lastName,
            email: existingAdmin.email,
            status: existingAdmin.status,
            memberShipStartDate:existingAdmin.memberShipStartDate,
            memberShipExpiryDate:existingAdmin.memberShipExpiryDate,
            borrowings:existingAdmin.borrowings,
            reserves:existingAdmin.reserves,
            fine:existingAdmin.fine,
            phone:existingAdmin.phone,
            profilePic:existingAdmin.profilePic
            }
        })


        
    } catch (error) {
        console.log(error);
        return res.json({success:true, message:"Error while logging in the user"});
        
    }
}

const registerNewAdmin = async (req, res) => {
    try {
        const { email, password, firstName, lastName, status, phone, profilePic, role, permissions } = req.body;

        const profilePicLocalPath = req.files?.profilePic?.[0]?.path;

        if (!profilePicLocalPath) {
            return res.json({ success: false, message: "Profile picture not found" });
        }

        const { error } = AdminRegisterSchema.validate({
            email, password, firstName, lastName, status, phone, profilePic, role, permissions
        });

        if (error) {
            console.log("Error -> ", error.details[0].message);
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const pic = await uploadOnCloudinary(profilePicLocalPath);
        console.log(pic.url)
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = new Admin({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            status,
            phone,
            profilePic: pic.url,
            role,
            permissions
        });

        await newAdmin.save();

        if (!newAdmin) {
            return res.json({ success: false, message: "Something wrong occurred while creating new Admin" });
        }

        const token = jwt.sign({ userId: newAdmin._id }, 'your-secret-key', { expiresIn: '2h' });

        return res.json({
            success: true,
            message: "Admin registered successfully",
            data: newAdmin,
            token,
        });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Something wrong occurred while registering Admin" });
    }
};
 

const loginRegisteredAdmin = async(req,res)=>{
        try {

            const {
                email,
                password} = req.body;
        const {error} = AdminLoginSchema.validate({email,password});
        if(error){
            console.log("Error -> ", error.details[0].message)
            return res.json({success:false, message:"Invalid credentials, try again"})

        }
        const existingAdmin = await Admin.findOne({email});

        if(!existingAdmin){
            return res.json({success:false, message:"This email does not exist , please register first"})

        }
        const isValidPass = await bcrypt.compare(password,existingAdmin.password);
        if(!isValidPass){
            return res.json({success:false, message:"Enter a valid password"});
        }
        const token = jwt.sign({ userId: existingAdmin._id , email:existingAdmin.email}, 'your-secret-key', { expiresIn: '2h' });

        return res.json({
            success:true,
            message:"Admin logged in successfully",
            data:existingAdmin,
            token,
        })
            
        } catch (error) {

            console.log(error);
            return res.json({success:false, message:"Something went wrong while logging in the admin"})
            
        }
}


const getAllUsers = async (req,res)=>{
    try {
        const users = await User.find();
        if(users){
        return res.json({success:true, message:"Got all users list", users});

        }
        else{
        return res.json({success:false, message:"Something went wrong while fetching users"});

        }
        
    } catch (error) {
        console.log(error);
        return res.json({success:false, message:"Something went wrong while fetching users"});
        
    }

}

const getAllAdmins =async (req,res)=>{
    try {
        const admins = await Admin.find();
        if(admins){
        return res.json({success:true, message:"Got all users list", admins});

        }
        else{
        return res.json({success:false, message:"Something went wrong while fetching admins"});

        }
        
    } catch (error) {
        console.log(error);
        return res.json({success:false, message:"Something went wrong while fetching admins"});
        
    }
}

const deleteUser = async(req,res)=>{
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid id",
        });
    }
 try {
    const user = await User.findById(id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User not found",
        });

    }
    else{
        await User.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    }

        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while deleting user by id",
        });
        
    }
}

const deleteAdmin = async (req,res)=>{
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid id",
        });
    }
    try {
        const admin = await Admin.findById(id);
        if(!admin){
            return res.status(404).json({
                success: false,
                message: "Admin not found",
            });

        }
        else{
            await Admin.findByIdAndDelete(id);
            return res.status(200).json({
                success: true,
                message: "Admin deleted successfully",
            });
        }
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while deleting admin by id",
        });
    }
}




export {registerNewUser, loginRegisteredUser, loginRegisteredAdmin,registerNewAdmin,getAllUsers,getAllAdmins,deleteAdmin,deleteUser};
 