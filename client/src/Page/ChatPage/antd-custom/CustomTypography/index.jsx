import { Typography } from 'antd';

const { Paragraph } = Typography;

export const CustomParagraph = (props) => {
  return <Paragraph {...props}>{props.children}</Paragraph>;
};
