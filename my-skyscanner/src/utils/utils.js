const utils = {
  success : (resCode,resMessage,message) => {
    return{
      resCode : resCode,
      success : true,
      resMessage : resMessage,
      message : message
    }
  },
  fail : (resCode,resMessage) => {
    return {
      resCode : resCode,
      success : false,
      resMessage : resMessage
    }
  }
}

module.exports = utils;