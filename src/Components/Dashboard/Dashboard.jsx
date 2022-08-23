import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import Stats from "../Stats/Stats";
import Table from "../Table/Table";
import DataForm from "../DataForm/DataForm";

const Dashboard = () => {
  return (
    <Fragment>
      <Navigation />
      <Stats />
      <Table />
      <DataForm />
    </Fragment>
  );
};

export default Dashboard;
