import mongoose from "mongoose";
 
const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, 
    items: 
      {
        type:[
          {
            bookId:String,
            title:String,
            author:String,
            price:String,
            img:String,

          }
        ],
        required: true, 
      }
    ,
    orderDate: {
      type: Date,
      default: Date.now, 
      required: true,
    },
    dueDate: {
      type: Date,
    },
    returnDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected", "Issued", "Returned", "Overdue"],
      default: "Pending",
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Paid", "Pending", "Not Required"],
      default: "Pending",
      required: true,
    },
    orderType: {
      type: String,
      enum: ["Purchase", "Borrow"],
      default: "Purchase",
      required: true,
    },
    amount: {
      type: Number,
      default: 0, 
    },
    address: {
      type: String,
      required: true,
    },
    fine: {
      type: Number,
      default: 0, 
    },
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin", 
    },
    deliveryMethod: {
      type: String,
      enum: ["Pick Up", "Home Delivery", "Online"],
    },
    comments: {
      type: String,
    }
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;
