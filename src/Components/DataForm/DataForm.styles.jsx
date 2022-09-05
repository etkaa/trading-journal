import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 50px auto;
  width: 80%;
  border-radius: 10px;
  background-color: #100720;
  box-shadow: 0px 10px 25px rgb(0 0 0 / 0.3);
`;

// export const FirstTradeHeaderContainer = styled.div`
//   text-align: center;
//   color: #724cf9;
//   padding: 10px;
//   border: 1px solid;
//   border-radius: 10px;

//   p {
//     font-size: 25px;
//     font-weight: 500;
//     margin: 10px 10px;
//   }
// `;

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
  box-shadow: 0px 2px 5px rgb(114 76 249 / 0.7);

  :focus {
    outline: none;
    border: 2px solid #724cf9;
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  margin: 10px 5px;
  text-align: center;
  background-color: #724cf9;
  border-radius: 5px;
  height: 54px;
  font-size: 20px;
  border: 1px solid #3d3c42;
  box-shadow: 0px 2px 5px rgb(114 76 249 / 0.7);
  width: 10%;
  color: white;
  cursor: pointer;

  :hover {
    background-color: white;
    color: black;
    transition: ease-in 50ms;
  }
`;
