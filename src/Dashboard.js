import React from "react";
import { Layout, Menu, Avatar } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  PieChartOutlined,
  FileOutlined
} from "@ant-design/icons";
import ProfileDetails from "./ProfileDetails";
import SearchBar from "./SearchBar";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Avatar
            size="large"
            icon={<UserOutlined />}
            style={{ float: "right", margin: "16px" }}
          />
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {/* Your content goes here */}
            <Layout style={{ minHeight: "100vh" }}>
              <Content style={{ padding: "24px" }}>
                <div
                  className="site-layout-background"
                  style={{ padding: "24px", minHeight: "360px" }}
                >
                  <SearchBar />
                </div>
              </Content>
            </Layout>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
