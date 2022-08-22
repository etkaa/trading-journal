import React from "react";
import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import {
  NavBar,
  NavLink,
  LinksContainer,
  LogoContainer,
} from "./Navigation.styles";

const Navigation = () => {
  return (
    <div>
      <NavBar>
        <LogoContainer to="/dashboard">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <LinksContainer>
          <li>
            <NavLink to="/dashboard">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Sign Out</NavLink>
          </li>
        </LinksContainer>
      </NavBar>
    </div>
  );
};

export default Navigation;
