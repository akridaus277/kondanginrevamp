import React from "react";
import { Card, Form, Input, Button, Select, ConfigProvider, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import "../../Pages/Register/Register.css"
import TextArea from "antd/es/input/TextArea";
import { onFinish, success, validateNoWa } from "./Register";

const { Option } = Select;

const Register = () => {



    return (
        <>
        <div id="my-message"></div>
        <div className="registration-container">
            
          
                <Card className="registration-card" hoverable>
                    <h2 className="registration-card-title">Registrasi</h2>
                    <div className="logo-container">
                        <div className="registration-logo">
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
                                    placeholder="Nama"

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
                                    placeholder="Kata Sandi"
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
                                    placeholder="Nomor WhatsApp"
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
                                <TextArea
                                    prefix={<UserOutlined />}
                                    placeholder="Alamat"
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
                                <Select placeholder="Pilih Provinsi">
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
                                <Select placeholder="Pilih Kota">
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
                                <Select placeholder="Pilih Kecamatan">
                                    {/* Tambahkan opsi kecamatan di sini */}
                                </Select>
                            </Form.Item>

                            <Form.Item>
                            
                                <Button
                                    onClick={success}
                                    type="primary"
                                    htmlType="submit"
                                    className="registration-form-button"
                                    style={{ background: "#516557" }}
                                >
                                    Daftar
                                </Button>
                            </Form.Item>
                        </Form>
                    </ConfigProvider>
                </Card>
            </div>
        </>
    );
};

export default Register;
