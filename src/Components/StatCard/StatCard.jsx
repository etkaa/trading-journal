import React from "react";
import { CardContainer, StatContainer } from "./StatCard.styles";

const StatCard = (props) => {
  return (
    <CardContainer>
      <h2>{props.statTitle}</h2>
      <StatContainer>
        <h1>{props.stat}</h1>
      </StatContainer>
      <h5>{props.statDetail}</h5>
    </CardContainer>
  );
};

export default StatCard;
