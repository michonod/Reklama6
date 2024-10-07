import {
  UserOutlined,
  HeartOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { IconButton } from "@atoms";
import { RightContainer } from "./styles";

const iconStyle = { fontSize: "30px", color: "#6c757d" };
const rightIcons = [
  {
    type: "questionmark",
    icon: <QuestionCircleOutlined style={iconStyle} />,
  },
  { type: "heart", icon: <HeartOutlined style={iconStyle} /> },
  {
    type: "user",
    icon: <UserOutlined style={iconStyle} />,
  },
];

export const RightSection = () => {
  return (
    <RightContainer>
      {rightIcons.map(({ icon }) => (
        <IconButton type="link" icon={icon} size="large" />
      ))}
    </RightContainer>
  );
};
