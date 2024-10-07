import { StarFilled } from "@ant-design/icons";
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
} from "./styles";

const stars = Array.from({ length: 5 });

const MiddleSection = () => {
  return (
    <MiddleContainer>
      <Container>
        <First>#1</First>
        <Div>
          <Text>Macedonia</Text>
          {stars.map(() => (
            <StarFilled />
          ))}
        </Div>
      </Container>
      <Text>320019 Огласи</Text>
      <Container role="button">
        <Plus />
        <FlexText>
          Внеси нов оглас <br /> <RedText>бесплатно</RedText>
        </FlexText>
      </Container>
    </MiddleContainer>
  );
};

export default MiddleSection;
