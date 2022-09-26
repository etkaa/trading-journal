import styled from "styled-components";

export const DashboardBody = styled.body`
  /* background-color: #100720; */
  background: linear-gradient(
    120deg,
    rgba(177, 96, 217, 0.6) 25%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(13, 79, 171, 0.6) 90%
  );
  width: 100%;
  height: auto;
  overflow: hidden;
  min-height: 100vh; /* this fixed the problem */

  box-sizing: border-box;

  div::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 20px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box;
`;

export const TopContainer = styled.div`
  /* display: flex; */
  padding: 30px 10px 40px;
  /* border: 2px solid red; */
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
