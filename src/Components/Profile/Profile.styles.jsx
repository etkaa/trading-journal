import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  width: 50%;
  /* border: 1px solid red; */
  background-color: black;
  border-radius: 10px;
  height: 600px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px auto;
  width: 30%;
  background-color: #100745;
  border: 1px solid blue;
  height: 300px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 25px auto;
  width: 55%;
  height: 450px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 500px;
  background-color: black;
  padding: 10px 5px;
  border-radius: 5px;
  label {
    color: white;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  text-align: left;
  width: 100%;
  height: 100px;

  label {
    margin-left: 20px;
  }
`;

export const ProfileInfoInput = styled.input`
  width: 90%;
  height: 50px;
  margin: auto;
  background-color: #2c3333;

  outline: none;
  box-shadow: none;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 5px;
  font-size: 15px;
  padding-left: 15px;
`;
