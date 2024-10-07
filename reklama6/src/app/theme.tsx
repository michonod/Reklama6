import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeInterface {
  colors: {
    blue: {
      primary: string;
      secondary: string;
    };
    gold: {
      primary: string;
    };
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
    },
    gold: {
      primary: "#f7d034",
    },
  },
};

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
