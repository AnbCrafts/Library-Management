import React from "react";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { assets } from "../../assets/assets";

const WarningPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/user/login");
  };

  return (
    <div
      className="w-full min-h-[100vh] flex flex-col items-center justify-center text-center p-5"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(103, 113, 48, 0.6), rgba(240, 255, 240, 0.5)), url(${assets.about})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-[500px]">
        <ExclamationCircleOutlined
          style={{ fontSize: "4rem", color: "#f48657" }}
        />
        <h1 className="text-3xl font-bold text-[#c17130] mt-5">
          Access Denied!
        </h1>
        <p className="text-lg text-[#555] mt-3">
          Oops! It looks like you're trying to access a page that requires you
          to log in first.
        </p>
        <p className="text-lg text-[#555] mt-1">
          Please log in to continue and access this feature.
        </p>
        <button
          onClick={handleRedirect}
          className="mt-6 px-6 py-3 bg-[#c17130] text-white font-semibold rounded-md hover:bg-[#a65920]"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default WarningPage;
