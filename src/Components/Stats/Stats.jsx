import React, { useState, useEffect, useContext, Fragment } from "react";
import { UserContext } from "../../Context/User.Context";
import { StatsContainer } from "./Stats.styles";
import StatCard from "../StatCard/StatCard";
import { getUserStats } from "../../Utils/ApiRequests";
import Spinner from "../Spinner/Spinner";

const defaultUserStats = {
  currentPandL: "0",
  currentBalance: "0",
  winLossRatio: "0",
  averageRiskReward: "Calculating",
};

const Stats = () => {
  const { currentUser, toggler } = useContext(UserContext);
  const [userStats, setUserStats] = useState(defaultUserStats);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const allStats = await getUserStats(currentUser._id);
      setLoading(false);
      setUserStats(allStats);
    };
    fetchData();
  }, [currentUser, setUserStats, toggler]);

  const initialBalance = currentUser.profile.initialBalance;
  const currentBalance =
    Number(initialBalance) + Number(userStats.sumOfAllTrades);
  const winLossRatio = Number(userStats.winLossRatio);
  const currentPandL =
    (Number(userStats.sumOfAllTrades) / Number(initialBalance)) * 100;
  const averageRiskReward = userStats.averageRiskReward;

  console.log(userStats);

  return (
    <StatsContainer>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <StatCard
            statTitle={"Current P/L"}
            stat={`%${currentPandL}`}
            statDetail={"August 2022"}
          />
          <StatCard
            statTitle={"Current Balance"}
            stat={`$${currentBalance.toLocaleString()}`}
            statDetail={currentUser.profile.brokerName}
          />
          <StatCard
            statTitle={"Win/Loss Ratio"}
            stat={`%${winLossRatio.toFixed(2)}`}
            statDetail={"YTD 2022"}
          />
          <StatCard
            statTitle={"Average Risk/Reward"}
            stat={averageRiskReward}
            statDetail={"All Times"}
          />
        </Fragment>
      )}
    </StatsContainer>
  );
};

export default Stats;
