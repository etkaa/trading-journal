import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 50px auto;
  width: 80%;
  border-radius: 10px;
  background-color: #100720;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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

export const FormInput = styled.input`
  margin: 10px 5px;
  text-align: center;
  background-color: #2c3333;
  border-radius: 5px;
  height: 50px;
  font-size: 20px;
  border: 1px solid #3d3c42;
  width: 10%;
  color: white;
`;

export const Button = styled.button`
  margin: 10px 5px;
  text-align: center;
  background-color: #2c3360;
  border-radius: 5px;
  height: 54px;
  font-size: 20px;
  border: 1px solid #3d3c42;
  width: 10%;
  color: white;
  cursor: pointer;

  :hover {
    background-color: white;
    color: black;
    transition: ease-in 50ms;
  }
`;
