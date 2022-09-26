import styled from "styled-components";

export const SignInBody = styled.body`
  /* background-color: #100720; */
  background: linear-gradient(
    120deg,
    rgba(0, 0, 0, 0.6) 25%,
    rgba(177, 96, 217, 0.6) 50%,
    rgba(13, 79, 171, 0.6) 90%
  );
  height: 100vh;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  color: white;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  max-width: 30%;
  align-items: center;
  background: white;
  border-radius: 10px;
  background: #9772fb;

  @media screen and (max-width: 800px) {
    max-width: 85%;
    margin: 80px auto;
  }

  @media screen and (max-width: 900px) and (min-width: 700px) {
    max-width: 50%;
  }

  @media screen and (max-width: 1200px) and (min-width: 900px) {
    max-width: 30%;
  }

  @media screen and (min-width: 900px) {
    max-width: 20%;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    color: white;

    :hover {
      color: black;
      transition: 200ms;
    }
  }

  h3 {
    font-weight: 400;
  }
`;

export const Form = styled.form`
  font-family: "Montserrat";
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  background-color: grey;
  width: 100%;
  background-color: white;
  background: #9772fb;
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 250px;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    width: 70%;
    height: 10%;
  }
`;

export const Input = styled.input`
  margin: 10px 10px;
  height: 50px;
  background-color: aliceblue;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 2px;
  padding-left: 10px;
  font-size: 1.2em;

  :focus {
    outline: none;
    box-shadow: 6px 7px;
    background-color: white;
    transition: 0.5s;
  }
`;

export const Button = styled.button`
  margin: 10px 10px 20px 10px;
  font-weight: 500;
  width: 50%;
  height: 50px;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 5px;
  color: black;
  border: none;
  background: white;
  cursor: pointer;
  box-shadow: 2px 3px;

  :hover {
    color: white;
    transition: 0.3s;
    background-color: black;
    font-weight: 700;
  }
`;

export const ErrorLabel = styled.label`
  font-size: 17px;
  width: 60%;
  text-align: center;
  margin: 0px auto 20px;
  background-color: red;
  border-radius: 10px;
  padding: 5px;
  color: white;
`;
