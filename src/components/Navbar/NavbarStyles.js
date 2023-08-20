import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 2.8rem;
  background: var(--bg-dark);
  position: relative;

  @media screen and (max-width: 480px){
    display: none;
  }
`;
export const HeaderContainer = styled.div`
  width: 71.25rem;
  height: 4.56rem;
  display: flex;
  justify-content: space-between;
  align-items:flex-start;
  padding-top: 0.69rem;
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.87rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoImg = styled.img``;

export const SubText = styled.p`
  width: 8.5rem;
  font-family: var(--secondary-font);
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 300;
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 1.88rem;
  padding-top: 0.2rem;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinks = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
`;
export const Number = styled.p`
 font-weight: 500;
 padding-top: 0.2rem;
`;
export const SocialMedia = styled.div`
  display: flex;
  gap: 1.8rem;
  padding-top: 0.2rem;
`;
export const SmItem = styled.a`
  
`;
export const Icon = styled.img`
  
`;
export const PurpleBall = styled.img`
  flex-shrink: 0;
  position: absolute;
  top: 0;
  right: 530px;
`;
export const PurpleLight = styled.img`
  position: absolute;
  top: -9.6rem;
  width: 259px;
  height: 259px;
  flex-shrink: 0;
  border-radius: 259px;
  opacity: 0.5;
  background: #833AB4;
  filter: blur(196px);
  z-index: 1;
`;
export const RedBall = styled.img`
  position: absolute;
  top: 4.5rem;
  left: 35.8rem;
  z-index: 99;
  filter: drop-shadow(3px 6px 27px rgba(223, 125, 125, 0.25));
`;

