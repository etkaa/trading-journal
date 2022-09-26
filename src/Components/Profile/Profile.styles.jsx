import styled from "styled-components";

export const ProfileBody = styled.body`
  /* background-color: #100720; */
  background: linear-gradient(
    120deg,
    rgba(177, 96, 217, 0.6) 25%,
    rgba(13, 79, 171, 0.6) 50%,
    rgba(0, 0, 0, 0.6) 90%
  );
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  width: 45%;
  color: white;
  /* border: 1px solid red; */
  background-color: #100f0f;
  border-radius: 10px;
  height: 750px;
  box-shadow: 0px 10px 15px rgb(114 76 249 / 0.5);

  @media screen and (max-width: 800px) {
    width: 95%;
    height: 1050px;
    margin-bottom: 50px;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 25px 20px 20px 35px;
  width: 30%;
  background-color: #100720;
  box-shadow: 0px 10px 15px rgb(114 76 249 / 0.5);
  color: #3d3c42;
  border-radius: 10px;
  height: 30%;
  /* border: 1px solid blue; */

  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 30px auto auto;
    height: 40%;
    box-shadow: 0px 10px 15px rgb(114 76 249 / 0.2);
  }
`;

export const ProfilePicture = styled.div`
  margin: auto;
  width: 85%;
  height: 90%;
  box-shadow: 0px 0px 40px rgb(114 76 249 / 0.3);
  border-radius: 50%;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 800px) {
    box-shadow: 0px 0px 40px rgb(114 76 249 / 0.2);
  }
`;

// export const ImageInputLabel = styled.label`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-family: "Montserrat";
//   margin: 10px auto;
//   text-align: center;
//   background-color: #2c3360;
//   border-radius: 7px;
//   height: 30px;
//   font-size: 15px;
//   width: 30%;
//   color: white;
//   cursor: pointer;

//   input[type="file"] {
//     display: none;
//   }

//   :hover {
//     background-color: white;
//     color: black;
//     transition: ease-in 50ms;
//   }
// `;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px auto;
  width: 60%;
  border-radius: 10px;
  height: 575px;
  /* border: 1px solid green; */

  @media screen and (max-width: 800px) {
    width: 95%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 1000px;
  }
`;
