import React from "react";
import { StatsContainer, PandL, WandL } from "./Stats.styles";

const Stats = () => {
  return (
    <StatsContainer>
      <WandL>
        <label>Win/Loss Ratio</label>
        <h3>%50</h3>
      </WandL>
      <hr></hr>
      <PandL>
        <label>Current P/L</label>
        <h3>+ $2,300</h3>
      </PandL>
    </StatsContainer>
  );
};

export default Stats;
