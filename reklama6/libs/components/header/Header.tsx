"use client";
import {
  HeartOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { IconButton } from "@atoms";

export const Header = () => {
  const iconStyle = { fontSize: "26px", color: "#6c757d" };
  const rightIcons = [
    {
      type: "user",
      icon: <UserOutlined style={iconStyle} />,
    },
    { type: "heart", icon: <HeartOutlined size={20} style={iconStyle} /> },
    {
      type: "questionmark",
      icon: <QuestionCircleOutlined size={20} style={iconStyle} />,
    },
  ];

  return (
    <div>
      <div>
        {rightIcons.map(({ icon }) => (
          <IconButton type="link" icon={icon} size="large" />
        ))}
      </div>
    </div>
  );
};
