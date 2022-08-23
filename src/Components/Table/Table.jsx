import React from "react";
import { TableContainer, StyledTable } from "./Table.styles";
import TableHead from "./TableHead";

import Entry from "../Entry/Entry";

const DUMMY_DATA = [
  {
    id: 1,
    pair: "EURUSD",
    date: "8/8/2022",
    time: "12:17 am",
    outcome: "Win",
    riskReward: "1/4",
    pAndL: "200",
    details: 1,
  },
  {
    id: 2,
    pair: "USDJPY",
    date: "8/8/2022",
    time: "12:17 am",
    outcome: "Win",
    riskReward: "1/4",
    pAndL: "200",
    details: 2,
  },
  {
    id: 3,
    pair: "AUDUSD",
    date: "8/8/2022",
    time: "12:17 am",
    outcome: "Win",
    riskReward: "1/4",
    pAndL: "200",
    details: 3,
  },
  {
    id: 4,
    pair: "NZDUSD",
    date: "8/8/2022",
    time: "12:17 am",
    outcome: "Win",
    riskReward: "1/4",
    pAndL: "200",
    details: 4,
  },
  {
    id: 5,
    pair: "GBPUSD",
    date: "8/8/2022",
    time: "12:17 am",
    outcome: "Win",
    riskReward: "1/4",
    pAndL: "200",
    details: 5,
  },
];

const Table = () => {
  return (
    <TableContainer>
      <StyledTable>
        <TableHead />
        {DUMMY_DATA.map((entry) => {
          return <Entry entry={entry} />;
        })}
      </StyledTable>
    </TableContainer>
  );
};

export default Table;
