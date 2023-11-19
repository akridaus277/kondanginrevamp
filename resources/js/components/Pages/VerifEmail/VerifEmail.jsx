import { MailOutlined } from '@ant-design/icons'
import { Button, Card, ConfigProvider, Divider, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { onFinish, postVerifEmail } from './VerifEmail.js'
import './VerifEmail.css'
import { useDispatch } from 'react-redux'

const VerifEmail = () => {
    const [email, setEmail] = useState()
    const dispatch = useDispatch()

    const [isKlikLogin, setIsKlikLogin] = useState(false)



    useEffect(() => {
        if (isKlikLogin) {
            postVerifEmail()
        }
    }, [])

    const handleSubmit = () => {
        postVerifEmail(dispatch, {
            "email": email
        })
        setIsKlikLogin(true)
    }
    return (
        <>
            <div id="my-message"></div>
            <div className="verif-container">
                <Card className="verif-card">
                    <h2 className="verif-card-title">Welcome to Kondangin.org <br />Email Verification</h2>
                    <div
                        className="logo-container"
                    // style={{ height: "128px", width: "128px" }}
                    >
                        <div className="verif-logo logo-animation">
                            <img
                                src="../images/icons/kondangin.png"
                                height={"128px"}
                                width={"128px"}
                                alt="Logo"
                            />
                        </div>

                    </div>

                    <div style={{ marginBottom: '15px' }}>If you fail to verify your email, you need to re-verify by filling in the form below</div>

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
                            name="verif"
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
                                        className="verif-form-button"
                                        style={{ background: "#516557", height: 'auto' }}
                               

                                    >
                                        Resend
                                    </Button>



                                </div>


                            </Form.Item>



                        </Form>
                    </ConfigProvider>
                </Card>
            </div>
        </>
    )
}

export default VerifEmail