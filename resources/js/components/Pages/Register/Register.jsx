import React, { useEffect, useState } from "react";
import { Card, Form, Input, Button, Select, ConfigProvider, message, Divider } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, WhatsAppOutlined, GlobalOutlined, CompassOutlined } from "@ant-design/icons";
import "../../Pages/Register/Register.css"
import TextArea from "antd/es/input/TextArea";
import { handleCityChangeON, handleProvinceChangeON, handleRegisteredirect, onFinish, postRegister, success, validateNoWa } from "./Register.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import kodepos from '../../../store/kodepos.json'

const { Option } = Select;

const Register = () => {

    const state = useSelector((state) => state)

    const [isKlikRegister, setIsKlikRegister] = useState(false)

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [noHp, setNohp] = useState()
    const [address, setAddress] = useState()
    const [province, setProvince] = useState()
    const [city, setCity] = useState()
    const [district, setDistrict] = useState()

    //mamping select
    const [provinces, setProvinces] = useState([...new Set(kodepos.map(item => item.province))].filter(province => province != 'province'))
    const [cities, setCities] = useState([])
    const [districtMap, setDistrictMap] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        if (isKlikRegister) {
            postRegister(dispatch)
        }

    }, [])

    handleRegisteredirect(state.responseRegister.status)

    if (isKlikRegister === true && state.loadingRegister === false) {
        state.responseRegister = [],
            state.loadingRegister = true
        setIsKlikRegister(false)
    }

    const handleSubmit = () => {
        postRegister(dispatch, {
            "name": name,
            "email": email,
            "password": password,
            "no_hp": noHp,
            "alamat": address,
            "provinsi": province,
            "kota": city,
            "kecamatan": district,
        })

        setIsKlikRegister(true)
    }

    const handleProvinceChange = (value) => {
        setProvince(value);
        const filteredCities = kodepos
            .filter(item => item.province.includes(value))
            .map(item => item.city);


        setCities(filteredCities.length > 0 ? [...new Set(filteredCities)] : []);
        setCity(null);
        if (filteredCities.length > 0) {
            const filteredDistricts = kodepos
                .filter(item => item.city.includes(filteredCities[0]))
                .map(item => item.district);

            setDistrictMap(filteredDistricts.length > 0 ? [...new Set(filteredDistricts)] : []);
            setDistrict(null); 
        } else {
            setDistrictMap([]);
        }
    };

    const handleCityChange = (value) => {
        setCity(value);
    if (value) {
        const filteredDistricts = kodepos
            .filter(item => item.city.includes(value))
            .map(item => item.district);

        setDistrictMap(filteredDistricts.length > 0 ? [...new Set(filteredDistricts)] : []);
        setDistrict(null); 
    } else {
        setDistrictMap([]);
    }

    };

    const handleDistrictChange = (value) => {
        setDistrict(value)
    }

    






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
                            onFinish={handleSubmit}
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
                                    onChange={e => setName(e.target.value)}

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
                                    onChange={e => setEmail(e.target.value)}
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
                                    onChange={e => setPassword(e.target.value)}
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
                                    onChange={e => setNohp(e.target.value)}
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
                                    onChange={e => setAddress(e.target.value)}
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
                                <Select
                                    id="province"
                                    placeholder="Select Province"
                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    prefix={<GlobalOutlined className="site-form-item-icon" />}
                                    onChange={handleProvinceChange}
                                    options={provinces.map((province) => ({
                                        label: province,
                                        value: province,
                                    }))}
                                >
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
                                <Select
                                    id="city"

                                    placeholder="Select City"
                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    prefix={<CompassOutlined className="site-form-item-icon" />}
                                    onChange={handleCityChange}
                                    options={cities.map((city) => ({
                                        label: city,
                                        value: city,
                                    }))}
                                    disabled={cities.length === 0}
                                >
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
                                <Select
                                    id="district"

                                    placeholder="Select District"
                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    prefix={<CompassOutlined className="site-form-item-icon" />}
                                    onChange={handleDistrictChange}
                                    options={districtMap.map((district) => ({
                                        label: district,
                                        value: district,
                                    }))}

                                    disabled={!city}

                                >
                                    {/* Tambahkan opsi kecamatan di sini */}
                                </Select>
                            </Form.Item>

                            <Form.Item>

                                <Button
                                
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
