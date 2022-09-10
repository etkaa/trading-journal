import React, { Fragment } from "react";
import { CardContainer, StatContainer } from "./StatCard.styles";
import Spinner from "../Spinner/Spinner";

const StatCard = (props) => {
  const loading = props.loading;

  return (
    <CardContainer>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h2>{props.statTitle}</h2>
          <StatContainer>
            <h1>{props.stat}</h1>
          </StatContainer>
          <h5>{props.statDetail}</h5>
        </Fragment>
      )}
    </CardContainer>
  );
};

export default StatCard;
