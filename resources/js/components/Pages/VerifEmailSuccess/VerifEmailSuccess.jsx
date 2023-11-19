import { Button, Card, ConfigProvider, Result, message } from 'antd'
import React, { useEffect } from 'react'
import './VerifEmailSuccess.css'
import { CheckCircleFilled, CheckCircleOutlined, CheckCircleTwoTone } from '@ant-design/icons'


const VerifEmailSuccess = () => {
    useEffect(() =>{
        message.config({
            getContainer: () => document.getElementById('my-message'), // Specify the target container
    
        })
        message.open({
            type:'success',
            content:'You will be redirected to the login page in 3 seconds',
            duration: 3
        })
        setTimeout(() => {
            window.location.replace('../login');
        }, 3000);
    }, [])
    return (
        <>
        <div id="my-message"></div>
        <div className="verif-email-container">
            <Card className="verif-email-card">
            <h2 className="verif-email-card-title">Welcome to Kondangin.org</h2>
                <div
                    className="logo-container"

                >
                    <div className="verif-email-logo logo-animation">
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
                    <center>

                        <p style={{ fontWeight: 'bold', fontSize: '14px' }}>"Your email has been successfully verified"</p>
                        <p>In a moment you will be directed to the login page</p>
                        <div><CheckCircleTwoTone twoToneColor="#52c41a" className='icon-animation-success' style={{ fontSize: '40px', color: '#516557' }} /></div>
                    </center>


                </ConfigProvider>
            </Card>
        </div>
        </>
    )
}

export default VerifEmailSuccess