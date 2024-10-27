import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface Modifiers {
  primary?: string;
  secondary?: string;
  dark?: string;
}

interface ThemeInterface {
  colors: {
    blue: Modifiers;
    gold: Modifiers;
    white: Modifiers;
  };
}

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}

const theme: ThemeInterface = {
  colors: {
    blue: {
      primary: "#0070f3",
      secondary: "#3c8ac2",
      dark: "#002782",
    },
    gold: {
      primary: "#f7d034",
    },
    white: {
      primary: "#ffffff",
    },
  },
};

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
