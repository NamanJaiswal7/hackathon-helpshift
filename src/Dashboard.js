import React, { useEffect, useState } from "react";
import { Card, Button, Modal, Form, Input, Typography } from "antd";
import axios from "axios";
import "./dashboardStyle.css"; // Import custom CSS for Dashboard
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const { Title } = Typography;

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const apiUrl = "https://7x2m5j-8080.csb.app/api/users/members";
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      // Define the API URL

      // Fetch the data from the API using axios
      const response = await axios.get(apiUrl);
      console.log(response);
      // Set the retrieved data to the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Received values of form:", values);
    // Implement your logic to add a member here
    setIsModalVisible(false);
  };

  const cardData = [
    { title: "Card 1", content: "Content of Card 1" },
    { title: "Card 2", content: "Content of Card 2" },
    { title: "Card 3", content: "Content of Card 3" }
  ];

  return (
    <div className="dashboard-container">
      <Title level={3}>Dashboard</Title>
      <SearchBar />
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} className="custom-card">
            <p>{card.content}</p>
          </Card>
        ))}
      </div>
      <Button type="primary" onClick={showModal} className="add-member-button">
        Add Member
      </Button>
      <Modal
        title="Add Member"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter a name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter an email!" },
              { type: "email", message: "Please enter a valid email!" }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Dashboard;
