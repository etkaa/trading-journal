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
    open: 1.09456,
    close: 1.09847,
    volume: 5.69,
    outcome: "Win",
    riskReward: "1/24",
    pAndL: "895",
    details: 1,
  },
  {
    id: 2,
    pair: "USDJPY",
    date: "8/8/2022",
    time: "12:17 am",
    open: 1.09456,
    close: 1.09847,
    volume: 5.69,
    outcome: "Win",
    riskReward: "1/8",
    pAndL: "2210",
    details: 2,
  },
  {
    id: 3,
    pair: "AUDUSD",
    date: "8/8/2022",
    time: "12:17 am",
    open: 1.09456,
    close: 1.09847,
    volume: 5.69,
    outcome: "Loss",
    riskReward: "1/3",
    pAndL: "- 200",
    details: 3,
  },
  {
    id: 4,
    pair: "NZDUSD",
    date: "8/8/2022",
    time: "12:17 am",
    open: 1.09456,
    close: 1.09847,
    volume: 5.69,
    outcome: "Loss",
    riskReward: "1/12",
    pAndL: "- 200",
    details: 4,
  },
  {
    id: 5,
    pair: "GBPUSD",
    date: "8/8/2022",
    time: "12:17 am",
    open: 1.09456,
    close: 1.09847,
    volume: 5.69,
    outcome: "Win",
    riskReward: "1/6",
    pAndL: "450",
    details: 5,
  },
];

const Table = (props) => {
  // const userTrades = props.data;

  return (
    <TableContainer>
      <StyledTable>
        <TableHead />
        {DUMMY_DATA.map((entry) => {
          return <Entry key={entry.id} entry={entry} />;
        })}
      </StyledTable>
    </TableContainer>
  );
};

export default Table;
