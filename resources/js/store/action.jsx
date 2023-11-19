import { message } from "antd"
import { errorGoogle, errorLogin } from "../components/Pages/Login/Login.js"
import { errorEmail } from "../components/Pages/FogetPassword/ForgetPassword.js"
import { errorResetPassword } from "../components/Pages/ResetPassword/ResetPassword.js"
import { errorVerif } from "../components/Pages/VerifEmail/VerifEmail.js"
import { ErrorRegister } from "../components/Pages/Register/Register.js"


const BASE_URL = `${window.location.origin}/api${decodeURIComponent(window.location.pathname)}`

const LOGIN = `${window.location.origin}/api/login`

const LOGIN_GOOLGE = `${window.location.origin}/api/login-google`
const PASSWORD_FORGOT = `${window.location.origin}/api/password/email`
const PASSWORD_RESET = `${window.location.origin}/api/password/reset`
const VERIF_EMAIL = `${window.location.origin}/api/email/verify/wait`
const REGISTER = `${window.location.origin}/api/register`




export const registerUser = (body) => {
    message.config({
        getContainer: () => document.getElementById('my-message'), // Specify the target container

    })
    message.open({
        type: 'loading',
        content: 'Loading...',
        duration: 0,
    });
    return async (dispatch) => {
        await fetch(REGISTER, {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        
        }).then(async response => {
            message.destroy()
            if (response.status === 200) {
                let dataRes = await response.json()
                let statusRes = response.status

                let responseTemp = {
                    dataRegister : dataRes.data,
                    status: statusRes
                }

                message.config({
                    getContainer: () => document.getElementById('my-message'), // Specify the target container

                })

                message.open({
                    type: "success",
                    duration: 3,
                    content: responseTemp.dataRegister

                });

                dispatch({
                    type :"REGISTER_REQUEST",
                    loadingRegister: false,
                    payload: responseTemp
                })
                
            }else if (response.status === 400) {
                let dataError = await response.json()

                ErrorRegister(dataError.error.email[0], response.status)
                ErrorRegister(dataError.error.no_hp[0], response.status)
            }
        })
    }
}

export const loginWithGoogle = (token) => {
    return async (dispatch) => {

        const response = await fetch(LOGIN_GOOLGE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        });

        if (response.status === 200) {
            let dataku = await response.json()
            let statusLogin = response.status

            let responseLoginTemp = {
                tokenGoogle: dataku.data.token,
                statusGoogle: statusLogin
            }



            dispatch({
                type: "LOGIN_GOOGLE",
                loadingLoginGoogle: false,
                payload: responseLoginTemp
            })

        } else if (response.status === 401) {

            let dataError = await response.json()

            errorGoogle(dataError.error)

        }
    }
}



export const loginUser = (credentials) => {
    return async (dispatch) => {



        const response = await fetch(LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)

        });

        if (response.status === 200) {
            let dataUser = await response.json();
            let statusLogin = response.status;

            let responseLoginTemp = {
                token: dataUser.data.token,
                status: statusLogin
            };

            dispatch({
                type: "LOGIN_REQUEST",
                loadingLogin: false,
                payload: responseLoginTemp
            });

        } else if (response.status === 401) {

            let dataError = await response.json();

            errorLogin(dataError.error, response.status)

        } else if (response.status === 403) {
            let dataError = await response.json();

            errorLogin(dataError.error.email, response.status)
        }

    }
}

export const emailForgot = (body) => {

    message.config({
        getContainer: () => document.getElementById('my-message'), // Specify the target container

    })
    message.open({
        type: 'loading',
        content: 'Loading...',
        duration: 0,
    });
    return async (dispatch) => {

        await fetch(PASSWORD_FORGOT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)

        }).then(async response => {
            message.destroy()
            if (response.status === 200) {

                let dataRes = await response.json()
                let statusRes = response.status

                let responseRes = {
                    dataEmail: dataRes.data,
                    status: statusRes
                }

              

                message.config({
                    getContainer: () => document.getElementById('my-message'), // Specify the target container

                })

                message.open({
                    type: "success",
                    duration: 3,
                    content: responseRes.dataEmail

                });

                dispatch({
                    type: "FORGOT_PASSWORD",
                    loadingForgotEmail: false,
                    payload: responseRes
                })



            } else if (response.status === 404) {
                let dataError = await response.json()

                errorEmail(dataError.error, response.status)

            } else if (response.status === 500) {
                let dataError = await response.json()

                errorEmail(dataError.error, response.status)
            }
        })
    }
}

export const passwordReset = (body) => {

    message.config({
        getContainer: () => document.getElementById('my-message'), // Specify the target container

    })
    message.open({
        type: 'loading',
        content: 'Loading...',
        duration: 0,
    });

    return async (dispatch) => {
        await fetch(PASSWORD_RESET, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)

        }).then(async response => {
            message.destroy()
            if (response.status === 200) {
                let dataRes = await response.json()
                let statusRes = response.status

                let responseRes = {
                    dataReset: dataRes.data,
                    status: statusRes
                }
                message.config({
                    getContainer: () => document.getElementById('my-message'), // Specify the target container

                })
                message.open({
                    type: "success",
                    duration: 3,
                    content: responseRes.dataReset + " switch login page in 3 seconds!"

                });
                dispatch({
                    type: "RESET_PASSWORD",
                    loadingResetPassword: false,
                    payload: responseRes
                })

            } else if (response.status === 400) {
                let dataError = await response.json()

                errorResetPassword(dataError.error, response.status)
            }
        })
    }
}

export const verifEmail = (body) => {
    return async (dispatch) => {
        await fetch(VERIF_EMAIL, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        
        }).then(async response => {
            if (response.status === 200) {
                let dataRes = await response.json()
                let statatusRes = response.status

                let responseRes = {
                    dataVErif : dataRes.data,
                    status: statatusRes
                }

                message.config({
                    getContainer: () => document.getElementById('my-message'), // Specify the target container

                })
                message.open({
                    type: "success",
                    duration: 3,
                    content: responseRes.dataVErif

                });

                dispatch({
                    type: "VERIF_EMAIL",
                    loadingVerifEmail: false,
                    payload: responseRes
                })

            }else if (response.status === 404) {
                let dataError = await response.json()

                errorVerif(dataError.error, response.status)
            
            }else if (response.status === 403) {
                let dataError = await response.json()

                errorVerif(dataError.error, response.status)
            }
        })
    }
}