import React, { useCallback, useState } from "react";
import { Card, Form, Input, Button, Checkbox, ConfigProvider, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../../Pages/Login/Login.css";
import { onFinish } from "./Login.js";
import {
    LoginSocialGoogle,
  } from 'reactjs-social-login';
  
  import {
    GoogleLoginButton,
  } from 'react-social-login-buttons';

  const REDIRECT_URI = 'http://localhost/'
  const REACT_APP_GG_APP_ID = "47362224264-pnsonsp71dats36hluj44s3ss76k3ruo.apps.googleusercontent.com"

const Login = () => {

    const [provider, setProvider] = useState('')
    const [profile, setProfile] = useState(null)

    const onLoginStart = useCallback(() => {
        alert('login start')
    }, [])

    const onLogoutSuccess = useCallback(() => {
        setProfile(null)
        setProvider('')
        alert('logout success')
    }, [])


    return (
        <div className="login-container">
            <Card className="login-card" hoverable>
                <h2 className="login-card-title">Login</h2>
                <div
                    className="logo-container"
                // style={{ height: "128px", width: "128px" }}
                >
                    <div className="login-logo">
                        <img
                            src="../images/icons/kondangin.png"
                            height={"128px"}
                            width={"128px"}
                            alt="Logo"
                        />
                    </div>

                </div>

                <ConfigProvider
                    theme={{
                        components: {

                            Input: {
                                colorPrimary: '#516557',
                                hoverBorderColor: '#516557',
                            }

                        },
                    }}
                >

                    <Form
                        name="login"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Username"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                noStyle
                                className="rememberMe-container"
                            >
                                <Checkbox className="rememberMe">Remember me</Checkbox>
                            </Form.Item>
                            <a className="login-form-forgot" href="#" style={{ color: "#516557" }}>
                                Forgot password?
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Space>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    style={{ background: "#516557" }}
                                >
                                    Log in
                                </Button>
                                <LoginSocialGoogle
                                    isOnlyGetToken
                                    client_id={REACT_APP_GG_APP_ID}
                                    onLoginStart={onLoginStart}
                                    onResolve={({ provider, data }) => {
                                    setProvider(provider)
                                    setProfile(data)
                                    console.log("isi provider : ",provider);
                                    console.log("isi data : ",data);
                                    console.log("success ya cok");
                                    }}
                                    onReject={(err) => {
                                    console.log(err)
                                    }}
                                >
                                    <GoogleLoginButton />
                                </LoginSocialGoogle>



                            </Space>
                        </Form.Item>
                    </Form>
                </ConfigProvider>
            </Card>
        </div>
    );
};

export default Login;
