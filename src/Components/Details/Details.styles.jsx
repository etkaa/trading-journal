import styled from "styled-components";

export const DetailsBody = styled.body`
  /* background-color: #100720; */
  background: linear-gradient(
    120deg,
    rgba(177, 96, 217, 0.6) 25%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(13, 79, 171, 0.6) 90%
  );
  width: 100%;
  height: auto;
  overflow: hidden;
  min-height: 100vh; /* this fixed the problem */

  box-sizing: border-box;

  div::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

export const FormContainer = styled.div`
  margin: 50px auto;
  width: 50%;
  height: fit-content;
  border-radius: 10px;
  background-color: #100720;
  box-shadow: 0px 10px 25px rgb(0 0 0 / 0.3);
  /* border: 2px solid green; */
  overflow: hidden;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 2fr 2fr;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
  /* border: 2px solid red; */

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="date"] {
    padding: 1px 4px;
    color: gray;
    font-size: 18px;
  }
  input[type="time"] {
    padding: 1px 4px;
    color: gray;
    font-size: 18px;
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid red; */
`;

export const FormInputLabel = styled.label`
  font-size: 1.4rem;
  color: #724cf9;
  font-weight: 500;
  margin: 15px auto 0px auto;

  /* border: 1px solid green; */
`;

export const FormInput = styled.input`
  margin: 10px auto 20px auto;
  text-align: center;
  background-color: #2c3333;
  border-radius: 5px;
  height: 50px;
  font-size: 20px;
  border: 1px solid #3d3c42;
  width: 70%;
  color: white;
  box-shadow: 0px 2px 5px rgb(114 76 249 / 0.7);
  /* border: 2px solid yellow; */

  :focus {
    outline: none;
    border: 2px solid #724cf9;
    border-radius: 5px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 60%;

  @media screen and (max-width: 800px) {
    width: 90%;
  }

  /* border: 2px solid white; */
`;

export const Button = styled.button`
  margin: 20px auto 30px auto;
  text-align: center;
  background-color: #724cf9;
  border-radius: 5px;
  height: 54px;
  font-size: 20px;
  border: 1px solid #3d3c42;
  box-shadow: 0px 2px 5px rgb(114 76 249 / 0.7);
  width: 25%;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 28%;
  }

  :hover {
    background-color: white;
    color: black;
    transition: ease-in 50ms;
  }

  :disabled {
    background-color: #3d3c42;
    color: gray;
    cursor: default;
  }

  &.delete {
    background-color: #d62840;
    box-shadow: 0px 2px 5px rgb(255 105 180 / 0.7);
    :hover {
      background-color: white;
      color: black;
      transition: ease-in 50ms;
    }
  }

  &.cancel {
    background-color: #ff006e;
    box-shadow: 0px 2px 5px rgb(255 105 180 / 0.7);
    :hover {
      background-color: white;
      color: black;
      transition: ease-in 50ms;
    }
  }
`;
