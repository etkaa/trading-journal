import styled from "styled-components";

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-left: 50px;
  width: 20%;
  padding: 20px;
  background-color: #100720;
  border-radius: 10px;
  color: white;

  hr {
    margin-top: 10px;
    margin-bottom: 20px;
    width: 30%;
    border: dotted 1px solid gray;
  }
`;

export const WandL = styled.div`
  margin: auto;
  padding: 10px 5px;
  border-radius: 10px;
  background-color: #2c3333;
  width: 50%;
  font-size: 18px;
  height: 25%;
  font-weight: 300;

  h3 {
    font-weight: 500;
  }

  :hover {
    h3 {
      font-weight: 700;
      transition: 0.2s;
    }
    font-weight: 700;
    transition: 0.2s;
  }
`;

export const PandL = styled.div`
  margin: auto;
  padding: 10px 5px;
  border-radius: 10px;
  background-color: #2c3333;
  width: 50%;
  font-size: 18px;
  height: 25%;
  font-weight: 300;
  h3 {
    font-weight: 500;
  }
  :hover {
    h3 {
      font-weight: 700;
      transition: 0.3s;
    }
    font-weight: 700;
    transition: 0.3s;
  }
`;
