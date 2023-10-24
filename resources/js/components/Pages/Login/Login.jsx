import React from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../../Pages/Login/Login.css";

const Login = () => {
    const onFinish = (values) => {
        console.log("Received values:", values);
    };

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
                        <a className="login-form-forgot" href="#" style={{ color: "#516557"}}>
                            Forgot password?
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            style={{ background: "#516557"}}
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Login;
