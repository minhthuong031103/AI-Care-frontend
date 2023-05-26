import { Button, message } from "antd";

export const CustomMessage = (props, type) => {
  message.config({
    top: 50,
  });
  switch (type) {
    case "error":
      error(props);
      break;
    case "warning":
      warning(props);
      break;
    case "success":
      success(props);
      break;
    case "loading":
      loading(props);
      break;
    case "info":
      info(props);
      break;
    default:
      open(props);
      break;
  }
};

const success = (props) => {
  message.success({
    ...props,
  });
};

const info = (props) => {
  message.info({
    ...props,
  });
};

const error = (props) => {
  message.error({
    ...props,
  });
};

const warning = (props) => {
  message.warning({
    ...props,
  });
};

const loading = (props) => {
  message.loading({
    ...props,
  });
};
const open = (props) => {
  message.oepn({
    ...props,
  });
};
