import React from "react";
import { TableHeadItem } from "./TableHead.styles";

const TableHead = () => {
  return (
    <tr>
      <TableHeadItem>Pair</TableHeadItem>
      <TableHeadItem>Date</TableHeadItem>
      <TableHeadItem>Time</TableHeadItem>
      <TableHeadItem>Open</TableHeadItem>
      <TableHeadItem>Close</TableHeadItem>
      <TableHeadItem>Volume</TableHeadItem>
      <TableHeadItem>Risk/Reward</TableHeadItem>
      <TableHeadItem>P/L ($)</TableHeadItem>
      <TableHeadItem>Outcome</TableHeadItem>
      <TableHeadItem>Details</TableHeadItem>
    </tr>
  );
};

export default TableHead;
