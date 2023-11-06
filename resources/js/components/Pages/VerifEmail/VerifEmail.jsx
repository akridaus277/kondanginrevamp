import { MailOutlined } from '@ant-design/icons'
import { Button, Card, ConfigProvider, Divider, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { onFinish } from './VerifEmail.js'
import './VerifEmail.css'

const VerifEmail = () => {
  return (
    <div className="verif-container">
    <Card className="verif-card">
        <h2 className="verif-card-title">Email Verification</h2>
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

        <div style={{marginBottom:'15px'}}>If you fail to verify your email, you need to re-verify by filling in the form below</div>

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
         

                <Form.Item>


                    <div className="button-container">

                        <Button
                            type="primary"
                            htmlType="submit"
                            className="verif-form-button"
                            style={{ background: "#516557", height: 'auto' }}
                        // size="large"

                        >
                            Resend
                        </Button>

                

                    </div>


                </Form.Item>



            </Form>
        </ConfigProvider>
    </Card>
</div>
  )
}

export default VerifEmail