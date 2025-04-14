import { Button } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../ContextAPI/AuthContext";

const DisplaySingleBook = ({ book }) => {
  const { userId } = useParams();
  const [searchParams] = useSearchParams();
  const bookId = searchParams.get("id");
  const navigate = useNavigate();
  const backendURI = "http://localhost:7000";

  const { loggedInUserData, singleBookDetails, setOrderDetails, orderDetails } = useContext(AuthContext);
  const [address, setAddress] = useState(loggedInUserData?.address || "");
  const [bookDetails, setBookDetails] = useState(null);
  const [buyerDetails, setBuyerDetails] = useState(null);

  useEffect(() => {
    if (singleBookDetails) {
      setBookDetails({
        bookId,
        title: singleBookDetails.title,
        author: singleBookDetails.author,
        price: singleBookDetails.price,
        img: singleBookDetails.coverImg,
      });
    }
  }, [singleBookDetails, bookId]);

  useEffect(() => {
    if (bookDetails) {
      setBuyerDetails({
        userId,
        items: [bookDetails],
        amount: bookDetails.price,
        orderType: "Purchase",
        address,
      });
    }
  }, [bookDetails, userId, address]);

  const purchaseBook = async () => {
    if (!buyerDetails) {
      alert("Order details are not ready yet. Please try again.");
      return;
    }

    try {
      const response = await axios.post(`${backendURI}/api/orders/place`, buyerDetails);
      console.log("Full Response:", response);

      if (response.data?.success) {
        console.log("Response Data -> ", response.data);
        const placedOrder = response.data.order;
        setOrderDetails(placedOrder);
        navigate(`/user/${userId}/book/${bookId}/cart`);
      } else {
        alert("Order placement failed.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  

  if (!book) {
    return <div>Loading book details...</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-[90%] min-h-[100vh] mx-auto">
      <img
        src={book.coverImg}
        alt={book.title}
        className="w-full h-[500px] object-cover rounded"
      />
      <div className="flex items-start gap-4 justify-between w-full h-auto py-3">
        <div className="p-2 flex-1 rounded">
          <p className="text-lg text-white bg-green-400 w-fit py-1 px-4 rounded-md mt-3 font-semibold">
            {book.status}
          </p>
          <h1 className="text-3xl font-bold text-[#c17130] mt-5">{book.title}</h1>
          <p className="text-lg text-[#555] mt-3 font-semibold">
            Price: {book.price} $
          </p>
          <p className="text-lg text-[#888] mt-1">Language: {book.language}</p>
          <p className="text-lg text-[#888] mt-1">Genre: {book.category}</p>
          <p className="text-md text-[#555] mt-5">
            <span className="text-2xl font-semibold text-[#555]">"{book.title}"</span> is an
            exceptional work authored by{" "}
            <span className="text-lg font-semibold text-[#555]">{book.author}</span>. This captivating
            book offers a deep and engaging exploration of its subject matter.
          </p>
        </div>
        <div className="min-h-[230px] w-[250px] shadow-md">
          <div className="h-[200px] w-full p-3">
            <img
              src={book.authorImg}
              className="h-full rounded w-full object-cover"
              alt={book.author}
            />
          </div>
          <div className="p-3">
            <span className="font-semibold text-[#c17130] text-lg">{book.author}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start gap-5 my-5">
        <button
          onClick={purchaseBook}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300 ease-in-out"
        >
          Buy
        </button>
        <button className="px-6 py-3 bg-white text-green-500 border-2 border-green-500 font-semibold rounded-md shadow-md hover:bg-green-500 hover:text-white hover:shadow-lg transition duration-300 ease-in-out">
          Rent
        </button>
        {(book.status === "Unavailable" || book.status === "Out of Stock") && (
          <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 hover:shadow-lg transition duration-300 ease-in-out">
            Request Book
          </button>
        )}
      </div>

      <div className="h-auto w-full pb-5 pt-10">
        <h2 className="text-[#555555dc] text-lg">Discover more for same Genre/Author</h2>
        <div className="h-auto w-full flex items-center justify-start gap-5 flex-wrap"></div>
      </div>
    </div>
  );
};

export default DisplaySingleBook;
