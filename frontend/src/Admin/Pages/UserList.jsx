import React, { useEffect, useId, useState } from "react";
import axios from "axios";
import UserOverView from "../Components/UserOverView";
import SingleUser from "../Components/SingleUser";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Navigator from "../../GlobalComponents/Navigator";
import { assets } from "../../assets/assets";
import IntroHead from "../../GlobalComponents/IntroHead";

const UserList = () => {
  const backendURI = "https://backend-v1bd.onrender.com";

  const [userList, setUserList] = useState([]);
  const [borrowings, setBorrowings] = useState([]);
  const [reserves, setReserves] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const {adminId} = useParams();

  const fetchUserList = async () => {
    try {
      const response = await axios.get(`${backendURI}/api/enroll/user/list`);
      const users = response.data.users;

      const reservesArr = [];
      const borrowingsArr = []; 

      users.forEach((user) => {
        if (user.reserves) reservesArr.push(...user.reserves);
        if (user.borrowings) borrowingsArr.push(...user.borrowings);
      });
      
      setUserList(users);
      setReserves(reservesArr);
      setBorrowings(borrowingsArr);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("id"); 
  const user = userList.find((user) => user._id === userId);
  const deleteUser = async () => {
    try {
      
  
      const searchParams = new URLSearchParams(location.search);
      const userId = searchParams.get("id");
  
      if (!userId) {
        console.error("User ID not found in URL parameters.");
        return;
      }
  
      const response = await axios.delete(`${backendURI}/api/enroll/user/delete/${userId}`);
  
      if (response.data.success) {
        console.log("User deleted successfully");
        navigate(`/admin/${adminId}/handle-users`);
        
        if (typeof fetchUserList === "function") {
          await fetchUserList();
        }
      } else {
        console.log("User deletion failed");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="h-full w-full relative">
      <IntroHead text={'Manage Users'}/>
      
      <Navigator icon={assets.admin} position={'left-4'} address={`/admin/${adminId}`}/>
      <div className="w-[90%] m-auto p-4 pt-8 pb-8 min-h-[100vh]">
      {userId && user ? (
        <SingleUser
          img={user.profilePic}
          name={`${user.firstName} ${user.lastName}`}
          status={user.status}
          mail={user.email}
          phone={user.phone}
          address={user.address}
          fine={user.fine}
          membership={user.membershipType || "No enrolled yet"}
          validity={Math.ceil(
            (new Date(user.memberShipExpiryDate) - new Date(user.memberShipStartDate)) / (1000 * 60 * 60 * 24)
          )}
          delUser={deleteUser}
        />
      ) : (
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {userList &&
            userList.map((item) => (
              <UserOverView
                key={item._id}
                img={item.profilePic}
                name={`${item.firstName} ${item.lastName}`}
                mail={item.email}
                phone={item.phone}
                status={item.status}
                clickHandler={() => navigate(`/admin/${adminId}/handle-users?id=${item._id}`)}
              />
            ))}
        </div>
      )}
    </div>
    </div>
    
  );
};

export default UserList;
