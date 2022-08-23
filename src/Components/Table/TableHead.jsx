import React from "react";
import { TableHeadItem } from "./TableHead.styles";

const TableHead = () => {
  return (
    <tr>
      <TableHeadItem>Pair</TableHeadItem>
      <TableHeadItem>Date</TableHeadItem>
      <TableHeadItem>Time</TableHeadItem>
      <TableHeadItem>Outcome</TableHeadItem>
      <TableHeadItem>Risk/Reward</TableHeadItem>
      <TableHeadItem>P/L ($)</TableHeadItem>
      <TableHeadItem>Details</TableHeadItem>
    </tr>
  );
};

export default TableHead;
