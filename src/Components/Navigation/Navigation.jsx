import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import {
  NavBar,
  NavLink,
  LinksContainer,
  LogoContainer,
} from "./Navigation.styles";

const Navigation = () => {
  // const [loggedIn, setLoggedIn] = useState();

  const navigate = useNavigate();

  const handleSignOut = async () => {
    await axios
      .get(
        "http://localhost:8000/auth/logout",
        {
          data: "dummy-data",
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log("response.data:", response.data);
        if (response.data.success === true) {
          navigate("/signin");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar>
        <LogoContainer to="/dashboard">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <LinksContainer>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
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
