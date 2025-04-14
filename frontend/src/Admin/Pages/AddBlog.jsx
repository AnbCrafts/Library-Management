import React, { useState } from "react";
import { Form, Input, Select, Button, Upload, message, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import Navigator from "../../GlobalComponents/Navigator";
import { assets } from "../../assets/assets";
import IntroHead from "../../GlobalComponents/IntroHead";
import { useNavigate, useParams } from "react-router-dom";

const AddBlog = () => {
  const [coverImgList, setCoverImgList] = useState([]);
  const [authorImgList, setAuthorImgList] = useState([]);
  const backendURI = "https://backend-v1bd.onrender.com";
  const navigate = useNavigate();
  const { adminId } = useParams(); 
 

  const handleCoverImgChange = ({ fileList }) => setCoverImgList(fileList);

  const onFinish = async (values) => {
    const formData = new FormData();

    if (coverImgList[0]?.originFileObj) {
      formData.append("coverImg", coverImgList[0].originFileObj);
    }
    

    formData.append("title", values.title);
    formData.append("content", values.content);
    formData.append("category", values.category);

    try {
      const response = await axios.post(`${backendURI}/api/blogs/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.data.success) {
        message.success("Book added successfully!");
        Form.resetFields()
        setCoverImgList([]);
      } else {
        message.error("Failed to add the blog.");
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred while adding the blog.");
    }
  };

  const validateMessages = {
    required: "${label} is required!",
  }; 

  const { TextArea } = Input;

  return (
    <div className="min-h-[100vh] w-full bg-[#f4f1ed] relative">
      <IntroHead text={'Create a blog'}/>
      <Navigator icon={assets.admin} position={'left-4'} address={`/admin/${adminId}`}/>

      <div className="min-h-[100vh] w-[90%] mx-auto py-5">
        <Form
          name="add-blog"
          layout="vertical"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item label="Title of the Blog" name="title" rules={[{ required: true }]}>
            <Input placeholder="Enter the title" />
          </Form.Item>

          <Form.Item label="content of the Book" name="content" rules={[{ required: true }]}>
            <TextArea placeholder="Enter the content" rows={4} />
          </Form.Item>

          <Form.Item label="Cover Image" name="coverImg" rules={[{ required: true }]}>
            <Upload
              listType="picture"
              fileList={coverImgList}
              onChange={handleCoverImgChange}
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Upload Cover Image</Button>
            </Upload>
          </Form.Item>

          


          

          <Form.Item label="Category" name="category" rules={[{ required: true }]}>
            <Input placeholder="Enter the category" />
          </Form.Item>

          

         

       


          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Blog
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddBlog;
