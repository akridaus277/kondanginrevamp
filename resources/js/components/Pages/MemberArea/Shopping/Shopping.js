//  undangan
 export const showModalUndangan = (setIsModalOpenUndangan) => {
    setIsModalOpenUndangan(true);
  };
  export  const handleOkUndangan = (setIsModalOpenUndangan) => {
    setIsModalOpenUndangan(false);
  };
 
  export const handleCancelUndangan = (setIsModalOpenUndangan) => {
    setIsModalOpenUndangan(false);
  };


//  wa blast
  export const showModalWaBlast = (setIsModalOpenWaBlast) => {
    setIsModalOpenWaBlast(true);
  };
  export  const handleOkWaBlast = (setIsModalOpenWaBlast) => {
    setIsModalOpenWaBlast(false);
  };
 
  export const handleCancelWaBlast = (setIsModalOpenWaBlast) => {
    setIsModalOpenWaBlast(false);
  };

  // company profile
  export const showModalCompany = (setIsModalOpenCompany) => {
    setIsModalOpenCompany(true);
  };
  export  const handleOkCompany = (setIsModalOpenCompany) => {
    setIsModalOpenCompany(false);
  };
 
  export const handleCancelCompany = (setIsModalOpenCompany) => {
    setIsModalOpenCompany(false);
  };

  //sumbit add to invitation
  export const onFinishInvitation = (values) => {
    console.log('Success:', values);
  };

  export const onFinishFailedInvitation = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
