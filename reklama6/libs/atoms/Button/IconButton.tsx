import { ReactNode } from "react";
import { IconButton as Button } from "./styles";

interface P {
  icon?: ReactNode;
  shape?: "circle" | "default" | "round";
  type?: "default" | "link" | "text" | "primary" | "dashed";
  size?: "small" | "middle" | "large";
}

export const IconButton = ({ icon, shape, type, size }: P) => {
  return <Button type={type} shape={shape} icon={icon} size={size}></Button>;
};
