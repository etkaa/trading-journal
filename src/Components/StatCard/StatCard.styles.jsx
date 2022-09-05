import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #2c3333;
  /* background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 1) 25%,
    rgba(177, 96, 217, 1) 100%
  ); */
  box-shadow: 0px 4px 15px rgb(114 76 249 / 0.6);
  height: 220px;
  margin: 20px;
  width: 80%;
  border-radius: 10px;

  h2 {
    font-weight: 400;
  }

  h5 {
    font-weight: 300;
    font-size: 15px;
  }
`;

export const StatContainer = styled.div`
  margin: auto;
  align-items: center;
`;
