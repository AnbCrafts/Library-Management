import React, { useEffect, useState } from "react";
import axios from "axios";
import OverViewCard from "../Components/OverViewCard";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import SingleBookViewCard from "../Components/SingleBookViewCard";
import { assets } from "../../assets/assets";
import Navigator from "../../GlobalComponents/Navigator";
import IntroHead from "../../GlobalComponents/IntroHead";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const backendURI = "https://backend-v1bd.onrender.com";

  const navigate = useNavigate();
  const location = useLocation();
  const{adminId} = useParams();

  const fetchBookList = async () => {
    try {
      const response = await axios.get(`${backendURI}/api/books/get-list`);
      if (response.data.success) {
        setBooks(response.data.data);
        console.log(response.data.data);
      } else {
        alert("Failed to fetch book list");
      }
    } catch (error) {
      console.error("Error fetching book list:", error);
    }
  };

  useEffect(() => {
    fetchBookList();
  }, []);

  const searchParams = new URLSearchParams(location.search);
  const bookId = searchParams.get("id");

  const singleBook = books.find((book) => book._id === bookId);

  const deleteBookByID = async()=>{
    try {
      const searchParams = new URLSearchParams(location.search);
      const bookId = searchParams.get("id");
      if(!bookId){
        console.log("Id not found");
        return;

      }
      else{
        const response = await axios.delete(`${backendURI}/api/books/delete/${bookId}`);
  
      if (response.data.success) {
        console.log("Book deleted successfully");
        navigate(`/admin/${adminId}/book-list`);
        
        if (typeof fetchBookList === "function") {
          await fetchBookList();
        }
      } else {
        console.log("Book deletion failed");
      }
      }
      
    } catch (error) {
     console.log(error) 
    }

  }

  return (
    <div className="min-h-[50vh] w-full bg-[#fff] relative">
      <IntroHead text={'Manage Books'}/>
       
      <Navigator icon={assets.admin} position={'left-4'} address={`/admin/${adminId}`}/>

      {bookId && singleBook ? (
        <SingleBookViewCard
          book={singleBook} 
          delBook={deleteBookByID}
        />
      ) : (
        <div className="h-auto w-[90%] mx-auto flex flex-wrap items-center justify-start py-5 gap-5">
          {books.length > 0 ? (
            books.map((item) => (
              <OverViewCard
                key={item._id}
                clickHandler={() => navigate(`/admin/${adminId}/book-list?id=${item._id}`)}
                location={item.location}
                img={item.coverImg} 
                status={item.status}
                aName={item.author}
                bName={item.title}
                house={item.publisher} 
              />
            )) 
          ) : (
            <p className="text-gray-500">No books available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BookList;
