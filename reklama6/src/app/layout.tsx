import type { Metadata } from "next";
import "./globals.css";
import { Root } from "./root";
import StyledComponentsRegistry from "../../libs/utils/registry";

export const metadata: Metadata = {
  title: "Oglasi | Reklama6.dk | Огласи | Автомобили | Недвижнини",
  description: "Овој вебсајт е копија на reklama5.mk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <Root children={children} />
    </StyledComponentsRegistry>
  );
}
