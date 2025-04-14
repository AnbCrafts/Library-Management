import React, { useState } from "react";
import { Form, Input, Select, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import Navigator from "../../GlobalComponents/Navigator";
import { assets } from "../../assets/assets";
import IntroHead from "../../GlobalComponents/IntroHead";
import { useNavigate, useParams } from "react-router-dom";
 
const { Option } = Select;

const AddAdmin = () => {
  const [fileList, setFileList] = useState([]);
  const backendURI = "https://backend-v1bd.onrender.com";
  const navigate = useNavigate();
  const { adminId } = useParams(); 
 
  const onFinish = async (values) => {
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
      const response = await axios.post(`${backendURI}/api/enroll/admin/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        message.success("Admin added successfully");
        setFileList([]);
      } else {
        message.error(response.data.message || "Failed to add admin");
      }
    } catch (error) {
      message.error("An error occurred while adding admin");
    }
  };

  const handleFileChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  }; 

  return (
    <div className="h-full w-full relative">
      <IntroHead text={'Add an Admin'}/>
    <Navigator address={`/admin/${adminId}`} position={'left-4'} icon={assets.admin}/>
    <div className="w-[90%] m-auto py-5 relative">
      <Form  
        
        name="add-admin"
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item label="First Name" name="firstName" rules={[{ required: true }]}>
          <Input placeholder="Enter first name" />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}>
          <Input placeholder="Enter last name" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
          <Input placeholder="Enter email address" />
        </Form.Item>
        <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
          <Input placeholder="Enter phone number" />
        </Form.Item>
        <Form.Item label="Role" name="role" rules={[{ required: true }]}>
          <Input  placeholder="Enter role" />
        </Form.Item>
        <Form.Item label="Profile Picture" name="profilePic">
          <Upload
            listType="picture"
            fileList={fileList}
            onChange={handleFileChange}
            beforeUpload={() => false}
          > 
            <Button icon={<UploadOutlined />}>Upload Profile Picture</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password placeholder="Enter password" />
        </Form.Item>
        <Form.Item label="Status" name="status" rules={[{ required: true }]} initialValue="active">
          <Select>
            <Option value="active">Active</Option>
            <Option value="inactive">Inactive</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Permissions" name="permissions" rules={[{ required: true, type: "array" }]}>
          <Select
            mode="multiple"
            placeholder="Select permissions"
            options={[
              { label: "Read", value: "read" },
              { label: "Write", value: "write" },
              { label: "Update", value: "update" },
              { label: "Delete", value: "delete" },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary"  className="bg-[#c17130] text-white text-lg" htmlType="submit">Add Admin</Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};

export default AddAdmin;
