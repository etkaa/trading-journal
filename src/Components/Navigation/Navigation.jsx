import React, { useContext} from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import {
  NavBar,
  NavLink,
  LinksContainer,
  LogoContainer,
} from "./Navigation.styles";
import { UserContext } from "../../Context/User.Context";

const Navigation = () => {
  const { setCurrentUser } = useContext(UserContext);
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
          setCurrentUser(null);
          navigate("/signin");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    localStorage.removeItem("userSession");
  };

  return (
    <div>
      <NavBar>
        <LogoContainer to="/dashboard">
          <CrwnLogo className="logo" />
        </LogoContainer>
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
