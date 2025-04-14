import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navigator from "../../GlobalComponents/Navigator";
import { assets } from "../../assets/assets";
import { AuthContext } from "../../ContextAPI/AuthContext";
import { jwtDecode } from "jwt-decode";
import EnrollIntro from "../Components/EnrollIntro"; 
  
 
const Enroll = () => {
     const [fileList, setFileList] = useState([]);
      const backendURI = "https://backend-v1bd.onrender.com";
      const handleFileChange = ({ fileList: newFileList }) => setFileList(newFileList);


        const { token, setToken, loggedInUser,userToken, setUserToken,isAuthChecked, setIsAuthChecked, setLoggedInUser, login, logout,loggedInUserData,setLoggedInUserData } = useContext(AuthContext);
        const navigate = useNavigate();

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
  

      const onFinish = async(values)=>{
        const formData = new FormData();
    formData.append("profilePic", fileList[0]?.originFileObj || null);
    Object.keys(values).forEach((key) => {
      if (key === "permissions") {
        values[key].forEach((permission) => formData.append("permissions[]", permission));
      } else {
        formData.append(key, values[key]);
      }
    }); 

 
    try { 
        const response = await axios.post(`${backendURI}/api/enroll/user/register`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });if (response.data.success) {
                  message.success("User registered successfully");
                  setFileList([]);
                  localStorage.setItem("UserToken", response.data.token);
                const token = localStorage.getItem("UserToken");
                setUserToken(token);
                const userData = response.data.data;
                setLoggedInUserData(userData);
                console.log("UserToken Saved as -> ",userToken);
                console.log("userData  -> ",loggedInUserData);
                
                } else {
                  message.error(response.data.message || "Failed to sign up");
                  navigate('/')
 
                }
        
    } catch (error) {
        console.log(error, "Error occurred while registering user");
    }
}

      const validateMessages = {
        required: "${label} is required!",
        types: {
          email: "${label} is not a valid email!",
        },
      };

       
  return (
    <div className='min-h-[100vh] w-[100%] mb-5 relative '>
      <EnrollIntro/>
      <Navigator icon={assets.home} position={'left-4'} address={'/'}/>
        <div className='min-h-[50vh] max-w-[800px] mx-auto shadow-[5px_5px_15px_gainsboro] rounded p-5 bg-[#f4f1ed]'>
            <Form
             name="add-user"
            layout="vertical"
            onFinish={onFinish}
            validateMessages={validateMessages}>


           
            <Form.Item  label="First Name" name="firstName" rules={[{ required: true }]}>
                        <Input placeholder="Enter first name" />
                </Form.Item>
                <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}>
                        <Input placeholder="Enter Last name" />
                </Form.Item>

                <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                        <Input placeholder="Enter your email" />
                </Form.Item>
                <Form.Item label="password" name="password" rules={[{ required: true }]}>
                        <Input placeholder="Create a password" />
                </Form.Item>
                <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
                        <Input placeholder="Enter you phone Number" />
                </Form.Item>
                <Form.Item
    label="Address"
    name="address"
    rules={[{ required: true, message: 'Please enter your address' }]}
>
    <Input.TextArea placeholder="Enter your address" rows={4} />
</Form.Item>

<Form.Item
    label="Profile Picture"
    name="profilePic"
    rules={[{ required: true, message: 'Please upload a profile picture' }]}
>
    <Upload
        listType="picture-card"
        beforeUpload={() => false} // Prevent auto upload
        maxCount={1}
        fileList={fileList}
            onChange={handleFileChange}
        showUploadList={{ showRemoveIcon: true }}
    >
        <div>
            <UploadOutlined />
            <div>Upload</div>
        </div>
    </Upload>
</Form.Item>
<Form.Item>
          <Button type="primary" htmlType="submit">Sign Up</Button>
        </Form.Item>


            </Form>

        </div>

        
    </div>
  )
}
 
export default Enroll
