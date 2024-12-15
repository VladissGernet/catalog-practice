import React from "react";
import { NavLink } from "react-router-dom";

import {StyledHeader} from "./styled";

const getStyleForNavLink = ({ isActive }) => isActive ? {
    cursor: "default",
    color: "black",
    textDecoration: "none",
  } : {};

const Header = () => {
  return (
    <StyledHeader>
      <NavLink to="/" style={getStyleForNavLink}>Каталог</NavLink>
    </StyledHeader>
  );
};

export { Header };
