import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import Stats from "../Stats/Stats";
import Table from "../Table/Table";
import { TopContainer } from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <Fragment>
      <Navigation />
      <TopContainer>
        <Stats />
        <Table />
      </TopContainer>
    </Fragment>
  );
};

export default Dashboard;
