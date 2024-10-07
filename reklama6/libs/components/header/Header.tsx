"use client";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import { RightSection } from "./RightSection";
import { HeaderContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </HeaderContainer>
  );
};
