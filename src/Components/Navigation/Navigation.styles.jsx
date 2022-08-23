import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.ul`
  background-color: #100720;
  list-style: none;
  font-size: 2em;
  display: flex;
  margin-top: 0;
  align-items: center;
  padding: 30px;
  justify-content: space-between;
  height: 30px;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 60px;
  padding: 5px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: aliceblue;
  font-size: 1.5rem;

  :hover {
    color: white;
    transition: 0.2s;
    font-weight: 700;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
`;
