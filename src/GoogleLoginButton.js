import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOutlined } from "@ant-design/icons";
import { Button } from "antd";
const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLogin
      clientId="1071711178826-i201jdem7rodq246662vvp5t8k0861r1.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      icon={<GoogleOutlined />}
      className="google-login-button anticon"
    />
  );
};

export default GoogleLoginButton;
