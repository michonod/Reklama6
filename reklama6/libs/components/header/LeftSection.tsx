import React from "react";
import { LeftContainer, LinkContainer, Logo, SiteName } from "./styles";
import Link from "next/link";

const LeftSection = () => {
  return (
    <LeftContainer>
      <Logo />
      <SiteName>
        <Link href="/products">Reklama6</Link>
      </SiteName>
      <LinkContainer>
        <Link href="">Сите огласи</Link>
        <Link href="">Продавници</Link>
      </LinkContainer>
    </LeftContainer>
  );
};

export default LeftSection;
