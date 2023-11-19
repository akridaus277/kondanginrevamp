import { message } from "antd";
import { registerUser } from "../../../store/action.jsx";


export const success = () => {
        
        
    message.config({
        getContainer: () => document.getElementById('my-message'), // Specify the target container

    })
    message.open({
        type: "success",
        duration:3,
        content: "This is a prompt message with sticky",
        
        
    });

    
};

export const onFinish = (values) => {
    console.log("Menerima nilai-nilai:", values);
};



export const validateNoWa = (rule, value, callback) => {
    if (!value) {
        callback("Silakan masukkan nomor WhatsApp Anda!");
    } else if (!/^[0-9]+$/.test(value)) {
        callback("Nomor WhatsApp hanya boleh mengandung angka!");
    } else if (value.length <= 9) {
        callback("Nomor WhatsApp harus memiliki minimal 9 digit!");
    } else {
        callback(); // Validasi berhasil
    }
};


export const handleRegisteredirect = (responseStatus) => {
    console.log("jalan red");
       
    if (responseStatus === 200) {
        window.location.replace('../verifEmail');
    }
}


export const postRegister = (dispatch, body) => {
   
     dispatch(registerUser(body))
}

export const ErrorRegister = (dataError, status) => {
    if (status === 400) {

        message.config({
            getContainer: () => document.getElementById('my-message'), // Specify the target container
    
        })
        message.open({
            type: "error",
            duration:3,
            content: dataError,
        });
    }
}