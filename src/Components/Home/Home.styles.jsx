import styled from "styled-components";

export const HomeBody = styled.body`
  /* background-color: #100720; */
  background: linear-gradient(
    120deg,
    rgba(177, 96, 217, 0.6) 25%,
    rgba(13, 79, 171, 0.6) 50%,
    rgba(0, 0, 0, 0.6) 90%
  );
  height: 100vh;
  overflow: hidden;
  padding-top: 30px;

  @media screen and (max-width: 800px) {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;

export const HomeContainer = styled.div`
  height: 90vh;
  margin: 50px;
  /* border: 2px red solid; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  border-radius: 20px;
  /* background: linear-gradient(
    120deg,
    rgba(177, 96, 217, 0.6) 25%,
    rgba(12, 182, 200, 0.6) 50%,
    rgba(13, 79, 171, 0.6) 90%
  ); */
  /* box-shadow: 0px 4px 25px rgb(255 255 255 / 0.6); */

  @media screen and (max-width: 800px) {
    display: flex;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* border: 2px solid red; */
    margin: auto auto 50px auto;
    width: 90%;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid blue; */
  box-shadow: 0px 4px 25px rgb(255 255 255 / 0.8);
  height: 80%;
  margin: auto;
  width: 60%;
  border-radius: 50px;
  background-color: #100720;

  @media screen and (max-width: 800px) {
    display: flex;
    margin-bottom: 50px;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    box-shadow: none;

    h1 {
      font-size: 35px;
    }
    
  }

  img {
    width: 80%;
    height: auto;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 25px rgb(114 76 249 / 0.6);

    min-width: 0;
    min-height: 0;
    overflow: hidden;
  }
`;

export const IntroHeaderText = styled.h1`
  margin: 50px auto;
  background-clip: inherit;
  background: linear-gradient(
    90deg,
    rgba(12, 182, 200, 1) 0%,
    rgba(13, 79, 171, 1) 25%,
    rgba(177, 96, 217, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  min-width: 0;
  min-height: 0;
  overflow: hidden;
`;

export const IntroFooterText = styled.h1`
  margin: 50px auto;
  background-clip: inherit;
  background: linear-gradient(
    90deg,
    rgba(12, 182, 200, 1) 0%,
    rgba(13, 79, 171, 1) 25%,
    rgba(177, 96, 217, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;

  min-width: 0;
  min-height: 0;
  overflow: hidden;
`;

export const AuthContainer = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80%;
  margin: auto;
  width: 30%;
  border-radius: 40px;
  background-color: #100720;
  box-shadow: 0px 4px 25px rgb(255 255 255 / 0.8);

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 700px;
    box-shadow: none;
    h1 {
      font-size: 65px;
    }
  }
`;

export const AuthHeaderText = styled.h1`
  color: white;
  font-size: 5rem;
  margin: auto 40px 0px 40px;
  background-clip: inherit;
  background: linear-gradient(
    90deg,
    rgba(12, 182, 200, 1) 10%,
    rgba(13, 79, 171, 1) 30%,
    rgba(177, 96, 217, 1) 60%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  min-width: 0;
  min-height: 0;
  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  width: 80%;
  justify-content: space-between;
  /* border: 2px solid red; */
  margin: auto auto;
  border-radius: 20px;

  @media screen and (max-width: 800px) {
    height: 47%;
    width: 85%;
  }

  min-width: 0;
  min-height: 0;
  overflow: hidden;

  h3 {
    font-size: 1.5rem;
    margin: 10px;
    background-clip: inherit;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 25%,
      rgba(177, 96, 217, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
  }
`;

export const Button = styled.button`
  margin: 5px auto;
  font-weight: 500;
  width: 50%;
  height: 60px;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 10px;
  color: black;
  border: none;
  background: linear-gradient(
    60deg,
    rgba(177, 96, 217, 1) 20%,
    rgba(255, 255, 255, 1) 100%
  );
  cursor: pointer;
  box-shadow: 2px 3px;

  :hover {
    color: white;
    transition: 0.3s;
    background-color: black;
    font-weight: 700;
  }
`;
