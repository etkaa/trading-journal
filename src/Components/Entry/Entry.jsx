import React, { Fragment } from "react";
import { TableCell } from "./Entry.styles";

const Entry = ({ entry }) => {
  return (
    <Fragment>
      <tr>
        <TableCell>{entry.pair}</TableCell>
        <TableCell>{entry.date}</TableCell>
        <TableCell>{entry.time}</TableCell>
        <TableCell>{entry.outcome}</TableCell>
        <TableCell>{entry.riskReward}</TableCell>
        <TableCell>{entry.pAndL}</TableCell>
        <TableCell>🢂</TableCell>
      </tr>
    </Fragment>
  );
};

export default Entry;
