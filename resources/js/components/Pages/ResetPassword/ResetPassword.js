
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