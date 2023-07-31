import React, { useState } from "react";
import { Card, Form, Input, Button, Divider, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";
import SignUpCard from "./SignUpcard";
const { Link } = Typography;
const Login = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <div style={{ maxWidth: 400, margin: "0 auto" }}>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <Divider>Or</Divider>
        <GoogleLoginButton />
        <div style={{ textAlign: "center", margin: "10px" }}>
          <span
            style={{
              marginRight: 8,
              fontFamily:
                '"Helvetica Neue", "Arial", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif',
              fontSize: "12px"
            }}
          >
            Don't have an account?
          </span>
          <Button
            style={{ color: "#1890ff", textDecoration: "underline" }}
            onClick={() => showModal()}
          >
            Sign Up
          </Button>
          {isModalVisible && (
            <SignUpCard
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
