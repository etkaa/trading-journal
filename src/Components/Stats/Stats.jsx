import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Context/User.Context";
import { StatsContainer } from "./Stats.styles";
import StatCard from "../StatCard/StatCard";
import { getUserStats } from "../../Utils/ApiRequests";
import Spinner from "../Spinner/Spinner";

const defaultUserStats = {
  currentPandL: "",
  currentBalance: "",
  winLossRatio: "",
  averageRiskReward: "",
};

const Stats = () => {
  const { currentUser, toggler } = useContext(UserContext);
  const [userStats, setUserStats] = useState(defaultUserStats);
  const [loading, setLoading] = useState(false);

  const initialBalance = currentUser.profile.initialBalance;
  const currentBalance =
    Number(initialBalance) + Number(userStats.sumOfAllTrades);
  const winLossRatio = Number(userStats.winLossRatio);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const allStats = await getUserStats(currentUser._id);
      setLoading(false);
      setUserStats(allStats);
    };
    fetchData();
  }, [currentUser, setUserStats, toggler]);

  console.log(userStats);

  return (
    <StatsContainer>
      <StatCard
        statTitle={"Current P/L"}
        stat={"+ %6"}
        statDetail={"August 2022"}
      />
      {!loading ? (
        <StatCard
          statTitle={"Current Balance"}
          stat={`$${currentBalance.toLocaleString()}`}
          statDetail={currentUser.profile.brokerName}
        />
      ) : (
        <Spinner />
      )}

      <StatCard
        statTitle={"Win/Loss Ratio"}
        stat={`%${winLossRatio.toFixed(2)}`}
        statDetail={"YTD 2022"}
      />
      <StatCard
        statTitle={"Average Risk/Reward"}
        stat={"1 / 3.76"}
        statDetail={"All Times"}
      />
    </StatsContainer>
  );
};

export default Stats;
