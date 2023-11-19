import { message } from "antd";
import { loginUser, loginWithGoogle } from "../../../store/action.jsx";
import { setToken } from "../../../helper/auth.jsx";


export const onFinish = (values) => {
    console.log("Received values:", values);
};


export const postLogin = (dispatch, body) => {
     dispatch(loginUser(body))
}

export const postLoginGoogle = (dispatch,body) => {
    dispatch(loginWithGoogle(body))
}

export const setTokenLogin = (token) => {
      setToken(token)
}

export const setTokenLoginGoogle = (token) => {


    setToken(token)
}

export const handleLoginRedirect = (responseStatus) => {
       
    if (responseStatus === 200) {
        window.location.replace('../memberArea');
    }
}


export const errorLogin = (dataError, status) => {


    if (status === 401) {
        message.config({
            getContainer: () => document.getElementById('my-message'), // Specify the target container

        })
        message.open({
            type: "error",
            duration: 3,
            content: dataError,


        });
    } else if (status === 403) {


        message.config({
            getContainer: () => document.getElementById('my-message'), // Specify the target container

        })
        message.open({
            type: "error",
            duration:3,
            content: dataError + "You will be directed to the email verification page in 3 seconds!",


        });    

        setTimeout(()=>{

        window.location.replace('../verifEmail')
        }, 3000)
  



    }

};

export const errorGoogle = (dataError) => {

    message.config({
        getContainer: () => document.getElementById('my-message'), // Specify the target container

    })
    message.open({
        type: "error",
        duration: 3,
        content: dataError,
    });

    setTimeout(()=>{

        window.location.replace('../login')
        }, 3000)
}