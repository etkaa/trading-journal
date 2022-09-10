import React from "react";
import { useNavigate } from "react-router-dom";
import {
  NotFoundBody,
  HeaderContainer,
  BigTextContainer,
  ButtonContainer,
  Button,
} from "./NotFound.styles";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    navigate("/home", { replace: true });
  };

  return (
    <NotFoundBody>
      <HeaderContainer>
        <h1>Looks like you are lost</h1>
        <h2>We don't have what you've asked for.</h2>
      </HeaderContainer>
      <BigTextContainer>
        <h1>404</h1>
        <h2>Not found!</h2>
      </BigTextContainer>
      <ButtonContainer>
        <Button onClick={handleClick}>Go to Home</Button>
      </ButtonContainer>
    </NotFoundBody>
  );
};

export default NotFound;
