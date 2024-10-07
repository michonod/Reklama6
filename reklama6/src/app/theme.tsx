import React, { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

interface ThemeInterface {
  colors: {
    primary: string;
  };
}

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}

const theme: ThemeInterface = {
  colors: {
    primary: "#0070f3",
  },
};

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
