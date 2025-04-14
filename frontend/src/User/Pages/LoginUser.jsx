import React, { useContext, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navigator from "../../GlobalComponents/Navigator";
import { assets } from "../../assets/assets";
import { AuthContext } from "../../ContextAPI/AuthContext";
import { jwtDecode } from "jwt-decode";
import LoginIntro from "../Components/LoginIntro";
 
const LoginUser = () => {
  const backendURI = "https://backend-v1bd.onrender.com";
  const navigate = useNavigate();
  const {  userToken, setUserToken, setLoggedInUser,loggedInUserData,setLoggedInUserData } = useContext(AuthContext);
 


  useEffect(() => {
    if (userToken) {
      try {
        const userData = jwtDecode(userToken);
        
        if (userData?.userId) {
          console.log("Navigating to ->", `/user/${userData.userId}`);
          navigate(`/user/${userData.userId}`); 
          setLoggedInUser(true);
        } else {
          console.error("Invalid token structure: Missing userId");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, [userToken]); 




  
  const onFinish = async (values) => {
    try {  
      const response = await axios.post(`${backendURI}/api/enroll/user/login`, {
        email: values.email,
        password: values.password,
      }); 

      if (response.data.success) {
                localStorage.setItem("UserToken", response.data.token);
                const token = localStorage.getItem("UserToken");
                setUserToken(token);
                console.log("UserToken Saved as -> ",userToken);
                message.success("Login successful");
                setLoggedInUser(true);
                const userData = response.data.data;
                setLoggedInUserData(userData);
                console.log(loggedInUserData);
              } else {
        navigate('/user/login-warning')
        message.error(response.data.message || "Failed to log in");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      message.error("An error occurred while logging in.");
    }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };  


  return (
    <div className="min-h-[100vh] w-[100%] bg-[#f4f1ed78] text-[#c17130] relative">
      <LoginIntro/>
      <Navigator icon={assets.home} position={'left-4'} address={'/'}/>

      <div className="min-h-[50vh] max-w-[800px] mx-auto shadow-[5px_5px_15px_gainsboro] rounded p-5 bg-[#f4f1ed]">
        <Form
          name="user-login"
          layout="vertical"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Login
            </Button>
          </Form.Item>
        </Form>

        <p className="text-sm font-light">Don't have an account? <Link to={'/'} className="text-lg font-semibold underline">Connect with us now!</Link> </p>
      </div>
    </div>
  );
};

export default LoginUser;
