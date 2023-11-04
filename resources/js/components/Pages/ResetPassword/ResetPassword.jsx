import React, { useEffect, useState } from 'react'

import { Button, Card, ConfigProvider, Divider, Form, Input } from 'antd'
import { onFinish } from './ResetPassword.js'
import { LockOutlined } from '@ant-design/icons'
import './ResetPassword.css'
import {handleNewPasswordChangeON } from './ResetPassword.js'

const ResetPassword = () => {
    const [form] = Form.useForm();

    const [isKonfirmasiPasswordDisabled, setIsKonfirmasiPasswordDisabled] = useState(true);

    
    const handleNewPasswordChange = (e) => {
        const newPasswordValue = e.target.value;
        setIsKonfirmasiPasswordDisabled(handleNewPasswordChangeON(newPasswordValue));
    };

    return (
        <div className="reset-password-password-container">
            <Card className="reset-password-password-card">
                <h2 className="reset-password-password-card-title">Reset Password</h2>
                <div
                    className="logo-container"
                // style={{ height: "128px", width: "128px" }}
                >
                    <div className="reset-password-password-logo">
                        <img
                            src="../images/icons/kondangin.png"
                            height={"128px"}
                            width={"128px"}
                            alt="Logo"
                        />
                    </div>


                </div>
                <div className='reset-password-password-word'><b>Forgot password?</b> You can reset your password by filling in the following form.</div>

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
                        form={form}
                        name="reset-password-password"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        
                    >
                        <Form.Item
                            name="newPassword"
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
                                placeholder="New Password"
                                onChange={handleNewPasswordChange}
                            />
                        </Form.Item>

                        <Form.Item
                            name="konfirmasiPassword"
                            rules={[
                                {
                                    required: true,
                                    message: "Silakan masukkan kata sandi Anda!",
                                },
                             
                                ({ getFieldValue }) => ({
                                    
                                    validator(_, value) {
                                        if (!value || getFieldValue("newPassword") === value) {
                                            return Promise.resolve();
                                        }else if(value.length < 6){
                                            return Promise.reject('Kata sandi harus memiliki minimal 6 karakter!'); 
                                        }else if(value.length >= 6){
                                            return Promise.reject("Kata sandi yang dikonfirmasi tidak cocok.");
                                        }


                                    },
                                }),
                            ]}
                            dependencies={['newPassword']} 
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="Confirm Password"
                                disabled={isKonfirmasiPasswordDisabled}
                            />
                        </Form.Item>



                        <Form.Item>


                            <div className="button-container">

                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="reset-password-password-form-button"
                                    style={{ background: "#516557", height: 'auto' }}
                                // size="large"

                                >
                                    Submit
                                </Button>

                                <Divider style={{ borderWidth: '2px', borderColor: 'black' }}><div style={{ justifyContent: 'center', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>OR</div></Divider>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="reset-password-password-form-button"
                                    style={{ background: "#516557", height: 'auto' }}
                                // size="large"

                                >
                                    Login Page
                                </Button>

                            </div>


                        </Form.Item>



                    </Form>
                </ConfigProvider>
            </Card>
        </div>
    )
}

export default ResetPassword