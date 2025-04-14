import React, { useState } from "react";
import { Form, Input, Select, Button, Upload, message, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import Navigator from "../../GlobalComponents/Navigator";
import { assets } from "../../assets/assets";
import IntroHead from "../../GlobalComponents/IntroHead";
import { useNavigate, useParams } from "react-router-dom";

const AddBooks = () => {
  const [coverImgList, setCoverImgList] = useState([]);
  const [authorImgList, setAuthorImgList] = useState([]);
  const backendURI = "https://backend-v1bd.onrender.com";
  const navigate = useNavigate();
  const { adminId } = useParams(); 
 

  const handleCoverImgChange = ({ fileList }) => setCoverImgList(fileList);
  const handleAuthorImgChange = ({ fileList }) => setAuthorImgList(fileList);

  const onFinish = async (values) => {
    
    const formData = new FormData();

    if (coverImgList[0]?.originFileObj) {
      formData.append("coverImg", coverImgList[0].originFileObj);
    }
    if (authorImgList[0]?.originFileObj) {
      formData.append("authorImg", authorImgList[0].originFileObj);
    }

    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("author", values.author);
    formData.append("price", values.price);
    formData.append("category", values.category);
    formData.append("publisher", values.publisher);
    formData.append("publicationYear", values.publicationYear);
    formData.append("language", values.language);
    formData.append("totalCount", values.totalCount);
    formData.append("availableCount", values.availableCount);
    formData.append("borrowedCount", values.borrowedCount);
    formData.append("location", values.location);
    formData.append("status", values.status);

    try {
      const response = await axios.post(`${backendURI}/api/books/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.data.success) {
        message.success("Book added successfully!");
        setCoverImgList([]);
        setAuthorImgList([]);
        Form.resetFields()
      } else {
        message.error("Failed to add the book.");
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred while adding the book.");
    }
  };

  const validateMessages = {
    required: "${label} is required!",
  }; 

  const { TextArea } = Input;

  return (
    <div className="min-h-[100vh] w-full bg-[#f4f1edc4] relative">
      <IntroHead text={'Add a book'}/>

      <Navigator icon={assets.admin} position={'left-4'} address={`/admin/${adminId}`}/>
      <div className="min-h-[100vh] w-[90%] mx-auto py-5">
        <Form
          name="add-book"
          layout="vertical"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item label="Title of the Book" name="title" rules={[{ required: true }]}>
            <Input placeholder="Enter the title" />
          </Form.Item>

          <Form.Item label="Description of the Book" name="description" rules={[{ required: true }]}>
            <TextArea placeholder="Enter the description" rows={4} />
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

          <Form.Item label="Author of the Book" name="author" rules={[{ required: true }]}>
            <Input placeholder="Enter the author's name" />
          </Form.Item>

          <Form.Item label="Author Image" name="authorImg" rules={[{ required: true }]}>
            <Upload
              listType="picture"
              fileList={authorImgList}
              onChange={handleAuthorImgChange}
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Upload Author Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Price of the Book" name="price" rules={[{ required: true }]}>
            <InputNumber min={1} placeholder="Enter the price" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Category" name="category" rules={[{ required: true }]}>
            <Input placeholder="Enter the category" />
          </Form.Item>

          <Form.Item label="Publisher" name="publisher">
            <Input placeholder="Enter the publisher (optional)" />
          </Form.Item>

          <Form.Item label="Publication Year" name="publicationYear">
            <InputNumber
              min={1900}
              max={new Date().getFullYear()}
              placeholder="Enter the publication year"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item label="Language" name="language" rules={[{ required: true }]}>
            <Input placeholder="Enter the language" />
          </Form.Item>

          <Form.Item label="Total Count" name="totalCount" rules={[{ required: true }]}>
            <InputNumber min={0} placeholder="Enter the total count" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Available Count" name="availableCount" rules={[{ required: true }]}>
            <InputNumber min={0} placeholder="Enter the available count" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Borrowed Count" name="borrowedCount" rules={[{ required: true }]}>
            <InputNumber min={0} placeholder="Enter the borrowed count" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Location" name="location" rules={[{ required: true }]}>
            <Input placeholder="Enter the location" />
          </Form.Item>

          <Form.Item label="Status" name="status" rules={[{ required: true }]}>
            <Select placeholder="Select the status">
              <Select.Option value="Available">Available</Select.Option>
              <Select.Option value="Not Available">Not Available</Select.Option>
              <Select.Option value="Reserved">Reserved</Select.Option>
              <Select.Option value="Borrowed">Borrowed</Select.Option>
              <Select.Option value="Out of Stock">Out of Stock</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Book
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddBooks;
