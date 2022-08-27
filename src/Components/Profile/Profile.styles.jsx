import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  width: 50%;
  color: white;
  /* border: 1px solid red; */
  background-color: #100f0f;
  border-radius: 10px;
  height: 625px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 25px 20px 20px 35px;
  width: 30%;
  background-color: #100720;
  box-shadow: 3px 3px;
  color: #3d3c42;
  border-radius: 10px;
  height: 275px;
  /* border: 1px solid blue; */
`;

export const ProfilePicture = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px auto 15px auto;
  width: 80%;
  img {
    border-radius: 50%;
    width: 80%;
  }
`;

export const ImageInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  margin: 10px auto;
  text-align: center;
  background-color: #3d3c42;
  border-radius: 7px;
  height: 30px;
  font-size: 15px;
  width: 30%;
  color: white;
  cursor: pointer;

  input[type="file"] {
    display: none;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px auto;
  width: 60%;
  border-radius: 10px;
  height: 575px;
  /* border: 1px solid green; */
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  width: 90%;
  height: 550px;
  background-color: #100720;
  padding: 10px 5px;
  border-radius: 10px;
  box-shadow: 3px 3px;
  color: #3d3c42;
  /* border: 1px solid yellow; */
  label {
    color: white;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  text-align: left;
  width: 100%;
  height: 70px;

  label {
    margin-left: 20px;
  }
`;

export const ProfileInfoInput = styled.input`
  width: 90%;
  height: 50px;
  margin: 5px auto;
  background-color: #2c3333;
  color: gray;

  outline: none;
  box-shadow: none;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 15px;
  padding-left: 15px;

  :focus {
    color: white;
    box-shadow: 1px 1px;
  }

  
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
`;
