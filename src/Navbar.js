import React, { useState } from "react";
import { Menu, Button } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  MailOutlined
} from "@ant-design/icons";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? "Open Menu" : "Close Menu"}
      </Button>
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        style={{ height: "100vh" }}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="about" icon={<AppstoreOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key="contact" icon={<MailOutlined />}>
          Contact
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
