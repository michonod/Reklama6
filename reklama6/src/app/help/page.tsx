"use client";
import Icon, {
  ArrowUpOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  FacebookOutlined,
  ForkOutlined,
  FormOutlined,
  InfoCircleOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  SafetyCertificateOutlined,
  SearchOutlined,
  SettingOutlined,
  StarOutlined,
  TrademarkCircleOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import {
  Container,
  FlexContainer,
  Grid,
  HelpContainer,
  HelpHeader,
  Title,
} from "./styles";

const iconStyle = {
  fontSize: "60px",
  color: "#6b6b6b",
};

const helpTypes = [
  {
    icon: UserAddOutlined,
    title: "Регистрирај се",
    link: "/",
  },
  { icon: UserSwitchOutlined, title: "Премиум членство", link: "/" },
  { icon: FacebookOutlined, title: "Реклама6 на Facebook", link: "/" },
  { icon: ArrowUpOutlined, title: "Како да ставам оглас", link: "/" },
  {
    icon: ExclamationCircleOutlined,
    title: "Избегнување на измами",
    link: "/",
  },
  { icon: TrademarkCircleOutlined, title: "Маркетинг", link: "/" },
  {
    icon: SettingOutlined,
    title: "Измени, обнови, избриши оглас",
    link: "/",
  },
  { icon: CloseCircleOutlined, title: "Злоупотреба", link: "/" },
  { icon: InfoCircleOutlined, title: "За реклама6", link: "/" },
  { icon: SearchOutlined, title: "Пребарување", link: "/" },
  { icon: FormOutlined, title: "Услови на употреба", link: "/" },
  { icon: ForkOutlined, title: "Соработка со Реклама6", link: "/" },
  { icon: StarOutlined, title: "Промовирај", link: "/" },
  { icon: QuestionCircleOutlined, title: "Прашања и одговори", link: "/" },
  { icon: MessageOutlined, title: "Контакт", link: "/" },
  { icon: SafetyCertificateOutlined, title: "Сертификат", link: "/" },
];

const Help = () => {
  return (
    <Container>
      <HelpContainer>
        <Grid>
          <HelpHeader>Помош/FAQ</HelpHeader>
          {helpTypes.map((item) => {
            return (
              <Link href={item.link}>
                <FlexContainer>
                  <Icon
                    component={
                      item.icon as React.ForwardRefExoticComponent<any>
                    }
                    style={iconStyle}
                  />
                  <Title>{item.title}</Title>
                </FlexContainer>
              </Link>
            );
          })}
        </Grid>
      </HelpContainer>
    </Container>
  );
};

export default Help;
