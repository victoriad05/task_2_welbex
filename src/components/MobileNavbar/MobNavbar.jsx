import React from "react";
import { Nav, NavMenu, NavLinks, NavItem } from "./MobNavbarStyles";

const MobNavbar = () => {
  return (
    <>
      <Nav>
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
        </NavMenu>
      </Nav>
    </>
  );
};

export default MobNavbar;
