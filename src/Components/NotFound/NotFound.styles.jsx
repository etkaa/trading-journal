import styled from "styled-components";

export const NotFoundBody = styled.body`
  /* background-color: #100720; */
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 20%;
  background-clip: inherit;
  background: linear-gradient(
    90deg,
    rgba(12, 182, 200, 1) 0%,
    rgba(13, 79, 171, 1) 25%,
    rgba(177, 96, 217, 1) 50%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }

  overflow: hidden;
`;

export const BigTextContainer = styled.div`
  margin: auto auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 50%;
  background-clip: inherit;
  background: linear-gradient(
    90deg,
    rgba(12, 182, 200, 1) 0%,
    rgba(13, 79, 171, 1) 25%,
    rgba(177, 96, 217, 1) 50%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  h1 {
    font-size: 10rem;
    margin: 60px auto 0px auto;
  }
  h2 {
    font-size: 5rem;
    margin: 0px auto 60px auto;
  }

  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 20%;
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }

  overflow: hidden;
`;

export const Button = styled.button`
  margin: auto;
  font-weight: 500;
  width: 20%;
  height: 50%;
  font-weight: 600;
  font-size: 1.8rem;
  border-radius: 5px;
  color: black;
  border: none;
  background: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  box-shadow: 2px 3px;

  :hover {
    color: rgba(13, 79, 171, 1);
    transition: 0.2s;
    background-color: black;
    font-weight: 700;
  }
`;
