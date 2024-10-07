import React from "react";
import {
  First,
  Container,
  Plus,
  MiddleContainer,
  Div,
  Text,
  RedText,
  FlexText,
  Star,
} from "./styles";
import Link from "next/link";

const stars = Array.from({ length: 5 });

const MiddleSection = () => {
  return (
    <MiddleContainer>
      <Container>
        <First>#1</First>
        <Div>
          <Text>Macedonia</Text>
          {stars.map(() => (
            <Star />
          ))}
        </Div>
      </Container>
      <Text>320019 Огласи</Text>
      <Link href="/">
        <Container role="button">
          <Plus />
          <FlexText>
            Внеси нов оглас <br /> <RedText>бесплатно</RedText>
          </FlexText>
        </Container>
      </Link>
    </MiddleContainer>
  );
};

export default MiddleSection;
