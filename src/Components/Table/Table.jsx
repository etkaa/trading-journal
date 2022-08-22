import React from "react";
import {
  TableContainer,
  StyledTable,
  TableHead,
  TableCell,
} from "./Table.styles";

const Table = () => {
  return (
    <TableContainer>
      <StyledTable>
        <tr>
          <TableHead>Pair</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Outcome</TableHead>
          <TableHead>Risk/Reward</TableHead>
          <TableHead>P/L ($)</TableHead>
          <TableHead>Details</TableHead>
        </tr>
        <tr>
          <TableCell>EURUSD</TableCell>
          <TableCell>10/22/2022</TableCell>
          <TableCell>10:15 EST</TableCell>
          <TableCell>Win</TableCell>
          <TableCell>1/4</TableCell>
          <TableCell>+300</TableCell>
          <TableCell>🢂</TableCell>
        </tr>
        <tr>
          <TableCell>GBPUSD</TableCell>
          <TableCell>10/23/2022</TableCell>
          <TableCell>10:52 EST</TableCell>
          <TableCell>Loss</TableCell>
          <TableCell>1/5</TableCell>
          <TableCell>-75</TableCell>
          <TableCell>🢂</TableCell>
        </tr>
        <tr>
          <TableCell>NZDUSD</TableCell>
          <TableCell>10/22/2022</TableCell>
          <TableCell>10:15 EST</TableCell>
          <TableCell>Win</TableCell>
          <TableCell>1/4</TableCell>
          <TableCell>300</TableCell>
          <TableCell>🢂</TableCell>
        </tr>
        <tr>
          <TableCell>EURUSD</TableCell>
          <TableCell>10/22/2022</TableCell>
          <TableCell>10:15 EST</TableCell>
          <TableCell>Win</TableCell>
          <TableCell>1/4</TableCell>
          <TableCell>300</TableCell>
          <TableCell>🢂</TableCell>
        </tr>
        <tr>
          <TableCell>AUDUSD</TableCell>
          <TableCell>10/22/2022</TableCell>
          <TableCell>10:15 EST</TableCell>
          <TableCell>Win</TableCell>
          <TableCell>1/4</TableCell>
          <TableCell>300</TableCell>
          <TableCell>🢂</TableCell>
        </tr>
        <tr>
          <TableCell>EURUSD</TableCell>
          <TableCell>10/22/2022</TableCell>
          <TableCell>10:15 EST</TableCell>
          <TableCell>Win</TableCell>
          <TableCell>1/4</TableCell>
          <TableCell>300</TableCell>
          <TableCell>🢂</TableCell>
        </tr>
      </StyledTable>
    </TableContainer>
  );
};

export default Table;
