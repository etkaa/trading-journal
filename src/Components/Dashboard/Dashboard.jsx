import React from "react";
import Navigation from "../Navigation/Navigation";
import Stats from "../Stats/Stats";
import Table from "../Table/Table";
import DataForm from "../DataForm/DataForm";
import { TopContainer, MainContainer, DashboardBody } from "./Dashboard.styles";
// import { useContext } from "react";
// import { UserContext } from "../../Context/User.Context";

const Dashboard = () => {
  // const { currentUser } = useContext(UserContext);

  // const userTrades = currentUser.userTrades;

  return (
    <DashboardBody>
      <Navigation />
      <MainContainer>
        <TopContainer>
          <Stats />
          <DataForm />
          <Table />
        </TopContainer>
      </MainContainer>
    </DashboardBody>
  );
};

export default Dashboard;
