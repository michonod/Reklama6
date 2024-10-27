"use client";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import { RightSection } from "./RightSection";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </HeaderContainer>
  );
};

export default Header;
