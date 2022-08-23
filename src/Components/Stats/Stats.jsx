import React from "react";
import { StatsContainer } from "./Stats.styles";
import StatCard from "../StatCard/StatCard";

const Stats = () => {
  return (
    <StatsContainer>
      <StatCard
        statTitle={"Current P/L"}
        stat={"+ %6"}
        statDetail={"August 2022"}
      />
      <StatCard
        statTitle={"Current Balance"}
        stat={"$2,600,589.25"}
        statDetail={"Interactive Brokers"}
      />
      <StatCard
        statTitle={"Win/Loss Ratio"}
        stat={"%28.9"}
        statDetail={"YTD 2022"}
      />
      <StatCard
        statTitle={"Average Risk/Reward"}
        stat={"1 / 3.76"}
        statDetail={"All Times"}
      />
    </StatsContainer>
  );
};

export default Stats;
