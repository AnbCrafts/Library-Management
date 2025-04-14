import React, { createContext, useEffect, useId, useState } from "react";
// import { jwtDecode } from "jwt-decode";
import { jwtDecode } from "jwt-decode";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

  


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const backendURI = "https://backend-v1bd.onrender.com";
  const [direct , setDirect] = useState();

  const [loggedInUser, setLoggedInUser] = useState(false);
  const [loggedInUserData, setLoggedInUserData] = useState([]);
  const [loggedInAdminData, setLoggedInAdminData] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("AdminToken"));
  const [userToken, setUserToken] = useState(localStorage.getItem("UserToken"));
  const [isAuthChecked, setIsAuthChecked] = useState(false);
 
  const [userList, setUserList] = useState([]);
  const [borrowings, setBorrowings] = useState([]);
  const [reserves, setReserves] = useState([]);

  const [singleBookDetails, setSingleBookDetails] = useState({});
  const [orderDetails,setOrderDetails] = useState({})
  const [subscriptionDetails , setSubscriptionDetails] = useState({})
  const [activePlans , setActivePlans] = useState([]);
  
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


  const getLoggedInUserData = async () => {
    await fetchUserList(); 
  
    const searchParams = new URLSearchParams(location.search);

    const loggedUser = localStorage.getItem("UserToken");
    const decodedData = jwtDecode(loggedUser);
    const userId = decodedData.userId;
    
  
    if (userId && userList.length > 0) {
      const user = userList.find((user) => user._id === userId);
      
      if (user) {
        setLoggedInUserData(user);
      } else {
        console.warn("User not found in userList.");
      }
    }
  };
  
  useEffect(() => {
    if (userList.length > 0) {
      getLoggedInUserData();
    }
  }, [userList]);
  
  
  // useEffect(() => {
  //   console.log("Logged-in user data from scratch:", loggedInUserData);
  // }, [loggedInUserData]);
  
  

 



// useEffect(() => {
//   const rqdToken = localStorage.getItem("UserToken");

//   if (rqdToken) {
//     try {
//       const userData = jwtDecode(rqdToken);
//       setLoggedInUserData(userData);
//     } catch (error) {
//       console.error("Invalid token:", error);
//     }
//   }
// }, []);

useEffect(() => {
  const rqdToken = localStorage.getItem("AdminToken");

  if (rqdToken) {
    try {
      const adminData = jwtDecode(rqdToken);
      setLoggedInAdminData(adminData);
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }
}, []);



const [allMemberships, setAllMemberships] = useState([]);

const fetchAllMemberships = async()=>{
  try {
    const response = await axios.get(`${backendURI}/api/membership/list`)
    if(response){
      // console.log("Got the response -> ", response)
      if(response.data.success){
        // console.log("Succeeded", response.data.message);
        const memArr = response.data.memberships;
        setAllMemberships(memArr);
      }
    }else{
      console.log("Error getting response ....");
    }
    
  } catch (error) {
    console.log("API Error getting response ....",error);
    
  }
}


useEffect(()=>{
  fetchAllMemberships();
},[])
useEffect(()=>{
  // console.log("List of all memberships")
  // console.log(allMemberships);
  localStorage.setItem("memArr", allMemberships);
},[allMemberships])






  return (
    <AuthContext.Provider value={{ fetchAllMemberships,allMemberships,setAllMemberships, backendURI, activePlans , setActivePlans, subscriptionDetails , setSubscriptionDetails, token,orderDetails,setOrderDetails, setToken,singleBookDetails, setSingleBookDetails, loggedInUser,userToken, setUserToken,isAuthChecked, setIsAuthChecked, setLoggedInUser,loggedInUserData,setLoggedInUserData ,loggedInAdminData, setLoggedInAdminData,direct , setDirect }}>
      {children}
    </AuthContext.Provider>
  ); 
};
