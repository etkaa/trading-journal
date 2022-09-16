import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TableCell = styled.td`
  padding: 10px 5px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #724cf9;
  font-size: 1.4rem;
  :hover {
    color: white;
    cursor: pointer;
    transition: 0.2s;
  }
`;
