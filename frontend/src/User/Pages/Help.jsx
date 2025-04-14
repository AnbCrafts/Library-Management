import React, { useEffect } from "react";
import Navbar from "../../GlobalComponents/Navbar";
import { QuestionMarkCircleIcon, BookOpenIcon, ArrowPathIcon, ChatBubbleLeftIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"; // Updated import
import { assets } from "../../assets/assets";

const Help = () => {
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
    <div>
      <Navbar />
      <div className="w-full min-h-[100vh] bg-[#f4f1ed] text-[#333] p-5">
        <div className="max-w-[1200px] mx-auto">

          {/* Banner Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#c17130] my-5 ">
              Help & Support
            </h1>
            
          </div>

          <div className="relative my-3 w-full h-[400px] rounded">
                     <div className="flex w-full h-[400px] items-center justify-end">

                     <img src={assets.here_help} className="w-[full] h-full flex-1 object-cover rounded" alt="" />
                     <img src={assets.confused} className="w-[400px] h-full object-cover rounded" alt="" />
                     </div>
                      <div className="absolute py-5 h-full w-full top-5 left-5">
                        <h1 className="text-3xl text-[#fff] font-semibold max-w-[400px] bg-[#5555559c] px-4 py-2">
                        Need some help?
                        </h1>
                        <p className="max-w-[400px] py-2 px-4 text-[#fff] font-light italic bg-[#5555559c]">Having trouble navigating our platform? Find answers to frequently asked questions, learn how to use our services, and reach out to our support team for personalized assistance. We're here to help you every step of the way!😊📩</p>
                      </div>
                    </div>

          {/* FAQs Section */}
          <div className="fade-in mt-5 bg-white shadow-lg rounded-lg p-5 mb-10">
            <h2 className="text-[coral] text-3xl font-semibold mb-4 flex items-center">
              <QuestionMarkCircleIcon className="h-6 w-6 text-[#c17130] mr-2" /> Frequently Asked Questions
            </h2>
            
            <div className="mb-4 border py-2 px-1 flex items-start">
              <BookOpenIcon className="h-6 w-6 text-[#c17130] mr-3" />
              <div>
                <h3 className="font-bold text-lg">How do I borrow books?</h3>
                <p>Simply log in to your account, browse the catalog, and click "Borrow" on the desired book.</p>
              </div>
            </div>

            <div className="mb-4 border py-2 px-1 flex items-start">
              <QuestionMarkCircleIcon className="h-6 w-6 text-[#c17130] mr-3" />
              <div>
                <h3 className="font-bold text-lg">What is the borrowing limit?</h3>
                <p>Users can borrow up to 5 books at a time.</p>
              </div>
            </div>

            <div className="mb-4 border py-2 px-1 flex items-start">
              <ArrowPathIcon className="h-6 w-6 text-[#c17130] mr-3" />
              <div>
                <h3 className="font-bold text-lg">Can I renew a borrowed book?</h3>
                <p>Yes, books can be renewed unless another user has reserved them.</p>
              </div>
            </div>
          </div>

          {/* Contact Support Section */}
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h2 className="text-[coral] text-3xl font-semibold mb-4 flex items-center">
              <ChatBubbleLeftIcon className="h-6 w-6 text-[#c17130] mr-2" /> Contact Support
            </h2>
            <p>If you still need help, feel free to reach out:</p>
            <ul className="list-none mt-2">
              <li className="border py-2 px-1 my-3 flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-[#c17130] mr-2" /> Email: support@librarymanagement.com
              </li>
              <li className="border py-2 px-1 my-3 flex items-center">
                <PhoneIcon className="h-6 w-6 text-[#c17130] mr-2" /> Phone: +1 (123) 456-7890
              </li>
              <li className="border py-2 px-1 my-3 flex items-center">
                <ChatBubbleLeftIcon className="h-6 w-6 text-[#c17130] mr-2" /> Live Chat: Available 9 AM - 6 PM
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Help;
