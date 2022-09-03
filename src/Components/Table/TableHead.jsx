import React, { useState } from "react";
import { TableHeadItem } from "./TableHead.styles";

const TableHead = ({ sortHandler }) => {
  const [selectedColumn, setSelectedColumn] = useState("");

  const handleClick = (name, type, event) => {
    const columnName = event.target.id;
    setSelectedColumn(columnName);
    console.log();
    sortHandler(name, type);
  };

  return (
    <tr>
      <TableHeadItem
        id="pair"
        className={selectedColumn === "pair" ? "selected" : ""}
        onClick={(event) => {
          handleClick("pair", "string", event);
        }}
      >
        Pair
      </TableHeadItem>
      <TableHeadItem
        id="date"
        className={selectedColumn === "date" ? "selected" : ""}
        onClick={(event) => {
          handleClick("date", "string", event);
        }}
      >
        Date
      </TableHeadItem>
      <TableHeadItem
        id="time"
        className={selectedColumn === "time" ? "selected" : ""}
        onClick={(event) => {
          handleClick("time", "string", event);
        }}
      >
        Time
      </TableHeadItem>
      <TableHeadItem
        id="open"
        className={selectedColumn === "open" ? "selected" : ""}
        onClick={(event) => {
          handleClick("open", "number", event);
        }}
      >
        Open
      </TableHeadItem>
      <TableHeadItem
        id="close"
        className={selectedColumn === "close" ? "selected" : ""}
        onClick={(event) => {
          handleClick("close", "number", event);
        }}
      >
        Close
      </TableHeadItem>
      <TableHeadItem
        id="volume"
        className={selectedColumn === "volume" ? "selected" : ""}
        onClick={(event) => {
          handleClick("volume", "number", event);
        }}
      >
        Volume
      </TableHeadItem>
      <TableHeadItem
        id="riskReward"
        className={selectedColumn === "riskReward" ? "selected" : ""}
        onClick={(event) => {
          handleClick("riskReward", "number", event);
        }}
      >
        Risk/Reward
      </TableHeadItem>
      <TableHeadItem
        id="pAndL"
        className={selectedColumn === "pAndL" ? "selected" : ""}
        onClick={(event) => {
          handleClick("pAndL", "number", event);
        }}
      >
        P/L ($)
      </TableHeadItem>
      <TableHeadItem
        id="outcome"
        className={selectedColumn === "outcome" ? "selected" : ""}
        onClick={(event) => {
          handleClick("outcome", "string", event);
        }}
      >
        Outcome
      </TableHeadItem>
      <TableHeadItem>Details</TableHeadItem>
    </tr>
  );
};

export default TableHead;
