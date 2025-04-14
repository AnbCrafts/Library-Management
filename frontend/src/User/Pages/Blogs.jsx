import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import Navbar from "../../GlobalComponents/Navbar";
import BlogCard from "../Components/BlogCard";
import DisplaySingleBlog from "../Components/DisplaySingleBlog";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const backendURI = "https://backend-v1bd.onrender.com";
  const navigate = useNavigate();
  const location = useLocation();

  
  const { userId } = useParams(); 

  

  
  const fetchblogs = async () => {
    try {
      const response = await axios.get(`${backendURI}/api/blogs/get-list`);
      if (response.data.success) {
        setBlogs(response.data.data);
      } else {
        alert("Failed to fetch book list");
      }
    } catch (error) {
      console.error("Error fetching book list:", error);
    }
  };

  useEffect(() => {
    fetchblogs();
  }, []);

  const searchParams = new URLSearchParams(location.search);
  const blogId = searchParams.get("id");

  const singleBlog = blogs.find((blog) => blog._id === blogId);

  const handleSelectChange = (value) => {
    setCurrentOption(value);
    console.log("Selected Option:", value);
  };

  const handleSearch = (value) => {
    console.log("Search Input:", value);
  };


  return (

    <div className="min-h-[100vh] w-full">
   <Navbar/>
   {blogId && singleBlog
   ?
   (
        <div className="w-[90%] mx-auto py-5">
   <DisplaySingleBlog blog={singleBlog} />
   
          </div>
   )
    :
     (<div className="w-[90%] mx-auto py-5 flex items-center flex-wrap justify-between">
      {blogs && blogs.map((item)=>{
        return(
          <BlogCard key={item._id}
          clickHandler={() => navigate(`/user/${userId}/blogs?id=${item._id}`)}
          coverImg={item.coverImg} title={item.title} content={item.content} date={item.date}  />

        )
      })}
     </div>)
}


<div className="fade-in max-w-[90%] mx-auto bg-[coral] text-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-bold mb-6">📝 Why Read Our Blogs? 📝</h2>
      <p className="text-lg mb-10 max-w-2xl mx-auto">
        Discover insightful articles, expert opinions, and the latest trends. Stay informed and 
        elevate your knowledge with our hand-picked blogs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "📖 In-Depth Educational Content",
          "📰 Latest Trends & Updates",
          "🧠 Expert Insights & Advice",
          "🎯 Practical Tips & Guides",
          "🌍 Diverse Topics & Perspectives",
          "🔔 Stay Updated with Notifications",
        ].map((benefit, index) => (
          <div
            key={index}
            className= "fade-in bg-white text-[coral] rounded-lg shadow-lg p-5 text-lg font-semibold hover:bg-[#f85215] hover:text-white transition-all duration-500"
          >
            {benefit}
          </div>
        ))}
      </div>

    </div>
    </div>

    

  )
}

export default Blogs;
