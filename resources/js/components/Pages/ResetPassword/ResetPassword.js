import { message } from "antd";
import { passwordReset } from "../../../store/action.jsx";

export const onFinish = (values) => {
  console.log("Received values:", values);
};


export const handleNewPasswordChangeON = (newPasswordValue) => {
  if (newPasswordValue && newPasswordValue.length >= 6) {
    return false;
  } else {
    return true;
  }
};

export const handleRedirect = (responseStatus) => {
    if (responseStatus === 200) {

      setTimeout(() => {
        window.location.replace('../../login');
      }, 3000);

    }
}

export const postPasswordReset = (dispatch, body) => {

    
    dispatch(passwordReset(body))
}

export const errorResetPassword = (dataError, status) => {
  if (status === 400) {
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