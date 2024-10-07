import {
  UserOutlined,
  HeartOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { IconButton } from "@atoms";
import { RightContainer } from "./styles";
import Link from "next/link";

const iconStyle = { fontSize: "30px", color: "#6c757d" };
const rightIcons = [
  {
    type: "questionmark",
    icon: <QuestionCircleOutlined style={iconStyle} />,
    link: "/help",
  },
  { type: "heart", icon: <HeartOutlined style={iconStyle} />, link: "" },
  {
    type: "user",
    icon: <UserOutlined style={iconStyle} />,
    link: "",
  },
];

export const RightSection = () => {
  return (
    <RightContainer>
      {rightIcons.map(({ icon, link }) => (
        <Link href={link}>
          <IconButton type="link" icon={icon} size="large" />
        </Link>
      ))}
    </RightContainer>
  );
};
