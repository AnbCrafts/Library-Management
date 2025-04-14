import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IntroHead from "../../GlobalComponents/IntroHead";
import Navigator from "../../GlobalComponents/Navigator";
import { assets } from "../../assets/assets";
import { AuthContext } from "../../ContextAPI/AuthContext";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const MemberDetails = ({
  img,
  id,
  preference,
  type,
  start,
  end,
  status,
  allowed,
  alloted,
  remaining,
  paymentStatus,
  name,
  phone,
  email,
  address,
}) => {
  const { adminId } = useParams();

  const { allMemberships, backendURI } = useContext(AuthContext);

  const [thisUserMembershipDetails, setThisUserMembershipDetails] = useState(
    []
  );
  const [userId, setUserId] = useState(null);

  // Extract userId from JWT safely
  useEffect(() => {
    const token = localStorage.getItem("UserToken");
    if (token) {
      try {
        const userData = jwtDecode(token);
        setUserId(userData?.userId || null);
      } catch (error) {
        console.error("Invalid Token:", error);
        setUserId(null);
      }
    } else {
      console.warn("No token found");
    }
  }, []);

  useEffect(() => {
    const fetchThisUserMemberShipDetails = async () => {
      if (!userId) return;

      try {
        console.log("Fetching Membership for User ID:", userId);
        const response = await axios.get(
          `${backendURI}/api/membership/list/user/${userId}`
        );

        if (response.data.success) {
          setThisUserMembershipDetails(response.data.userMembership);
        } else {
          console.warn("Membership not found for user -", userId);
        }
      } catch (error) {
        console.error("API Error while fetching user details:", error);
      }
    };

    fetchThisUserMemberShipDetails();
  }, [userId]);

  useEffect(() => {
    console.log("User Membership Details:", thisUserMembershipDetails);
  }, [thisUserMembershipDetails]);

  return (
    <>
      <IntroHead text={"Member details"} />
      <Navigator
        icon={assets.admin}
        position={"left-4"}
        address={`/admin/${adminId}`}
      />

      {thisUserMembershipDetails.length > 0 ? (
        thisUserMembershipDetails.map((item, index) => (
          <div key={index} className="relative min-h-[100vh] w-full ">
            <div className="bg-gray-50 w-[90%] py-5 flex gap-5  justify-between mx-auto h-full">
              <div className="ml-2 h-[400px] w-[400px] rounded-full">
                <img
                  src={item?.profilePicture}
                  className="rounded-full p-1 border h-full w-full object-cover"
                  alt=""
                />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-semibold text-[coral] text-center mt-5">
                  📜 Membership Details
                </h1>

                <div className="flex mt-3 flex-col items-center justify-center shadow-lg rounded-xl bg-[coral] p-6 w-full max-w-md mx-auto">
                  <h1 className="text-white font-bold text-2xl py-2 flex items-center gap-2">
                    🔖 {item?._id}
                  </h1>

                  <h2 className="text-white text-2xl py-1 flex items-center gap-2">
                    🎯 {item?.preference}
                  </h2>

                  <h2 className="text-white text-2xl py-1 flex items-center gap-2">
                    📂 {item?.membershipType}
                  </h2>

                  <span className="text-white text-lg py-1 font-semibold flex items-center gap-2">
                    📅 {item?.starting}
                  </span>

                  <span className="text-white text-lg py-1 font-semibold flex items-center gap-2">
                    ⏳ {item?.ending}
                  </span>

                  <span className="text-green-800 text-lg py-1 font-semibold flex items-center gap-2">
                    ✅ {item?.status}
                  </span>

                  <span className="text-white text-lg py-1 font-semibold flex items-center gap-2">
                    📚 {item?.maxBooksAllowed}
                  </span>

                  <span className="text-white text-lg py-1 font-semibold flex items-center gap-2">
                    📖 {item?.booksBorrowed}
                  </span>

                  <span className="text-white text-lg py-1 font-semibold flex items-center gap-2">
                    🔄 {item?.maxBooksAllowed - item?.booksBorrowed}
                  </span>

                  <span className="text-white text-lg py-1 font-semibold flex items-center gap-2">
                    💳 <span className="font-semibold">Payment Status:</span> ✅{" "}
                    {item?.paymentStatus}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-semibold text-[coral] text-center mt-5">
                  👤 User Details
                </h1>

                <div className="flex mt-3 flex-col items-center justify-center shadow-lg rounded-xl bg-[coral] p-6 w-full max-w-md mx-auto">
                  <h2 className="text-white text-2xl py-2 flex items-center gap-2">
                    🏷️ <span className="font-semibold">Name:</span> {item?.name}
                  </h2>

                  <h2 className="text-white text-2xl py-2 flex items-center gap-2">
                    📞 <span className="font-semibold">Phone:</span> +91{" "}
                    {item?.phoneNumber}
                  </h2>

                  <h2 className="text-white text-2xl py-2 flex items-center gap-2">
                    📧 <span className="font-semibold">Email:</span>{" "}
                    {item?.email}
                  </h2>

                  <h2 className="text-white text-2xl py-2 flex items-center gap-2">
                    📍 <span className="font-semibold">Address:</span>{" "}
                    {item?.address}
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center mt-4">
              <div className="bg-white shadow-lg rounded-xl p-4 flex gap-4 text-[coral] font-semibold">
                <button className="px-4 py-2 bg-[coral] text-white rounded-lg shadow-md hover:bg-opacity-90 transition">
                  ✏️ Edit
                </button>
                <button className="px-4 py-2 bg-[green] text-white rounded-lg shadow-md hover:bg-opacity-90 transition">
                  🔄 Renew Membership
                </button>
                <button className="px-4 py-2 bg-[red] text-white rounded-lg shadow-md hover:bg-opacity-90 transition flex items-center gap-2">
                  <span className="text-white font-semibold text-lg">✖</span>{" "}
                  Cancel Membership
                </button>

                <button className="px-4 py-2 bg-[coral] text-white rounded-lg shadow-md hover:bg-opacity-90 transition">
                  📜 View History
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-red-500">No membership details found</p>
      )}
    </>
  );
};

export default MemberDetails;
