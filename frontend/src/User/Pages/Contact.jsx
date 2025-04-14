import React, { useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import Navbar from "../../GlobalComponents/Navbar";
import { assets } from "../../assets/assets";

const Contact = () => {
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
      <Navbar />
      <div className="w-full min-h-[100vh] bg-[#f4f1ed] text-[#333] p-5">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center text-[#c17130] my-5">
            📞 Contact Us
          </h1>
        


          <div className="relative my-3 w-full h-[400px] rounded">
            <img src={assets.contact} className="w-full h-full object-cover rounded" alt="" />
            <div className="absolute px-5 py-5 h-full w-full top-0 left-0 bg-[#00000054]">
              <h1 className="text-3xl text-[#fff] font-semibold max-w-[500px] bg-[#5555559c] px-4 py-2">
              Get in Touch – We're Here to Help!
              </h1>
              <p className="max-w-[500px] py-2 px-4 text-[#fff] font-light italic bg-[#5555559c]">Have questions, suggestions, or need assistance? Our team is ready to support you! Reach out to us for any inquiries regarding memberships, book requests, or general assistance. We value your feedback and are just a message away!😊📩</p>
            </div>
          </div>

          {/* Contact Section Grid */}
          <div className="fade-in grid md:grid-cols-2 gap-8 mb-10">

            {/* Contact Form */}
            <div className="  bg-white shadow-lg rounded-lg p-5">
              <h2 className="text-2xl text-center py-3 text-[coral] font-semibold mb-4">✉️ Get in Touch</h2>
              <form>
                <div className="mb-4 flex items-center gap-3">
                  <FaUser className="text-[#c17130] text-xl" />
                  <label className="text-lg font-medium" htmlFor="name">
                    Name
                  </label>
                </div>
                <input
                  id="name"
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your name"
                />

                <div className="mb-4 flex items-center gap-3 mt-4">
                  <FaEnvelope className="text-[#c17130] text-xl" />
                  <label className="text-lg font-medium" htmlFor="email">
                    Email
                  </label>
                </div>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your email"
                />

                <div className="mb-4 flex items-center gap-3 mt-4">
                  <IoIosSend className="text-[#c17130] text-xl" />
                  <label className="text-lg font-medium" htmlFor="message">
                    Message
                  </label>
                </div>
                <textarea
                  id="message"
                  className="w-full p-2 border rounded"
                  rows="5"
                  placeholder="Write your message here..."
                ></textarea>

                <button
                  type="submit"
                  className="mt-4 flex items-center gap-2 bg-[#c17130] text-white px-4 py-2 rounded font-semibold hover:bg-[#a65920] transition"
                >
                  <IoIosSend /> Submit
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white shadow-lg rounded-lg p-5">
              <h2 className="text-2xl text-center py-3 text-[coral] font-semibold mb-4">📍 Contact Information</h2>

              <p className="border py-2 px-2  flex items-center gap-3 mb-3">
                <FaMapMarkerAlt className="text-[#c17130] text-xl" />
                <strong>Library Location:</strong> 123 Library Lane, Booktown, BK 45678
              </p>
              
              <p className="border py-2 px-2  flex items-center gap-3 mb-3">
                <FaEnvelope className="text-[#c17130] text-xl" />
                <strong>Email:</strong> support@librarymanagement.com
              </p>

              <p className="border py-2 px-2  flex items-center gap-3 mb-3">
                <FaPhone className="text-[#c17130] text-xl" />
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>

              <p className="border py-2 px-2  flex items-center gap-3 mb-3">
                <FaClock className="text-[#c17130] text-xl" />
                <strong>Support Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
              </p>

              <h3 className="text-xl py-3 text-[coral] font-semibold mt-5">🌍 Follow Us</h3>
              <div className="fade-in flex gap-4 mt-3">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
                  <FiFacebook />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600 text-xl">
                  <FiTwitter />
                </a>
                <a href="#" className="text-purple-500 hover:text-purple-700 text-xl">
                  <FiInstagram />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
