import React from "react";
import { Card, Form, Input, Button, Select, ConfigProvider, message, Divider } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import "../../Pages/Register/Register.css"
import TextArea from "antd/es/input/TextArea";
import { onFinish, success, validateNoWa } from "./Register";
import { Link } from "react-router-dom";

const { Option } = Select;

const Register = () => {



    return (
        <>
            <div id="my-message"></div>
            <div className="registration-container">
                <Card className="registration-card">
                    <h2 className="registration-card-title">Register</h2>
                    <div className="logo-container">
                        <div className="registration-logo logo-animation">
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


                                },
                                TextArea: {
                                    colorPrimary: '#516557',
                                    hoverBorderColor: '#516557',

                                },
                                Select: {
                                    colorPrimary: '#516557',
                                    colorPrimaryHover: '#516557'

                                },


                            },
                        }}
                    >

                        <Form
                            name="registration"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="nama"
                                id="nama"
                                rules={[
                                    {
                                        required: true,
                                        message: "Silakan masukkan nama Anda!",
                                    },
                                ]}
                            >

                                <Input
                                    prefix={<UserOutlined />}
                                    placeholder="Name"

                                />

                            </Form.Item>



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


                            <Form.Item
                                name="noWa"
                                rules={[
                                    {
                                        required: true,
                                        validator: validateNoWa,
                                    },

                                ]}
                            >
                                <Input
                                    prefix={<WhatsAppOutlined />}
                                    placeholder="WhatsApp Number"
                                />
                            </Form.Item>

                            <Form.Item
                                name="alamat"
                                rules={[
                                    {
                                        required: true,
                                        message: "Silakan masukkan alamat Anda!",
                                    },
                                    {
                                        min: 6,
                                        message: "Alamat harus memiliki minimal 6 karakter!",
                                    },
                                ]}
                            >
                                <Input.TextArea
                                    prefix={<UserOutlined />}
                                    placeholder="Address"
                                />
                            </Form.Item>

                            <Form.Item
                                name="provinsi"
                                rules={[
                                    {
                                        required: true,
                                        message: "Silakan pilih provinsi Anda!",
                                    },
                                ]}
                            >
                                <Select placeholder="Select Province">
                                    {/* Tambahkan opsi provinsi di sini */}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="kota"
                                rules={[
                                    {
                                        required: true,
                                        message: "Silakan pilih kota Anda!",
                                    },
                                ]}
                            >
                                <Select placeholder="Select City">
                                    {/* Tambahkan opsi kota di sini */}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="kecamatan"
                                rules={[
                                    {
                                        required: true,
                                        message: "Silakan pilih kecamatan Anda!",
                                    },
                                ]}
                            >
                                <Select placeholder="Select Subdistrict">
                                    {/* Tambahkan opsi kecamatan di sini */}
                                </Select>
                            </Form.Item>

                            <Form.Item>

                                <Button
                                    onClick={success}
                                    type="primary"
                                    htmlType="submit"
                                    className="registration-form-button-register"
                                    style={{ background: "#516557" }}
                                >
                                    Register
                                </Button>
                                <Divider style={{ borderWidth: '2px', borderColor: 'black' }}><div style={{ justifyContent: 'center', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>OR</div></Divider>
                                <Link to={"/login"} className="registration-form-button-login">
                                <Button
                                    onClick={success}
                                    type="primary"
                                    htmlType="submit"
                                    className="registration-form-button-login"
                                    style={{ background: "#516557" }}
                                >
                                    Log in
                                </Button>
                                </Link>
                            </Form.Item>
                        </Form>
                    </ConfigProvider>
                </Card>
            </div>
        </>
    );
};

export default Register;
