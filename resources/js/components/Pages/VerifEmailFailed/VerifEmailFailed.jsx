import {  CloseCircleTwoTone } from '@ant-design/icons'
import { Card, ConfigProvider } from 'antd'
import React from 'react'
import './VerifEmailFailed.css'

const VerifEmailFailed = () => {
  return (
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
  )
}

export default VerifEmailFailed