import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AuthContext } from "../ContextAPI/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminNotation = ({ email }) => {
      const {  setToken , setLoggedInAdminData} = useContext(AuthContext);
  
  const navigate = useNavigate();
  const [toggleArrow, setToggleArrow] = useState(false);

  const handleAdminLogout = () => {
    localStorage.removeItem("AdminToken");
    setToken(null);
    setLoggedInAdminData(null);
    console.log("Token Removed");
    navigate("/admin/login");
  };

  return (
    <div className="min-w-[200px] flex items-center bg-[#c17130] rounded-md py-1 px-2 my-2 justify-center gap-5 border border-[#c17130] relative">
      

      <span className="text-white text-lg font-semibold">{email}</span>

      <div>
        {toggleArrow ? (
          <>
            <img
              src={assets.up}
              className="h-[30px] w-[30px] bg-[white] rounded-full cursor-pointer"
              onClick={() => setToggleArrow(false)}
              alt="Up Arrow"
            />
            <div className="absolute h-[100%] flex items-center justify-center w-fit p-2 bg-[#ffff] rounded-md top-0 z-10 -right-16">
              <img
                src={assets.logout}
                className="h-[40px] w-[40px] mx-auto bg-[white] rounded-full cursor-pointer"
                onClick={handleAdminLogout} // ✅ Click on image directly logs out
                alt="Logout"
              />
            </div>
          </>
        ) : (
          <img
            src={assets.downArrow}
            className="h-[30px] w-[30px] bg-[black] rounded-full cursor-pointer"
            onClick={() => setToggleArrow(true)}
            alt="Down Arrow"
          />
        )}
      </div>
    </div>
  );
};

export default AdminNotation;
