import { message } from "antd";
import { verifEmail } from "../../../store/action.jsx";

export const onFinish = (values) => {
    console.log("Received values:", values);
};

export const postVerifEmail = (dispatch, body) => {
    dispatch(verifEmail(body))
}



export const errorVerif = (dataError, status) =>{

    if (status === 404 ) {
        message.config({
            getContainer: () => document.getElementById('my-message'), // Specify the target container

        })
        message.open({
            type: "error",
            duration: 3,
            content: dataError,


        });
    }else if (status === 403) {
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