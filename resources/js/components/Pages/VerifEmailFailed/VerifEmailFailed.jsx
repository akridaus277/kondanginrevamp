import {  CloseCircleTwoTone, ExclamationCircleOutlined } from '@ant-design/icons'
import { Card, ConfigProvider, Modal } from 'antd'
import React, { useEffect } from 'react'
import './VerifEmailFailed.css'

const VerifEmailFailed = () => {

    useEffect(() => {

        setTimeout(() => {
            // window.location.replace('../verifEmail');
            Modal.confirm({
                title: 'Confirm',
                icon: <ExclamationCircleOutlined />,
                content: 'Check your email. Make sure you receive the latest verification email from "KONDANGIN.ORG"',
                okText: 'Already',
                cancelText: 'Not yet',
              });
        }, 2000);
    },[])
  return (
    <>
    <div id="my-message"></div>
    <div className="verif-email-failed-container">
    <Card className="verif-email-failed-card">
    <h2 className="verif-email-failed-card-title">Email Verification Failed</h2>

        <div
            className="logo-container"

        >
            <div className="verif-email-failed-logo logo-animation">
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

                <p style={{ fontWeight: 'bold', fontSize: '14px' }}>"Your email failed to be verified"</p>
                <p>In a moment you will be directed to the email verification page</p>
                <div><CloseCircleTwoTone twoToneColor="red" className='icon-animation' style={{ fontSize: '40px', color: '#516557' }} /></div>
            </center>


        </ConfigProvider>
    </Card>
</div>
</>
  )
}

export default VerifEmailFailed