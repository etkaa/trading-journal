import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  width: 90%;
  height: 650px;
  background-color: #100720;
  padding: 10px 5px;
  border-radius: 10px;
  box-shadow: 3px 3px;
  color: #3d3c42;
  /* border: 1px solid yellow; */
  label {
    color: white;
  }
  box-shadow: 0px 10px 15px rgb(114 76 249 / 0.3);

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  text-align: left;
  width: 100%;
  height: 70px;
  padding: 5px;

  label {
    margin-left: 20px;
  }
`;

export const ProfileInfoInput = styled.input`
  width: 90%;
  height: 50px;
  margin: 5px auto;
  background-color: #2c3333;
  color: #dee2e6;

  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  box-shadow: 0px 5px 10px rgb(255 255 255 / 0.2);

  :focus {
    color: white;
    box-shadow: 1px 1px;
    transition: 0.2s;
  }

  &.emailField {
    color: gray;
  }
`;

export const ButtonDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`;

export const Button = styled.button`
  margin: auto;
  text-align: center;
  background-color: #2c3360;
  border-radius: 7px;
  height: 50px;
  font-size: 17px;
  width: 30%;
  color: white;
  cursor: pointer;

  :hover {
    background-color: white;
    color: black;
    transition: ease-in 50ms;
  }

  :disabled {
    background-color: grey;
    opacity: 0.5;
    cursor: default;
    :hover {
      color: white;
    }
  }

  &.cancel {
    background-color: #d62840;
    :hover {
      background-color: white;
      color: black;
      transition: ease-in 50ms;
    }
  }
`;
