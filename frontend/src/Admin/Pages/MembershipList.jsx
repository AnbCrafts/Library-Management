import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IntroHead from "../../GlobalComponents/IntroHead";
import { assets } from "../../assets/assets";
import Navigator from "../../GlobalComponents/Navigator";
import MembershipCard from "../Components/MembershipCard";
import { AuthContext } from "../../ContextAPI/AuthContext";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import MemberDetails from "../Components/MemberDetails";

const MembershipList = () => {
    const { adminId } = useParams();
    const { allMemberships, backendURI } = useContext(AuthContext);

    const [thisUserMembershipDetails, setThisUserMembershipDetails] = useState([]);
    const [userId, setUserId] = useState(null);
    const [selectedMembership, setSelectedMembership] = useState(null); // State for selected membership

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
                const response = await axios.get(`${backendURI}/api/membership/list/user/${userId}`);
                
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

    const handleMembershipClick = (membership) => {
        setSelectedMembership(membership);
        console.log(selectedMembership)
    };


    

    return (
        <div className="relative min-h-[100vh] w-full">
            <IntroHead text={"Manage Memberships"} />
            <Navigator icon={assets.admin} position={"left-4"} address={`/admin/${adminId}`} />

            {selectedMembership ? (
                 <MemberDetails 
                 img={thisUserMembershipDetails.profilePicture}
                 id={selectedMembership._id}
                 preference={selectedMembership.preference}
                 type={selectedMembership.membershipType}
                 start={selectedMembership.starting}
                 end={selectedMembership.ending}
                 status={selectedMembership.status}
                 allowed={selectedMembership.maxBooksAllowed}
                 alloted={selectedMembership.booksBorrowed}
                 remaining={selectedMembership.maxBooksAllowed - selectedMembership.booksBorrowed}
                 paymentStatus={selectedMembership.paymentStatus}
                 name={selectedMembership.name}
                 phone={selectedMembership.phoneNumber}
                 email={selectedMembership.email}
                 address={selectedMembership.address}
             />
            ) : (
                <div className="w-[90%] py-5 flex items-center flex-col justify-between h-full mx-auto">
                    <div className="flex items-center justify-between w-full py-2 px-5 text-white bg-[coral]">
                        <span className="text-2xl font-semibold w-[100px] mr-3">Profile</span>
                        <span className="text-2xl font-semibold flex-1">Name</span>
                        <span className="text-2xl font-semibold flex-1">Email</span>
                        <span className="text-2xl font-semibold flex-1">Preference</span>
                        <span className="text-2xl font-semibold flex-1">Type</span>
                        <span className="text-2xl font-semibold flex-1">ID</span>
                    </div>

                    {allMemberships?.map((item, index) => (
                            <MembershipCard
                            key={index}
                                img={item.profilePicture}
                                name={item.name}
                                type={item.membershipType}
                                preference={item.preference}
                                id={item._id}
                                mail={item.email}
                                userId={item.userId}
                                membershipId={item._id}
                             
                                
                            />
                        
                    ))}
                </div>
            )}
        </div>
    );
};

export default MembershipList;
