import React, { useContext, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navigator from "../../GlobalComponents/Navigator";
import { assets } from "../../assets/assets";
import IntroHead from "../../GlobalComponents/IntroHead";
import { AuthContext } from "../../ContextAPI/AuthContext";
import { jwtDecode } from "jwt-decode";

const LoginAdmin = () => {
  const backendURI = "https://backend-v1bd.onrender.com";
  const navigate = useNavigate();
    const { token, setToken , loggedInAdminData, setLoggedInAdminData} = useContext(AuthContext);
  
  
    useEffect(() => {
        if (token) {
          try {
            const adminData = jwtDecode(token);
            
            if (adminData?.userId) {
              console.log("Navigating to ->", `/admin/${adminData.userId}`);
              navigate(`/admin/${adminData.userId}`); 
              
            } else {
              console.error("Invalid token structure: Missing userId");
            }
          } catch (error) {
            console.error("Error decoding token:", error);
          }
        }
      }, [token]); 
     
 
  const onFinish = async (values) => { 
    try {
      const response = await axios.post(
        `${backendURI}/api/enroll/admin/login`,
        values, // Sending JSON payload directly
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ); 

      if (response.data.success) {
        localStorage.setItem("AdminToken", response.data.token);
        const token = localStorage.getItem("AdminToken");
        setToken(token);
        const adminData = response.data.data;
        setLoggedInAdminData(adminData);
        console.log("AdminToken Saved as -> ",token);
        console.log("Admin data -> ",adminData);

        
        
      } else {
        navigate('/')
        message.error(response.data.message || "Failed to log in");
      }
    } catch (error) {
      console.error("Error occurred while logging in:", error);
      message.error("An error occurred while logging in.");
    }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  useEffect(()=>{
    console.log("Admin data -> ",loggedInAdminData);
  },[loggedInAdminData])

  return (
    <div className="min-h-[100vh] w-[100%] bg-[#f4f1ed78] text-[#c17130] relative">
      <IntroHead text={"Verify your identity as an admin"} />
      <Navigator icon={assets.user} position={"left-4"} address={"/user/:userId"} />

      <div className="py-5 min-h-[50vh] max-w-[800px] mx-auto shadow-[5px_5px_15px_gainsboro] rounded p-5 bg-[#f4f1ed]">
        <Form
          name="admin-login"
          layout="vertical"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email is required!" },
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginAdmin;
