import React, { useEffect } from "react";
import Navbar from "../../GlobalComponents/Navbar";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const About = () => {



  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling..."); // Debugging
      document.querySelectorAll(".fade-in").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add("show");
        } else {
          el.classList.remove("show");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  
  
  return (
    <div> 
      <Navbar/>
    <div className=" w-full min-h-[100vh] bg-[#f4f1ed] text-[#333] p-5">
      <div className=" max-w-[1200px] mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#c17130] my-5">
          About Our Library
        </h1>
        <p className="text-lg text-center mb-5">
          Welcome to our Library Management System, a place where readers and
          knowledge meet.
        </p>

        <div className=" grid md:grid-cols-2 gap-8">
          {/* Mission and Vision */}
          
          <div className=" bg-white shadow-lg rounded-lg p-5">
            
            <div className="border py-3 px-3">
              <div className="flex items-center justify-start gap-5">
                <img src={assets.mission} className=" h-[100px] w-[100px] rounded-full object-cover border-2 border-[coral]" alt="" />

            <h2 className="text-3xl text-[coral] font-semibold mb-4">Our Mission</h2>
              </div>
            <p className="mb-4  ">
              To provide an accessible platform for readers to explore a wide
              range of books, articles, and resources. Our mission is to foster
              a love for reading and learning in the community.
            </p>
            </div>

           
            <div>
    <div className="bg-[coral] py-3 px-3 mt-2">
      
      <div className=" flex items-center justify-start gap-5">
      <img src={assets.vision} className="h-[100px] w-[100px] rounded-full object-cover border-2 border-[#fff] bg-white" alt="" />

            <h2 className="text-3xl text-white font-semibold mb-4">Our Vision</h2>
      </div>
            <p className=" text-white">
              To create a world where everyone has access to knowledge and the
              resources to grow and thrive.
            </p>
    </div>
            
            </div>
          </div>

          {/* History and Features */}
          <div className=" flex flex-col gap-10 bg-white shadow-lg rounded-lg p-5">
          <div className="border border-[coral] py-3 px-3">
          <div className=" flex items-center justify-start gap-5">
          <img src={assets.story3} className="h-[100px] w-[100px] rounded-full object-cover border-2 border-[coral] bg-white" alt="" />
            <h2 className="text-3xl text-[coral] font-semibold mb-4">Our Story</h2>
          </div>
            <p>
              Founded in 2010, our library has grown from a small community
              project to a fully-fledged digital library management system. Our
              journey has been fueled by our love for books and the dedication
              of our team to make knowledge accessible.
            </p>
          </div>

          <div>
            <h2 className="text-[coral] text-lg font-semibold">Want to become a part of our journey ?</h2>
            <p>Join Us and stay connected with us!!</p>
            
          <Link to={'/user/membership'} className="px-8 py-2 border border-[coral] rounded inline-block mt-4 text-center bg-[#f2450682] text-white text-lg cursor-pointer hover:bg-[#d33c05]">Be a member</Link>

          </div>
          </div>

        </div>

        {/* Stats */}
        <div className="fade-in mt-10 bg-white shadow-lg rounded-lg p-5 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
          <div className=" flex justify-around">
            <div>
              <h3 className="text-3xl font-bold text-[#c17130]">1M+</h3>
              <p>Books Issued</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#c17130]">500K+</h3>
              <p>Users</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#c17130]">10K+</h3>
              <p>Digital Resources</p>
            </div>
          </div>
          <div className=" flex-1 flex items-center justify-around  flex-wrap ">
                    <img src={assets.achievement1} className="h-[150px] w-[150px] bg-white rounded-md" alt="" />
                    <img src={assets.achievement2} className="h-[150px] w-[180px] bg-white rounded-md" alt="" />
                    <img src={assets.achievement3} className="h-[150px] w-[150px] bg-white rounded-md" alt="" />
          
          
                  </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
