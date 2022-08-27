import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import Stats from "../Stats/Stats";
import Table from "../Table/Table";
import DataForm from "../DataForm/DataForm";
import { useContext } from "react";
import { UserContext } from "../../Context/User.Context";

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  const userTrades = currentUser.trades;
  console.log("This is userTrades", userTrades);

  return (
    <Fragment>
      <Navigation />
      <Stats />
      <Table data={userTrades} />
      <DataForm userId={currentUser._id}/>
    </Fragment>
  );
};

export default Dashboard;
