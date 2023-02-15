const { notification } = require("antd");

export const handlingError = (error) => {
  notification.error({
    message: "Error",
    description: error.message,
  });
};

export const handlingSuccess = (success) => {
  notification.success({
    message: "Success",
    description: success.message,
  });
};
