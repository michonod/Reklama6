"use client";
import { Montserrat } from "next/font/google";
import Theme from "./theme";
import dynamic from "next/dynamic";
import { Loading } from "@components";
const font = Montserrat({ subsets: ["latin"] });

const Header = dynamic(() => import("../../libs/components/header/Header"), {
  ssr: false,
  loading: () => <Loading />,
});

export const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <Theme>
      <html lang="en">
        <body className={font.className}>
          <Header />
          {children}
        </body>
      </html>
    </Theme>
  );
};
