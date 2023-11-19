import { message } from "antd";
import { emailForgot } from "../../../store/action.jsx";

export const onFinish = (values) => {
    console.log("Received values:", values);
};


export const postForgotPassword = (dispatch, body) =>{

    dispatch(emailForgot(body))
}


export const errorEmail = (dataError, status) =>{

    if (status === 404 ) {

        message.config({
            getContainer: () => document.getElementById('my-message'), // Specify the target container

        })
        message.open({
            type: "error",
            duration: 3,
            content: dataError,


        });
    } else if (status === 500) {
        message.config({
            getContainer: () => document.getElementById('my-message'), // Specify the target container

        })
        message.open({
            type: "error",
            duration: 3,
            content: dataError,


        });
    }
    
}
