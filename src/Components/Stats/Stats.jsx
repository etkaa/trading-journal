import React from "react";
import { StatsContainer } from "./Stats.styles";

const Stats = () => {
  return (
    <StatsContainer>
      <div className="current-pandl">current p and l</div>
      <div className="Win/Loss-ratio">Win/Loss-ratio</div>
      <div className="balance">balance</div>
      <div className="average-risk-reward">average-risk-reward</div>
    </StatsContainer>
  );
};

export default Stats;
