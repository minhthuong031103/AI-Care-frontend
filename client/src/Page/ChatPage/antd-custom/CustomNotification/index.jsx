import { notification } from 'antd';

export const CustomNotification = (props, type = "info") => {
  notification[type]({
    ...props
  });
};