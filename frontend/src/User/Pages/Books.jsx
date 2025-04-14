import React, { useContext, useEffect, useState } from "react";
import { Input, Select } from "antd";
import axios from "axios";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import Navigator from "../../GlobalComponents/Navigator";
import Navbar from "../../GlobalComponents/Navbar";
import BookCard from "../Components/BookCard";
import DisplaySingleBook from "../Components/DisplaySingleBook";
import { AuthContext } from "../../ContextAPI/AuthContext";

const Books = () => {
  const [books, setBooks] = useState([]);
  const backendURI = "https://backend-v1bd.onrender.com";
  const navigate = useNavigate();
  const location = useLocation();
  const{userId} = useParams();

  const {singleBookDetails, setSingleBookDetails} = useContext(AuthContext)


  const { Search } = Input; 
  const { Option } = Select;

  const [category, setCategory] = useState([]);
  const [currentOption, setCurrentOption] = useState("All");


  const [selectedItems , setSelectedItems] = useState([]);
  const [warn,setWarn] = useState(false);
  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${backendURI}/api/books/get-list`);
      if (response.data.success) {
        const categArr = [];
        response.data.data.forEach((data) => {
          if (Array.isArray(data.category)) {
            data.category.forEach((cat) => {
              if (!categArr.includes(cat)) {
                categArr.push(cat);
              }
            });
          } else if (!categArr.includes(data.category)) {
            categArr.push(data.category);
          }
        });
        setCategory(categArr); 
        setBooks(response.data.data); 
      } else {
        alert("Failed to fetch book list");
      }
    } catch (error) {
      console.error("Error fetching book list:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const searchParams = new URLSearchParams(location.search);
  const bookId = searchParams.get("id");

  const singleBook = books.find((book) => book._id === bookId);

  const handleSelectChange = (value) => {
    setCurrentOption(value);
    console.log("Selected Option:", value);
  };

  const handleSearch = (value) => {
    console.log("Search Input:", value);
  };

  useEffect(()=>{
    setTimeout(() => {
      setWarn(false)
    }, 5000);
  },[warn]);


  const AddToCart =()=>{
    if(selectedItems.length===0){
      console.log("Clicked")
      setWarn(true);
      return
    }else{
      setWarn(false);
    }
  }

  useEffect(()=>{
    const bookId = searchParams.get("id");
    const singleBook = books.find((book) => book._id === bookId);
    setSingleBookDetails(singleBook);
    
    console.log("Single Book details = ", singleBook)
  },[bookId,books])

  return (
    <div className="min-h-[100vh] w-full  relative">
      <Navbar />

      <div className="min-h-[50px] w-full flex items-center justify-center gap-5 bg-[#f4f1ed] p-5">
        <Search
          placeholder="Search books by title or author..."
          onSearch={handleSearch}
          allowClear
          style={{ width: "400px" }}
          enterButton
        />

        <Select
          defaultValue="All"
          style={{ width: 200 }}
          onChange={handleSelectChange}
          dropdownStyle={{ maxHeight: 200, overflow: "auto" }}
        >
          <Option value="All">All</Option>
          <Option value="English">English</Option>
          <Option value="Hindi">Hindi</Option>
          {category.map((genre, index) => (
            <Option key={index} value={genre}>
              {genre}
            </Option>
          ))}
        </Select>


        <div>
          <button onClick={AddToCart}   className="px-5 py-1 rounded-md bg-[#555] text-white text-lg font-semibold border cursor-pointer hover:bg-[coral] transition-all">🛒 Proceed to buy</button>
        </div>
      </div>
        <div className=" text-center text-white font-semibold text-lg bg-red-500">
        {
          warn && <p className="py-1"> ⚠️ You Need to select books first ⚠️</p>
          
        }
        </div>

      {bookId && singleBook ? (
        <div className="w-[90%] mx-auto py-5">
          <DisplaySingleBook book={singleBook} />
        </div>
      ) : (
        <div className="h-full w-[90%] mx-auto flex flex-wrap items-center justify-between py-5 gap-10">
          {books.length > 0 ? (
            books
              .filter((item) =>
                currentOption === "All"
                  ? true
                  : currentOption === item.language || item.category.includes(currentOption)
              )
              .map((item) => (
                <BookCard
                  key={item._id}
                  clickHandler={() => navigate(`/user/${userId}/books?id=${item._id}`)}
                  image={item.coverImg}
                  name={item.title}
                  status={item.status}
                  author={item.author}
                  language={item.language}
                  authorImg={item.authorImg}
                  description={item.description}
                  category={item.category}
                  available={item.availableCount}
                />
              ))
          ) : (
            <p className="text-gray-500">No books available.</p>
          )}
        </div>
      )}

<div className="fade-in mx-auto max-w-[90%] bg-[coral] text-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-bold mb-6">📚 What Makes Our Books Special? 📚</h2>
      <p className="text-lg mb-10 max-w-2xl mx-auto">
        Explore a curated collection of books that enrich knowledge, spark curiosity, and inspire minds.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "📖 Vast Collection of Genres",
          "📚 Authentic & Verified Content",
          "📙 Latest & Trending Titles",
          "📔 Easy Digital & Physical Access",
          "📘 Recommendations Based on Interests",
          "📕 Rare & Exclusive Editions",
        ].map((specialty, index) => (
          <div
            key={index}
            className="fade-in bg-white text-[coral] rounded-lg shadow-lg p-5 text-lg font-semibold hover:bg-[#f85215] hover:text-white transition-all duration-500"
          >
            {specialty}
          </div>
        ))}
      </div>


    </div>
    </div>
  );
};

export default Books;
