import React from "react";
import logo1 from "../../images/logo1.svg";
import logo2 from "../../images/logo2.svg";
import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import whatsapp from "../../images/whatsapp.svg";
import {
  Nav,
  HeaderContainer,
  LogoWrapper,
  LogoImg,
  SubText,
  ImageWrapper,
  NavMenu,
  NavItem,
  NavLinks,
  Number,
  SocialMedia,
  SmItem,
  Icon,
  PurpleBall,
  PurpleLight,
  RedBall,
} from "./NavbarStyles";
import ball from "../../images/purple ball.svg";
import red_ball from "../../images/red ball.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <HeaderContainer>
          <LogoWrapper>
            <ImageWrapper>
              <LogoImg src={logo1} />
              <LogoImg src={logo2} />
            </ImageWrapper>
            <SubText>крупный интегратор CRM в Poccии и ещё 8 странах</SubText>
          </LogoWrapper>
          <NavMenu>
            <NavItem>
              <NavLinks to="/services">Услуги</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/widget">Виджеты</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/widget">Интеграции</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/cases">Кейсы</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/certificates">Сертификаты</NavLinks>
            </NavItem>
          </NavMenu>
          <Number>+7 555 555-55-55</Number>
          <SocialMedia>
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
        </HeaderContainer>
        <PurpleBall src={ball} />
        <PurpleLight></PurpleLight>
        <RedBall src={red_ball} />
      </Nav>
    </>
  );
};

export default Navbar;
