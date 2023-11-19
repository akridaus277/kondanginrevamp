import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';

const initialState = {
    //login
    responseLogin: [],
    loadingLogin: false,

    responseLoginGoogle: [],
    loadingLoginGoogle: false,

    responseForgotPassword: [],
    loadingForgotPassword: false,

    responseResetPassword: [],
    loadingResetPassword: false,

    responseVerifEmail: [],
    loadingVerifEmail: false,

    responseRegister: [],
    loadingRegister: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":

            let responseLogin = action.payload ? action.payload : []
            return {
                ...state,
                responseLogin: responseLogin,
                loadingLogin: action.loadingLogin,

            }

        case "LOGIN_GOOGLE":

            let responseLoginGoogle = action.payload ? action.payload : []

            return {
                ...state,
                responseLoginGoogle: responseLoginGoogle,
                loadingLoginGoogle: action.loadingLoginGoogle
            }

        case "FORGOT_PASSWORD":

            let responseForgotPassword = action.payload ? action.payload : []

            return {
                ...state,
                responseForgotPassword: responseForgotPassword,
                loadingForgotPassword: action.loadingForgotPassword
            }

        case "RESET_PASSWORD":

            let responseResetPassword = action.payload ? action.payload : []

            return {
                ...state,
                responseResetPassword: responseResetPassword,
                loadingResetPassword: action.loadingResetPassword
            }

        case "VERIF_EMAIL":

            let responseVerifEmail = action.payload ? action.payload : []
            return {
                ...state,
                responseVerifEmail: responseVerifEmail,
                loadingVerifEmail: action.loadingVerifEmail
            }

        case "REGISTER_REQUEST":

            let responseRegister = action.payload ? action.payload : []
            return {
                ...state,
                responseRegister: responseRegister,
                loadingRegister: action.loadingRegister
            }

        default:
            return state;
    }
}

let store = createStore(reducer, applyMiddleware(thunk));

export default store

