import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.ul`
  background-color: #100720;
  list-style: none;
  font-size: 2em;
  display: flex;
  margin-top: 0;
  align-items: center;
  padding: 20px 40px;
  justify-content: space-between;
  height: 30px;
  box-shadow: 0px 2px 20px rgb(0 0 0 / 0.5);

  @media screen and (max-width: 800px) {
    justify-content: space-around;
    padding: 20px 10px;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 60px;
  padding: 5px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: aliceblue;
  font-size: 1.2rem;

  :hover,
  :active,
  :active {
    color: #724cf9;
    transition: 0.2s ease-in-out;
    font-size: 20px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;

  @media screen and (max-width: 800px) {
    gap: 3rem;
  }
`;
