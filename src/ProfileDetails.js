import React from "react";
import { Typography, List, Row, Col } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  IdcardOutlined,
  MailOutlined
} from "@ant-design/icons";

const ProfileDetails = () => {
  // Dummy data for the profile details
  const profileDetails = {
    name: "John Doe",
    serviceLine: "Engineering",
    team: "Web Development",
    employeeId: "E12345",
    domainEmail: "john.doe@example.com"
  };

  const profileList = [
    { label: "Name", icon: <UserOutlined />, value: profileDetails.name },
    {
      label: "Service Line",
      icon: <TeamOutlined />,
      value: profileDetails.serviceLine
    },
    { label: "Team", icon: <TeamOutlined />, value: profileDetails.team },
    {
      label: "Employee ID",
      icon: <IdcardOutlined />,
      value: profileDetails.employeeId
    },
    {
      label: "Domain Email",
      icon: <MailOutlined />,
      value: profileDetails.domainEmail
    }
  ];

  return (
    <div>
      <Col span={6} style={{ textAlign: "center" }}></Col>
      <Col span={12}>
        <List
          itemLayout="horizontal"
          dataSource={profileList}
          renderItem={(item) => (
            <List.Item>
              {item.icon} <strong>{item.label}:</strong> {item.value}
            </List.Item>
          )}
        />
      </Col>
    </div>
  );
};

export default ProfileDetails;
