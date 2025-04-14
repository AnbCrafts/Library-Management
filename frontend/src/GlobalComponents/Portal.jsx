import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { assets } from "../assets/assets";
import BannerGallery from "../UI_Components/BannerGallery";
import Logo from "./Logo";

const Portal = () => {
  const [hideLogin, setHideLogin] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
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
    <div className=" relative">
      <Logo/>

      {hideLogin ? (
        <div>
          <div className=" w-full max-w-[100vw] h-[80vh] absolute flex items-center justify-between px-5 ">
            <div className=" w-[400px] h-[50vh] bg-[#0000009a] text-white  rounded-sm p-2 ">
              <h1 className="text-[coral] text-3xl p-2 text-center mb-3 font-semibold">"Explore Endless Possibilities!</h1>
              <p className="p-2 text-center text-lg text-[#939292]">Dive into a world of knowledge, curiosity, and discovery with our carefully curated library. Your journey to wisdom begins here!"</p>
              <Link to="/user/:userId"
              className="px-12 py-3 block w-fit rounded-sm mt-4 text-white bg-[#ff7f508f] text-lg font-medium hover:bg-[#f85215] hover:text-white transition">
              Let's get started
            </Link>
            </div>
              <BannerGallery/>

             
          </div>

        <div className=" w-full flex flex-col items-center justify-between min-h-[100vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.bg})` }}>

          <div className=" w-[90%] mx-auto flex flex-col items-center justify-center text-center py-20">
            {/* <p className="text-3xl mb-5 text-white">Your gateway to a world of knowledge and resources</p> */}
          </div>

          

          <div className=" flex items-center justify-center gap-10 py-5">
            <span onClick={() => setHideLogin(false)}
              className="px-12 cursor-pointer py-3 bg-white text-[coral] text-lg font-medium  hover:bg-[coral] hover:text-white transition">
              Sign In
            </span>
            <Link to="/user/:userId"
              className="px-12 py-3 text-white bg-[coral] text-lg font-medium hover:bg-[#f85215] hover:text-white transition">
              Continue Without Signing In
            </Link>
          </div>
        </div>
        </div>


      ) : (
        <div className=" min-h-[100vh] w-full flex items-center justify-center gap-10 p-10 bg-cover bg-fixed bg-center relative"
  style={{
    background: `linear-gradient(to right, gray, transparent), url(${assets.bg})`,
    backgroundBlendMode: "overlay",
  }}
>
  {/* Close Button */}
  <button
    onClick={() => setHideLogin(true)}
    className="absolute z-10 left-5 top-5 bg-[#fff] rounded-full text-[coral] text-lg font-medium hover:bg-[coral] hover:text-white transition"
  >
    <img src={assets.home} className="h-[40px] w-[40px]" alt="menu" />
  </button>

  {/* User Login Card */}
  <div className=" relative group w-[500px] h-[80vh] overflow-hidden">
    <Card
      hoverable
      className="w-[500px] h-[80vh] relative overflow-hidden"
      cover={
        <img
          className="object-cover rounded h-[80vh] w-[500px]"
          src={assets.students}
          alt="student"
        />
      }
    />
    <div className=" absolute rounded inset-0 bg-gradient-to-t from-[#f4865766] to-transparent text-[#f48657] flex items-start pt-10 justify-center -bottom-[100vh] group-hover:bottom-0 transition-all duration-700">
      <div className=" text-center">
        <h2 className="text-4xl text-white font-bold">I am a Student</h2>
        <p className="text-l text-white font-semibold p-2 mt-2">
          Empower your learning journey with personalized resources,
          interactive tools, and a collaborative environment. Explore
          courses, track progress, and achieve your academic goals with
          ease.
        </p>
        <div className=" flex items-center gap-10 flex-wrap justify-center w-full h-auto p-4">
          <Link
            to={"/user/enroll"}
            className="bg-[#C17130] text-white border-none px-16 py-3 rounded-lg font-semibold text-l cursor-pointer hover:bg-white hover:text-[#C17130]"
          >
            Sign Up
          </Link>
          <Link
            to={"/user/login"}
            className="bg-[#C17130] text-white border-none px-16 py-3 rounded-lg font-semibold text-l cursor-pointer hover:bg-white hover:text-[#C17130]"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Admin Login Card */}
  <div className=" relative group w-[500px] h-[80vh]">
    <Card
      hoverable
      className="w-[500px] h-[80vh] relative overflow-hidden"
      cover={
        <img
          className="object-cover rounded h-[80vh] w-[500px]"
          src={assets.admin}
          alt="admin"
        />
      }
    />
    <div className=" absolute inset-0 rounded bg-gradient-to-t from-[#f4865766] to-transparent text-[#f48657] flex items-start pt-10 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="fade-in text-center">
        <h2 className="text-4xl text-white font-bold">I am an Admin</h2>
        <p className="text-l text-white font-semibold p-2 mt-2">
          Streamline management with intuitive tools designed to oversee
          operations, monitor performance, and ensure seamless
          coordination. Take charge and lead with confidence.
        </p>
        <div className="fade-in flex items-center justify-center w-full h-auto p-4">
          <Link
            to={"/admin/login"}
            className="bg-[#C17130] text-white border-none px-16 py-3 rounded-lg font-semibold text-l cursor-pointer hover:bg-white hover:text-[#C17130]"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

      )}

      {/* Testimonials Section */}
      <div className="fade-in w-full py-20 bg-gray-100 text-center flex gap-5 items-center justify-between px-5">

        <div className="fade-in flex-1">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <p className="text-lg mt-4">Hear from our satisfied students and administrators.</p>
        
        <div className="fade-in flex justify-center gap-6 mt-10">
          <div className="fade-in bg-white p-6 rounded shadow-lg hover:shadow-[#ff7f506d] max-w-sm">
            <div className="fade-in mx-auto h-[100px] w-[100px] rounded-full border border-[coral] transition-all duration-300 mb-2 p-1">
              <img src={assets.user} className="h-full w-full rounded-full " alt="" />

            </div>
            <p>"An amazing resource! Helped me find all the books I needed."</p>
            <span className="block font-semibold mt-2">- User A</span>
          </div>

          <div className="fade-in bg-white p-6 rounded shadow-lg bg-white hover:shadow-[#ff7f506d] transition-all duration-300 max-w-sm">
          <div className="fade-in mx-auto h-[100px] w-[100px] rounded-full border border-[coral] mb-2 p-1">
              <img src={assets.adminImg} className="h-full w-full rounded-full " alt="" />

            </div>
            <p>"Managing the library has never been easier!"</p>
            <span className="block font-semibold mt-2">- Admin B</span>
          </div>
        </div>
        </div>
        <div className="fade-in w-[600px] shadow-lg h-[350px] relative rounded-lg">
          <img src={assets.client} className="w-[600px] h-full object-cover rounded-lg" alt="" />
        <div className="fade-in absolute flex flex-col items-center justify-center w-[600px] h-full bg-[#00000064] rounded-lg top-0 left-0 ">
          <p className="text-[#fff] text-lg text-center py-3 px-3">📖 "This library is more than just books—it's a gateway to knowledge, inspiration, and endless possibilities. A must-have resource for every reader!"</p>
          <button className="px-5 py-2 bg-[coral] text-white hover:bg-white hover:text-[coral] transition-all duration-500 font-semibold  rounded-md shadow-lg shadow-[#ffffff51]  ">View more Feedbacks</button>

        </div>
        </div>


      </div>

      {/* Statistics Section */}
      <div className="fade-in w-full py-20 bg-[coral] text-white text-center">
        
        <h2 className="text-3xl font-bold">Our Achievements</h2>
        <div className="fade-in flex items-center flex-col justify-between px-5 gap-5">
        <div className="fade-in flex justify-center gap-16 mt-10">
          <div>
            <h3 className="text-4xl font-bold">5000+</h3>
            <p>Enrolled Students</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">10000+</h3>
            <p>Books Available</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p>Unique Features</p>
          </div>
        </div>
        <div className="fade-in flex-1 flex items-center justify-center gap-16 flex-wrap ">
          <img src={assets.achievement1} className="h-[150px] w-[150px] bg-white rounded-md" alt="" />
          <img src={assets.achievement2} className="h-[150px] w-[150px] bg-white rounded-md" alt="" />
          <img src={assets.achievement3} className="h-[150px] w-[150px] bg-white rounded-md" alt="" />


        </div>
        </div>

      </div>

      {/* User Reviews & Ratings Section */}
      <div className="fade-in w-full py-20 bg-gray-200 text-center">
        
        <div className="fade-in flex items-center justify-center gap-16">
        <h2 className="text-3xl font-bold">User Reviews & Ratings</h2>
          <img src={assets.review} className="h-[100px] object-cover w-[100px] rounded-full" alt="" />
          <img src={assets.review2} className="h-[100px] object-cover w-[100px] rounded-full" alt="" />

        </div>
        
        <div className="fade-in flex justify-center gap-6 mt-10">
          <div className="fade-in bg-white p-6 rounded shadow-lg max-w-sm">
          <div className="fade-in mx-auto h-[100px] w-[100px] rounded-full border border-[coral] transition-all duration-300 mb-2 p-1">
              <img src={assets.user} className="h-full w-full rounded-full " alt="" />

            </div>

            <p>⭐⭐⭐⭐⭐ - "Best library platform I've used!"</p>
            <span className="block font-semibold mt-2">- User C</span>
          </div>
          <div className="fade-in bg-white p-6 rounded shadow-lg max-w-sm">
          <div className="fade-in mx-auto h-[100px] w-[100px] rounded-full border border-[coral] transition-all duration-300 mb-2 p-1">
              <img src={assets.adminImg} className="h-full w-full rounded-full " alt="" />

            </div>
            <p>⭐⭐⭐⭐ - "Great collection of books and easy access."</p>
            <span className="block font-semibold mt-2">- User D</span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="fade-in w-full py-20 bg-white text-center">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
       
        <div className="fade-in flex items-center justify-between px-5 gap-5">
        <div className="fade-in mt-10 flex-1 text-left max-w-3xl mx-auto">
          <details className="border-b p-4 bg-[#f4f1ed] text-[#333]">
            <summary className="cursor-pointer text-lg font-semibold">How do I sign up?</summary>
            <p className="mt-2 bg-[#333] text-[#fff] px-2 font-semibold">Click on 'Sign In' and choose 'Sign Up' to create an account.</p>
          </details>
          <details className="border-b p-4 bg-[#f4f1ed] text-[#333] mt-2">
            <summary className="cursor-pointer text-lg font-semibold">Can I access books without signing in?</summary>
            <p className="mt-2 bg-[#333] text-[#fff] px-2 font-semibold">Yes, you can browse books by selecting 'Continue Without Signing In.'</p>
          </details>
        </div>
        <div className="fade-in flex flex-wrap gap-5 items-center max-w-[500px]">
          <img src={assets.faq}  className="h-[150px] w-[150px] flex-1 border shadow-md  rounded-full animate-bounce animation " alt="" />
          <img src={assets.faq2} className="h-[150px] w-[150px] flex-1 border shadow-md  rounded-full animate-bounce animation_2 "  alt="" />
          <img src={assets.faq3} className="h-[150px] w-[150px] flex-1 border shadow-md  rounded-full animate-bounce animation_3 "  alt="" />

        </div>
        </div>


      </div>


      <div className="fade-in mx-auto max-w-[90%] mb-5 bg-[coral] text-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-bold mb-6">🌟 Website Functionalities & Interactive Features 🌟</h2>
      <p className="text-lg mb-10 max-w-2xl mx-auto">
        Experience a seamless and user-friendly platform designed to enhance your reading and learning journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "📥 Request New Books Anytime",
          "💬 24/7 Live Chat Support",
          "📩 Submit Complaints & Feedback",
          "📚 Personalized Book Recommendations",
          "🔔 Get Notifications on New Arrivals",
          "📜 View & Manage Your Book History",
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white text-[coral] rounded-lg shadow-lg p-5 text-lg font-semibold hover:bg-[#f85215] hover:text-white transition-all duration-500"
          >
            {feature}
          </div>
        ))}
      </div>


    </div>
    </div>
  );
};

export default Portal;
