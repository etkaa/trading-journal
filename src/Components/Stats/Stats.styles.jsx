import styled from "styled-components";

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  column-gap: 20px;
  /* flex-direction: c; */
  /* justify-content: space-between; */
  text-align: center;
  margin: 20px auto 50px auto;
  width: 80%;
  padding: 5px auto;
  background-color: #100720;
  border-radius: 20px;
  color: white;
  min-height: 250px;
  box-shadow: 0px 10px 25px rgb(0 0 0 / 0.5);

  h3 {
    font-weight: 500;
    font-size: 20px;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 4fr 4fr;
    width: 90%;
  }
`;
