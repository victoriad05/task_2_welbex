import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  Navigation,
  NavColomn,
  Heading,
  LinksWrapper,
  Link,
  ContactInfo,
  Num,
  Address,
  Copyright,
  PrivacyPolicy,Container
} from "./FooterStyles";
import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import whatsapp from "../../images/whatsapp.svg";
import { SocialMedia, SmItem, Icon } from "../Navbar/NavbarStyles";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <Navigation>
            <NavColomn>
              <Heading>O компании</Heading>
              <LinksWrapper>
                <Link href="#">Партнёрская программа</Link>
                <Link href="#">Вакансии</Link>
              </LinksWrapper>
            </NavColomn>
            <NavColomn>
              <Heading>Меню</Heading>
              <Container>
              <LinksWrapper>
                <Link href="#">Расчёт стоимости</Link>
                <Link href="#">Услуги</Link>
                <Link href="#">Виджеты</Link>
                <Link href="#">Интеграции</Link>
                <Link href="#">Наши клиенты</Link>
              </LinksWrapper>
              <LinksWrapper style={{ paddingTop: "0.1rem" }}>
                <Link href="#">Кейсы</Link>
                <Link href="#">Благодарственные письма</Link>
                <Link href="#">Сертификаты</Link>
                <Link href="#">Блог на Youtube</Link>
                <Link href="#">Вопрос / Ответ</Link>
              </LinksWrapper>
              </Container>
            </NavColomn>
          </Navigation>
          <ContactInfo>
            <Heading>Контакты</Heading>
            <Num>+7 555 555-55-55</Num>
            <SocialMedia style={{ gap: "0.62rem" }}>
              <SmItem href="#">
                <Icon src={telegram} />
              </SmItem>
              <SmItem href="#">
                <Icon src={viber} />
              </SmItem>
              <SmItem href="#">
                <Icon src={whatsapp} />
              </SmItem>
            </SocialMedia>
            <Address>Москва, Путевой проезд 3c1, к 902</Address>
            <Copyright>©WELBEX 2022. Bce права защищены.</Copyright>
            <PrivacyPolicy href="#">Политика конфиденциальности</PrivacyPolicy>
          </ContactInfo>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
