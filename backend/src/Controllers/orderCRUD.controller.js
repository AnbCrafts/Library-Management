import Book from "../Models/Book.js";
import Order from "../Models/Order.js";
import User from "../Models/User.js";
import mongoose from "mongoose";

const PlaceOrder = async (req, res) => {
    try {
        const { userId, items, amount, address, orderType } = req.body;

        if (!userId || !items?.length || !amount || !address || !orderType) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "You are not a valid user" });
        }
        console.log("Received items:", items);

        const formattedItems = items.map(item => ({
            bookId: String(item.bookId),  
            title: item.title,
            author: item.author,
            price: item.price,
            img: item.img
        }));

        console.log("Formatted items:", formattedItems);

        const newOrder = new Order({
            userId,
            items: formattedItems, 
            amount,
            address,
            orderType, 
            status: "Pending",
            paymentStatus: "Pending",
            orderDate: new Date(),
        });

        const order = await newOrder.save();

        user.Orders.push({
            orderId: order._id,
            orderDate: order.orderDate,
            status: order.status
        });

        await user.save();
        console.log("Received items:", items);
        res.status(201).json({ success: true, message: "Order placed successfully", order });
    } catch (error) {
        console.error("Error occurred while placing order:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
 

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;

    try {
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found!" });
        }

        if (success === "true") {
            order.status = "Approved";
            order.paymentStatus = "Paid";
            await order.save();

            return res.json({ success: true, message: "Order verification successful!" });
        } else {
            await Order.findByIdAndDelete(orderId);
            return res.json({ success: false, message: "Order verification failed. Order rejected!" });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error occurred while verifying order." });
    }
};


const UpdateOrder = async (req, res) => {
    try {
        const { orderId, fine, status, comments, adminId, deliveryMethod, returnDate, dueDate } = req.body;

        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found!" });
        }

        order.status = status;
        order.fine = fine;
        order.comments = comments;
        order.adminId = adminId;
        order.deliveryMethod = deliveryMethod;
        order.returnDate = returnDate;
        order.dueDate = dueDate;

        await order.save();

        res.json({ success: true, message: "Order updated successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error occurred while updating order.",error });
    }
};


const findOrderByUserId = async (req, res) => {
    try {
        let userId = req.params.id.trim(); 

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ success: false, message: "Invalid user ID format." });
        }

        const orders = await Order.find({ userId });

        if (orders.length === 0) {
            return res.status(404).json({ success: false, message: "No orders found for this user." });
        }

        res.json({ success: true, data: orders });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ success: false, message: "Error occurred while fetching orders." });
    }
};


const getOrdersList = async (req,res)=>{
    try {
        const orders = await Order.find({});
        if(!orders.length){
            return res.json({ success: false, message: "No orders found" });
        }
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error occurred while fetching orderList"})
    }
}


const removeOrder = async (req,res)=>{
    try {
        const { orderId } = req.body;
        const deletedOrder = await Order.findByIdAndDelete(orderId);

        if (!deletedOrder) {
            return res.json({ success: false, message: "Order not found." });
        }

        res.json({ success: true, message: "Order removed successfully." });
        

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error occurred while removing order"})
    }
}


const getOrderInfo = async (req,res)=>{
    try {
        
        
    } catch (error) {
        
    }

}


export {removeOrder,getOrdersList,verifyOrder,PlaceOrder,findOrderByUserId,UpdateOrder}