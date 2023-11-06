import React, { useCallback, useState } from "react";
import { Card, Form, Input, Button, Checkbox, ConfigProvider, Space, Flex, Divider } from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined, MailOutlined } from "@ant-design/icons";
import "../../Pages/Login/Login.css";
import { onFinish } from "./Login.js";
import {
    LoginSocialGoogle,
} from 'reactjs-social-login';
import { Link } from "react-router-dom";



//   const REDIRECT_URI = 'http://localhost/'
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
            <Card className="login-card">
                <h2 className="login-card-title">Login</h2>
                <div
                    className="logo-container"
                // style={{ height: "128px", width: "128px" }}
                >
                    <div className="login-logo logo-animation">
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
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Silakan masukkan alamat email Anda!",
                                },
                                {
                                    type: "email",
                                    message: "Silakan masukkan alamat email yang valid!",
                                },
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="Email"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Silakan masukkan kata sandi Anda!",
                                },
                                {
                                    min: 6,
                                    message: "Kata sandi harus memiliki minimal 6 karakter!",
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
                            <Link to={"/forgetPassword"}>
                            <a className="login-form-forgot"  style={{ color: "#516557" }}>
                                Forgot password?
                            </a>
                            </Link>
                          
                        </Form.Item>

                        <Form.Item>


                            <div className="button-container">

                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    style={{ background: "#516557", height: 'auto' }}
                                // size="large"

                                >
                                    Log in
                                </Button>
                                <LoginSocialGoogle
                                    className="login-form-google"
                                    scope={'profile email'}
                                    isOnlyGetToken
                                    client_id={REACT_APP_GG_APP_ID}
                                    onLoginStart={onLoginStart}
                                    onResolve={({ provider, data }) => {
                                        setProvider(provider)
                                        setProfile(data)
                                        console.log("isi provider : ", provider);
                                        console.log("isi data : ", data);
                                        console.log("success ya cok");
                                    }}
                                    onReject={(err) => {
                                        console.log(err)
                                    }}

                                >
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-google"
                                        style={{ background: "white", color: '#516557', textShadow: 'initial', borderColor: '#516557', height: 'auto' }}
                                        // size="large"
                                        icon={<GoogleOutlined />}
                                    >
                                        Log in with Google
                                    </Button>
                                </LoginSocialGoogle>

                                <Divider style={{ borderWidth: '2px', borderColor: 'black' }}><div style={{ justifyContent: 'center', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>OR</div></Divider>
                                <Link to={"/register"} className="login-form-button">
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button"
                                        style={{ background: "#516557", height: 'auto' }}


                                    >
                                        Register
                                    </Button>
                                </Link>

                            </div>


                        </Form.Item>



                    </Form>
                </ConfigProvider>
            </Card>
        </div>
    );
};

export default Login;
