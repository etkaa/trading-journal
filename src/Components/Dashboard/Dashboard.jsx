import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import Stats from "../Stats/Stats";
import Table from "../Table/Table";

const Dashboard = () => {
  return (
    <Fragment>
      <Navigation />
      <Stats />
      <Table />
    </Fragment>
  );
};

export default Dashboard;
