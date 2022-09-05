import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import {
  NavBar,
  NavLink,
  LinksContainer,
  LogoContainer,
} from "./Navigation.styles";
import { UserContext } from "../../Context/User.Context";

const Navigation = () => {
  const { setCurrentUserID, setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await axios
      .get("http://localhost:8000/auth/logout", {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(function (response) {
        if (response.data.success === true) {
          setCurrentUserID(null);
          setIsAuthenticated(false);
          localStorage.removeItem("userID");
          navigate("/signin");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    // localStorage.removeItem("userSession");
  };

  const handleClick = async (event) => {
    event.preventDefault();

    await axios
      .get(`http://localhost:8000/auth/status`, {
        headers: {
          "content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar>
        <LogoContainer to="/dashboard">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <button type="button" onClick={handleClick}>
          CLICK
        </button>
        <LinksContainer>
          <li>
            <NavLink name="dashboard" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink name="profile" to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleSignOut} to="">
              Sign Out
            </NavLink>
          </li>
        </LinksContainer>
      </NavBar>
    </div>
  );
};

export default Navigation;
