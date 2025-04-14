import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogOverViewCard from '../Components/BlogOverViewcard';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import SingleBlog from '../Components/SingleBlog';
import Navigator from '../../GlobalComponents/Navigator';
import { assets } from '../../assets/assets';
import IntroHead from '../../GlobalComponents/IntroHead';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const backendURI = "https://backend-v1bd.onrender.com";
  const navigate = useNavigate();
  const location = useLocation();
  const {adminId} = useParams();

  const fetchBlogList = async () => {
    try {
      const response = await axios.get(`${backendURI}/api/blogs/get-list`);
      if (response.data.success) {
        setBlogs(response.data.data);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    fetchBlogList();
  }, []);

  const searchParams = new URLSearchParams(location.search);
  const blogId = searchParams.get("id");
  const singleBlog = blogs.find((book) => book._id === blogId);

  const deleteBlog = async () => {
    try {
        const searchParams = new URLSearchParams(location.search);
        const blogId = searchParams.get("id");

        if (!blogId) {
            console.error("Blog ID not found in URL parameters.");
            return;
        }

        const response = await axios.delete(`${backendURI}/api/blogs/delete/${blogId}`);

        if (response.data.success) {
            console.log("Blog deleted successfully");
            navigate(`/admin/${adminId}/blog-list`)
            await fetchBlogList();

        } else {
            console.error("Failed to delete blog:", response.data.message);
        }
    } catch (error) {
        console.error("Error deleting blog:", error.message);
    }
};


  return ( 
    <div className="min-h-[50vh] w-full bg-white relative">
      <IntroHead text={'Manage Blogs'}/>
  
      <Navigator icon={assets.navigator} position={'left-4'} address={'/admin/:adminId'}/>

      {blogId ? (
        <SingleBlog blog={singleBlog} delCard={deleteBlog} />
      ) : (
        <div className="h-full w-[90%] mx-auto flex py-5 items-center justify-start gap-2">
          {blogs &&
            blogs.map((item) => (
              <BlogOverViewCard
                key={item._id}
                title={item.title}
                img={item.coverImg}
                category={item.category}
                clickHandler={() => navigate(`/admin/:adminId/blog-list?id=${item._id}`)}
                
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
