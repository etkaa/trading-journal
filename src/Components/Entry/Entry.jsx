import React, { Fragment } from "react";
import { TableCell } from "./Entry.styles";

const Entry = ({ entry }) => {
  return (
    <Fragment>
      <tr>
        <TableCell>{entry.pair.toUpperCase()}</TableCell>
        <TableCell>{entry.date}</TableCell>
        <TableCell>{entry.time}</TableCell>
        <TableCell>{entry.open}</TableCell>
        <TableCell>{entry.close}</TableCell>
        <TableCell>{entry.volume}</TableCell>
        <TableCell>{entry.riskReward}</TableCell>
        <TableCell>{Number(entry.pAndL).toLocaleString()}</TableCell>
        <TableCell>{entry.outcome}</TableCell>
        <TableCell>🢂</TableCell>
      </tr>
    </Fragment>
  );
};

export default Entry;
