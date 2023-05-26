import { Result } from "antd";

export const CustomResult = (props) => {
  return <Result {...props}>{props.children}</Result>;
};
