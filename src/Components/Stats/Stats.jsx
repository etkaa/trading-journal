import React, { useState, useEffect, useContext, Fragment } from "react";
import { UserContext } from "../../Context/User.Context";
import { StatsContainer } from "./Stats.styles";
import StatCard from "../StatCard/StatCard";
import { getUserStats, getUserProfileFields } from "../../Utils/ApiRequests";
import Spinner from "../Spinner/Spinner";

const defaultUserStats = {
  currentPandL: "0",
  currentBalance: "0",
  winLossRatio: "0",
  averageRiskReward: "0",
  totalTradeCount: "0",
  totalVolume: "0",
};

const defaultUserProfileFields = {
  initialBalance: "0",
  brokerName: "0",
};

const Stats = () => {
  const { currentUserID, toggler } = useContext(UserContext);
  const [userStats, setUserStats] = useState(defaultUserStats);
  const [userProfileFields, setUserProfileFields] = useState(
    defaultUserProfileFields
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchStatsData = async () => {
      const allStats = await getUserStats(currentUserID);
      setLoading(false);
      setUserStats(allStats);
    };
    const fetchProfileData = async () => {
      const allProfileFields = await getUserProfileFields(currentUserID);
      setLoading(false);
      setUserProfileFields(allProfileFields);
    };
    fetchProfileData();
    fetchStatsData();
  }, [currentUserID, setUserStats, setUserProfileFields, toggler]);

  const initialBalance = Number(userProfileFields.initialBalance);
  const currentBalance =
    Number(initialBalance) + Number(userStats.sumOfAllTrades);
  const winLossRatio = Number(userStats.winLossRatio);
  const currentPandL =
    (Number(userStats.sumOfAllTrades) / Number(initialBalance)) * 100;
  const averageRiskReward = Number(userStats.averageRiskReward);

  // console.log("USE EFFECT RUNS TOO MANY TIMES", userStats);

  return (
    <StatsContainer>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <StatCard
            statTitle={"Current P/L"}
            stat={`%${currentPandL.toFixed(2)}`}
            statDetail={`+ $${Number(
              userStats.sumOfAllTrades
            ).toLocaleString()}`}
          />
          <StatCard
            statTitle={"Balance"}
            stat={`$${currentBalance.toLocaleString()}`}
            statDetail={userProfileFields.brokerName}
          />
          <StatCard
            statTitle={"Win/Loss Ratio"}
            stat={`%${winLossRatio.toFixed(2)}`}
            statDetail={"YTD 2022"}
          />
          <StatCard
            statTitle={"Risk/Reward"}
            stat={`${averageRiskReward.toFixed(2)}`}
            statDetail={"Average"}
          />
          <StatCard
            statTitle={"Average Return"}
            stat={`$${(
              userStats.sumOfAllTrades / userStats.totalTradeCount
            ).toLocaleString()}`}
            statDetail={"YTD 2022"}
          />
          <StatCard
            statTitle={"Total Volume"}
            stat={`${Number(userStats.totalVolume).toFixed(2)}`}
            statDetail={"All Times"}
          />
          <StatCard
            statTitle={"Average Volume"}
            stat={`${Number(
              userStats.totalVolume / userStats.totalTradeCount
            ).toFixed(2)}`}
            statDetail={"All Times"}
          />
          <StatCard
            statTitle={"Total Trades"}
            stat={`${userStats.totalTradeCount}`}
            statDetail={"All Times"}
          />
        </Fragment>
      )}
    </StatsContainer>
  );
};

export default Stats;
