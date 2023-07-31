import React from "react";
import { Button, Form, Input, Modal } from "antd";

const InchargeForm = ({ setIsModalVisible, isModalVisible, handleCancel }) => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Raise Request"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            name="centerName"
            rules={[
              { required: true, message: "Please input the Center Name!" }
            ]}
          >
            <Input placeholder="Center Name" />
          </Form.Item>
          <Form.Item
            name="connectedTemple"
            rules={[
              { required: true, message: "Please input the Connected Temple!" }
            ]}
          >
            <Input placeholder="Connected Temple" />
          </Form.Item>
          <Form.Item
            name="centerAuthority"
            rules={[
              { required: true, message: "Please input the Center Authority!" }
            ]}
          >
            <Input placeholder="Center Authority" />
          </Form.Item>
          <Form.Item
            name="centerInchargeNumber"
            rules={[
              {
                required: true,
                message: "Please input the Center Incharge Number!"
              }
            ]}
          >
            <Input placeholder="Center Incharge Mob Number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Raise Request
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default InchargeForm;
