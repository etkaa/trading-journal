import React from "react";
import {
  HomeBody,
  HomeContainer,
  IntroContainer,
  IntroHeaderText,
  IntroFooterText,
  AuthContainer,
  AuthHeaderText,
  ButtonContainer,
  Button,
} from "./Home.styles";
import { useNavigate } from "react-router-dom";
import introImage from "../../Assets/intro-ss.png";

const Home = () => {
  const navigate = useNavigate();

  const handleSignInClick = (e) => {
    e.preventDefault();

    navigate("/signin");
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();

    navigate("/signup");
  };

  return (
    <HomeBody>
      <HomeContainer>
        <IntroContainer>
          <IntroHeaderText>Journal your trades</IntroHeaderText>
          <img src={introImage} alt="intro" />
          <IntroFooterText>See your performance</IntroFooterText>
        </IntroContainer>
        <AuthContainer>
          <AuthHeaderText>Start getting better</AuthHeaderText>
          <ButtonContainer>
            <h3>Already have an account?</h3>
            <Button onClick={handleSignInClick}>Log In</Button>
            <h3>First time around here?</h3>
            <Button onClick={handleSignUpClick}>Sign Up</Button>
          </ButtonContainer>
        </AuthContainer>
      </HomeContainer>
    </HomeBody>
  );
};

export default Home;
