import React, { useContext, useEffect, useId, useState } from "react";
import { AuthContext } from "../../ContextAPI/AuthContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";

const OrderHistory = () => {
  const backendURI = "http://localhost:7000";
  const { userId } = useParams();
  const [allOrders, setAllOrders] = useState([]);

  const { loggedInUserData, singleBookDetails, setOrderDetails } =
    useContext(AuthContext);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `${backendURI}/api/orders/list/user/${userId}`
      );
      if (response.data.success) {
        console.log(
          "response while fetching order list for user  - ",
          userId,
          " response is - ",
          response
        );
        const orderArr = response.data.data;
        console.log("Order Arr - ", orderArr);
        if (orderArr.length === 0) {
          console.log("Empty orderArr");
        }
        setAllOrders(orderArr);
      } else {
        console.log("Cannot fetch order list for this user");
      }
    } catch (error) {
      console.log(
        "Error while fetching order list for user - ",
        userId,
        " Error was - ",
        error
      );
    }
  };

  useEffect(() => {
    fetchOrders();
    console.log("Fetched Orders - ", allOrders);
    console.log("Fetched Orders random index - ", allOrders[23]);
  }, [userId]);

  return (
    
    <div className="h-auto w-full flex flex-wrap items-center justify-between gap-5">
      {allOrders.map((order) => (
        order.items.map((book, index) => {
          // Ensure book exists and has at least some required fields
          if (!book) return null;

          const title = book.title || "Unknown Title";
          const author = book.author || "Unknown Author";
          const price = book.price ? `₹ ${book.price}` : "Price Unavailable";
          const imgSrc = book.img || "https://via.placeholder.com/120"; // Placeholder for missing images

          return (
        
            <div
              key={`${order._id}-${index}`}
              className="h-[200px] w-[320px] rounded-md flex flex-wrap items-center justify-start shadow-lg px-2 py-2 gap-5 my-3"
            >
                
              {/* Book Image */}
              <div className="h-[100px] w-[100px] rounded-full bg-[coral]">
                <img  
                  src={imgSrc}
                  className="h-full w-full object-cover rounded-full"
                  alt={title}
                />
              </div>

              {/* Book Details */}
              <div className="flex-1">
                <h2 className="whitespace-nowrap text-ellipsis text-[#555] font-semibold text-lg">
                  {title}
                </h2>
                <h2 className="whitespace-nowrap text-ellipsis text-[#555] font-semibold text-md">
                  {author}
                </h2>
              </div>

              {/* Pricing & Quantity */}
              <div>
                <h2 className="whitespace-nowrap text-ellipsis text-[#555] font-semibold text-sm">
                  {price}
                </h2>
                <h2>Qty: 1</h2>
              </div>
            </div>
          );
        })
      ))}
    </div>
  );
};

export default OrderHistory;
