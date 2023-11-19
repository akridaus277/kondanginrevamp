import React, { useEffect, useState } from 'react'

import { Button, Card, ConfigProvider, Divider, Form, Input, message } from 'antd'
import { handleRedirect, onFinish, postPasswordReset } from './ResetPassword.js'
import { LockOutlined } from '@ant-design/icons'
import './ResetPassword.css'
import {handleNewPasswordChangeON } from './ResetPassword.js'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const ResetPassword = () => {

    const state = useSelector((state) => state)
    const queryParameters = new URLSearchParams(window.location.search);
    const pathWithoutKey = window.location.pathname?.split('/').pop();
    const token = pathWithoutKey  || '';
    const email = queryParameters.get("email")
    const [isKlikLogin, setIsKlikLogin] = useState(false)
    const [isKonfirmasiPasswordDisabled, setIsKonfirmasiPasswordDisabled] = useState(true);
    const [password, setPassword] = useState()
    const [passwordConfirmation, setPasswordConfirmation] = useState()
    const [form] = Form.useForm();
    const dispatch = useDispatch()


    useEffect(() => {
        if (isKlikLogin) {
            postPasswordReset()
        }
    }, [])



    const handleSubmit = () => {
        postPasswordReset(dispatch,{
            "token" : token,
            "email" : email,
            "password" : password,
            "password_confirmation": passwordConfirmation
        })
        setIsKlikLogin(true)
    }

    handleRedirect(state.responseResetPassword.status)
    
    const handleNewPasswordChange = (e) => {
        const newPasswordValue = e.target.value;
        setIsKonfirmasiPasswordDisabled(handleNewPasswordChangeON(newPasswordValue));
        setPassword(newPasswordValue)
    };

    return (
        <>
        <div id="my-message"></div>
        <div className="reset-password-password-container">
            <Card className="reset-password-password-card">
                <h2 className="reset-password-password-card-title">Reset Password</h2>
                <div
                    className="logo-container"
                // style={{ height: "128px", width: "128px" }}
                >
                    <div className="reset-password-password-logo logo-animation">
                        <img
                            src="../../images/icons/kondangin.png"
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
                        onFinish={handleSubmit}
                        
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
                                onChange={e => setPasswordConfirmation(e.target.value)}
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
                               
                               <Link to={"/login"} className='reset-password-password-form-button'>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="reset-password-password-form-button"
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

export default ResetPassword