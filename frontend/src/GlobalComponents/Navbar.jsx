import React, { useContext } from "react";
import NavItem from "./NavItem";
import { AuthContext } from "../ContextAPI/AuthContext";
import UserNotation from "./UserNotation";
import { assets } from "../assets/assets";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Logo from "./Logo";
 
const Navbar = () => {
    const {loggedInUserData, userToken} = useContext(AuthContext);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = useParams(); 
   
  

  return (
    <div className="h-auto w-full">
      <div className="w-full h-auto m-auto bg-[#ffdbcc]">
        <p className="w-[90%] m-auto text-center font-semibold text-2xl p-2">
          <span className="text-[#f48657]">Buy 5 </span>
          Get a discount of 10%!
        </p>
      </div> 

      <div className="w-[90%] flex items-center justify-between m-auto">
        <div className="flex w-auto my-1 justify-between items-center gap-3 py-3">
          <NavItem targetPath={`/user/${userId}`} text={"Home"} indicator={location.pathname === `/user/${userId}` || location.pathname === `/user/${userId}/`}/>
          <NavItem targetPath={`/user/${userId}/books`} text={"Books"} indicator={location.pathname === `/user/${userId}/books`}/>
          <NavItem targetPath={`/user/${userId}/blogs`} text={"Blogs"} indicator={location.pathname === `/user/${userId}/blogs`}/>
          <NavItem targetPath={`/user/${userId}/membership`} text={"Membership"} indicator={location.pathname === `/user/${userId}/membership`}/>
          <NavItem targetPath={`/user/${userId}/dashboard`} text={"Dashboard"} indicator={location.pathname.startsWith(`/user/${userId}/dashboard`)}/>
          <NavItem targetPath={`/user/${userId}/about`} text={"About Us"} indicator={location.pathname === `/user/${userId}/about`}/>
          <NavItem targetPath={`/user/${userId}/contact`} text={"Contact Us"} indicator={location.pathname === `/user/${userId}/contact`}/>
          <NavItem targetPath={`/user/${userId}/help`} text={"Help"} indicator={location.pathname === `/user/${userId}/help`}/>
        </div> 




{userToken
?
<UserNotation 
  name={loggedInUserData?.firstName + " "+ loggedInUserData.lastName}
  img={loggedInUserData?.profilePic}
/>

:(
  <div className="">

    <Link to={'/user/login'} className="px-6 py-2 border bg-[#555] rounded text-white hover:bg-[coral] ">
    Login Now
    </Link>
   

  </div>
)}


<Link to={userToken?`/user/${userId}/cart`:'/user/login'} className="group h-[50px] w-[50px] p-1 rounded-full relative cursor-pointer hover:bg-[coral] transition-all">
    <img src={assets.cart} className="h-full w-full object-cover" alt="" />

    <div className="absolute top-0 left-0 bg-[coral] h-[20px] w-[20px] rounded-full z-[-1] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-3 group-hover:-translate-y-3"></div>

    <div className="absolute top-0 right-0 bg-[coral] h-[20px] w-[20px] rounded-full z-[-1] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-3 group-hover:-translate-y-3"></div>

    <div className="absolute bottom-0 left-0 bg-[coral] h-[20px] w-[20px] rounded-full z-[-1] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-3 group-hover:translate-y-3"></div>

    <div className="absolute bottom-0 right-0 bg-[coral] h-[20px] w-[20px] rounded-full z-[-1] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-3 group-hover:translate-y-3"></div>
</Link>



        
      </div>
    </div>
  );
};

export default Navbar;
