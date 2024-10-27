import { ReactNode } from "react";
import { IconButton as Button } from "./styles";
import { CSSProperties } from "styled-components";

interface P {
  icon?: ReactNode;
  shape?: "circle" | "default" | "round";
  type?: "default" | "link" | "text" | "primary" | "dashed";
  size?: "small" | "middle" | "large";
  children?: string;
  style?: CSSProperties;
}

export const IconButton = ({ icon, shape, type, size, children, style }: P) => {
  return (
    <Button type={type} shape={shape} icon={icon} size={size} style={style}>
      {children}
    </Button>
  );
};
