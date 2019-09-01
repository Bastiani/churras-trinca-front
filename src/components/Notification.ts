import { notification } from 'antd';

export const openNotificationWithIcon = (
  type: string,
  message: string,
  description: string
) => {
  // @ts-ignore
  notification[type]({
    message,
    description
  });
};
