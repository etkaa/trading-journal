import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import Stats from "../Stats/Stats";
import Table from "../Table/Table";
import DataForm from "../DataForm/DataForm";
// import { useContext } from "react";
// import { UserContext } from "../../Context/User.Context";

const Dashboard = () => {
  // const { currentUser } = useContext(UserContext);

  // const userTrades = currentUser.userTrades;

  return (
    <Fragment>
      <Navigation />
      <Stats />
      <DataForm />
      <Table />
    </Fragment>
  );
};

export default Dashboard;
