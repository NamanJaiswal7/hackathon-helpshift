import React, { useState } from "react";
import { Card, Button, Modal, Form, Input, Typography } from "antd";
import { UserOutlined, GoogleOutlined } from "@ant-design/icons";
import GoogleLoginButton from "./GoogleLoginButton";

const { Link } = Typography;

const SignUpCard = ({ isModalVisible, setIsModalVisible }) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Received values of form:", values);
    // Implement your sign-up logic here
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Sign Up"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "80vh"
        }}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<UserOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign Up
            </Button>
          </Form.Item>
          <div
            style={{
              textAlign: "center",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <span>Or continue with</span>
            <GoogleLoginButton />
            <div style={{ marginTop: 16 }}>
              Already have an account?{" "}
              <Button
                onClick={() => {
                  setIsModalVisible(false);
                }}
              >
                Sign In
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default SignUpCard;
