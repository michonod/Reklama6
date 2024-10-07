"use client";
import { Montserrat } from "next/font/google";
import Theme from "./theme";
const font = Montserrat({ subsets: ["latin"] });

export const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <Theme>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </Theme>
  );
};
