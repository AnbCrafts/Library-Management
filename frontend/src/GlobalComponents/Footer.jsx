import React, { useEffect } from "react";
import FooterCard from "./FooterCard";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";

const Footer = () => {
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
    <div className=" min-h-[40vh] h-auto w-full bg-[#f4f1ed]  text-[#c17130] px-5">
      <div className="fade-in flex items-center justify-center h-[200px] w-full overflow-x-scroll scrollbar-hidden gap-5">
        <FooterCard imageSrc={assets.poem} text={"Poetry"} />
        <FooterCard imageSrc={assets.author} text={"Famous Authors"} />
        <FooterCard imageSrc={assets.book} text={"Top Books"} />
        <FooterCard imageSrc={assets.novel} text={"Novels"} />
        <FooterCard imageSrc={assets.audioBook} text={"Audio books"} />
      </div>

      

      <div className="fade-in flex items-center justify-between w-full h-auto py-5 px-2">
        <div className="w-[80px] h-[80px] ">
          <Link to={"/user"}>
            <img
              className="cursor-pointer rounded-full"
              src={assets.logo}
              alt=""
            />
          </Link>
        </div>

        <div className="fade-in px-5 max-w-[600px]">
          <h1 className="text-3xl font-semibold">
            Empowering Readers, One Book at a Time
          </h1>
          <p className="text-slate-700 font-light text-sm py-1">
            Manage your library effortlessly with our comprehensive platform.
            From cataloging books to tracking lending and returns, we bring
            organization and accessibility to your fingertips.
          </p>
        </div>
        <div className="fade-in flex-1 mx-2 p-2 h-auto w-auto flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Browse Here</h3>
            <ul className="fade-in mt-2 space-y-2">
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                New Release
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Top Charts
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Featured Books
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Novels
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Poems
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Magazines
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-lg font-bold text-gray-800">Languages</h3>
            <ul className="fade-in mt-2 space-y-2">
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Hindi
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Punjabi
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                English
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Tamil
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Telugu
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Malayalam
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Kannada
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Odiya
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800">Company</h3>
            <ul className="fade-in mt-2 space-y-2">
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                About Us
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Culture
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Blog
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Advertisement
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Press
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Job
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Privacy
              </li>
              <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Highlights
              </li>
            </ul>
          </div>

          <div>
    <h3 className="text-lg font-bold text-gray-800">Social Media</h3>
    <ul className="fade-in mt-2 space-y-2">
        <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
            <img src={assets.fb} alt="Facebook" className="inline-block mr-2 w-10 h-10"/> Facebook
        </li>
        <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
            <img src={assets.twitter} alt="Twitter" className="inline-block mr-2 w-10 h-10"/> Twitter
        </li>
        <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
            <img src={assets.mail} alt="Email" className="inline-block mr-2 w-10 h-10"/> Email
        </li>
        <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
            <img src={assets.insta} alt="Instagram" className="inline-block mr-2 w-10 h-10"/> Instagram
        </li>
    </ul>
</div>

        </div>
      </div>

      <div className="fade-in flex gap-8 justify-center p-8">
            {/* Subscribe Section */}
            <div className="bg-[#f4f1ed] p-6 rounded-lg shadow-md text-center max-w-md w-full">
                <h3 className="text-xl font-bold text-[#c17130] mb-4">Subscribe to our Newsletter</h3>
                <p className="text-gray-600 mb-4">
                    Stay updated with the latest books, offers, and news from our library.
                </p>
                <div className="flex items-center gap-2 justify-center">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="rounded-md shadow-sm w-full md:w-auto"
                    />
                    <Button
                        type="primary"
                        className="bg-[#c17130] hover:bg-[#a15a25] text-white"
                    >
                        Subscribe
                    </Button>
                </div>
            </div>

            {/* Query Section */}
            <div className="bg-[#f4f1ed] p-6 rounded-lg shadow-md text-center max-w-md w-full">
                <h3 className="text-xl font-bold text-[#c17130] mb-4">Have a Question?</h3>
                <p className="text-gray-600 mb-4">
                    Reach out to us and we'll get back to you as soon as possible.
                </p>
                <div className="flex items-center gap-2 justify-center">
                    <Input
                        type="text"
                        placeholder="Your query"
                        className="rounded-md shadow-sm w-full md:w-auto"
                    />
                    <Button
                        type="primary"
                        className="bg-[#c17130] hover:bg-[#a15a25] text-white"
                    >
                        Send Query
                    </Button>
                </div>
            </div>
        </div>

      <div className="flex items-center justify-center w-full h-[50px] bg-[#c17130]">
        <div className="w-auto  h-auto ">
          <ul className="fade-in flex items-center justify-start gap-2 h-full">
            <li className="h-[35px] w-[35px]  cursor-pointer hover:-translate-y-2  rounded-full">
              <img
                className="h-[35px] w-[35px] object-cover"
                src={assets.insta}
                alt=""
              />
            </li>
            <li className="h-[35px] w-[35px]  cursor-pointer hover:-translate-y-2  rounded-full">
              <img
                className="h-[35px] w-[35px] object-cover "
                src={assets.fb}
                alt=""
              />
            </li>
            <li className="h-[35px] w-[35px]  cursor-pointer hover:-translate-y-2  rounded-full">
              <img
                className="h-[35px] w-[35px] object-cover "
                src={assets.mail}
                alt=""
              />
            </li>
            <li className="h-[35px] w-[35px]  cursor-pointer hover:-translate-y-2  rounded-full">
              <img
                className="h-[35px] w-[35px] object-cover "
                src={assets.twitter}
                alt=""
              />
            </li>
          </ul>
        </div>
        <p className="px-4 text-[#fff] font-semibold text-xs">
          © 2025 @Anbcrafts. All Rights Reserved. Bringing libraries to life
          with seamless management and accessibility. Explore, organize, and
          thrive with our platform.
        </p>
      </div>
    </div>
  );
};

export default Footer;
