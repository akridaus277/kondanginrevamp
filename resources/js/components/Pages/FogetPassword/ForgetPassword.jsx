import React, { useEffect, useState } from 'react'
import { Card, Form, Input, Button, Checkbox, ConfigProvider, Space, Flex, Divider } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { onFinish, postForgotPassword } from './ForgetPassword.js';
import "../FogetPassword/ForgetPassword.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const ForgetPassword = () => {

    const state = useSelector((state) => state)
    const [email, setEmail] = useState()
    const [isKlikLogin, setIsKlikLogin] = useState(false)
    const dispatch = useDispatch()


    // useEffect(() => {
    //     if (isKlikLogin) {
    //         postForgotPassword()
    //     }
    // }, [])

    const handleSubmit = () => {
        postForgotPassword(dispatch,{
            "email": email,

        })

        // setIsKlikLogin(true)
    }

 

    

    return (
        <>
        <div id="my-message"></div>
        <div className="forget-password-container">
            <Card className="forget-password-card">
                <h2 className="forget-password-card-title">Forgot Password</h2>
                <div
                    className="logo-container"
                // style={{ height: "128px", width: "128px" }}
                >
                    <div className="forget-password-logo logo-animation">
                        <img
                            src="../images/icons/kondangin.png"
                            height={"128px"}
                            width={"128px"}
                            alt="Logo"
                        />
                    </div>


                </div>
                <div className='forget-password-word'><b>Forgot password?</b> You can reset your password by filling in the following form.</div>

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
                        name="forget-password"
                        initialValues={{ remember: true }}
                        onFinish={handleSubmit}
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
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Item>



                        <Form.Item>


                            <div className="button-container">

                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="forget-password-form-button"
                                    style={{ background: "#516557", height: 'auto' }}
                                // size="large"

                                >
                                    Request Reset Password
                                </Button>

                                <Divider style={{ borderWidth: '2px', borderColor: 'black' }}><div style={{ justifyContent: 'center', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>OR</div></Divider>
                                <Link to={"/login"} className='forget-password-form-button'>
                                    <Button
                                        type="primary"
                                        // htmlType="submit"
                                        className="forget-password-form-button"
                                        style={{ background: "#516557", height: 'auto' }}
                                    // size="large"

                                    >
                                        Login Page
                                    </Button>
                                </Link>

                            </div>


                        </Form.Item>



                    </Form>
                </ConfigProvider>
            </Card>
        </div>

        </>
    )
}

export default ForgetPassword