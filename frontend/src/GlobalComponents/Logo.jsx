import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Logo = () => { 
  const [activeItem, setActiveItem] = useState("Location");
  const menuItems = [
    { id: "Location", img: "location_coral" },
    { id: "Call", img: "call_coral" },
    { id: "Help", img: "help_coral" },
  ];
  return (
    <div className="w-full h-auto flex items-center justify-around py-1 bg-[#000000bf]">
      {/* Logo Section */}
      <div className="mx-5 h-[80px] w-[80px] rounded-full bg-[#ef4405] flex justify-center items-center">
        <Link to="/" className="w-full h-full flex justify-center items-center">
          <img
            src={assets.LOGO}
            alt="Logo"
            className="object-cover rounded-full border-2 border-[coral] w-full h-full cursor-pointer"
          />
        </Link>
      </div>

      {/* Website Title */}
      <div className="mr-5">
        <p className="text-2xl bg-[#fff] p-3 rounded-md mx-5 font-bold text-[coral]">Bibliotek - Your Digital Library</p>
      </div>

      <div className='w-[400px] border border-[#ff7f5072] rounded-sm px-2 py-1'>
     
      


<ul className='h-full w-full flex items-center justify-center gap-5 py-1 px-2'>
  
<li className="p-[2px] group w-[50px] max-w-[150px] flex bg-[#fff] items-center justify-between hover:w-[130px] transition-all duration-300 rounded-full  cursor-pointer flex-shrink-0">
      <img src={assets.location_coral} className="h-[30px] rounded-full w-[30px]" alt="Location" />
      <span className='px-3 transition-all duration-300 font-semibold border rounded-r-3xl py-1 text-[#555] opacity-0 group-hover:opacity-100 hover:bg-[coral] hover:text-white'>Location</span>
    </li>
<li className="p-[2px] group w-[50px] max-w-[150px] flex bg-[#fff] items-center justify-between hover:w-[130px] transition-all duration-300 rounded-full  cursor-pointer flex-shrink-0">
      <img src={assets.call_coral} className="h-[30px] rounded-full w-[30px]" alt="Location" />
      <span className='px-3 transition-all duration-300 font-semibold border rounded-r-3xl py-1 text-[#555] opacity-0 group-hover:opacity-100 hover:bg-[coral] hover:text-white'>Contact</span>
    </li>
<li className="p-[2px] group w-[50px] max-w-[150px] flex bg-[#fff] items-center justify-between hover:w-[150px] transition-all duration-300 rounded-full  cursor-pointer flex-shrink-0">
      <img src={assets.help_coral} className="h-[30px] rounded-full w-[30px]" alt="Location" />
      <span className='px-3 transition-all duration-300 font-semibold border rounded-r-3xl py-1 text-[#555] opacity-0 group-hover:opacity-100 hover:bg-[coral] hover:text-white'>Guidance</span>
    </li>


</ul>




      </div>
    </div>
  );
};

export default Logo;
