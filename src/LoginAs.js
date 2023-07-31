import React, { useState } from "react";
import { Card, Button, Space, Typography } from "antd";
import InchargeForm from "./InchargeForm";
const { Title } = Typography;
const LoginAs = ({ onSelect }) => {
  const [selectedRoleForInc, setSelectedRoleForInc] = useState(false);
  const [selectedRoleForMem, setSelectedRoleForMem] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div>
        <Title
          level={3}
          style={{ color: "#1677ff", margin: "30px", marginTop: "4rem" }}
        >
          Are you want to login as:
        </Title>
        <Space
          direction="horizontal"
          style={{
            marginLeft: "50px"
          }}
        >
          <div
            className="cursor-pointer"
            onClick={() => {
              setSelectedRoleForMem(false);
              setSelectedRoleForInc(!selectedRoleForInc);
            }}
          >
            <Card
              title="Incharge"
              style={{
                width: 200,
                height: 200,
                color: "rgb(161 161 170)",
                margin: "3rem",
                borderColor: `${selectedRoleForInc ? "#1677ff" : "#f0f0f0"}`
              }}
            >
              <p>It will raise a request to admin.</p>
            </Card>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setSelectedRoleForInc(false);
              setSelectedRoleForMem(!selectedRoleForMem);
            }}
          >
            <Card
              title="Member"
              style={{
                width: 200,
                height: 200,
                color: "rgb(161 161 170)",
                borderColor: `${selectedRoleForMem ? "#1677ff" : "#f0f0f0"}`
              }}
            >
              <p>To be a member is free😜</p>
            </Card>
          </div>
        </Space>
      </div>
      <Button
        style={{
          display: "flex",
          margin: "auto",
          visibility: `${
            selectedRoleForMem || selectedRoleForInc ? "visible" : "hidden"
          }`
        }}
        type="primary"
        onClick={showModal}
      >
        Submit
      </Button>
      <InchargeForm
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default LoginAs;
