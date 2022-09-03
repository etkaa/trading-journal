import React, { Fragment } from "react";
import { TableCell, StyledNavLink } from "./Entry.styles";

const Entry = ({ entry }) => {
  // const defaultEntryFormFields = {
  //   id: entry._id,
  //   pair: entry.pair,
  //   date: entry.date,
  //   time: entry.time,
  //   open: entry.open,
  //   close: entry.close,
  //   volume: entry.volume,
  //   riskReward: entry.riskReward,
  //   pAndL: entry.pAndL,
  //   outcome: entry.outcome,
  //   details: entry.details,
  // };

  // const [entryFormFields, setEntryFormFields] = useState(
  //   defaultEntryFormFields
  // );

  // const {
  //   id,
  //   pair,
  //   date,
  //   time,
  //   open,
  //   close,
  //   volume,
  //   riskReward,
  //   pAndL,
  //   outcome,
  //   details,
  // } = entryFormFields;

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setEntryFormFields({ ...entryFormFields, [name]: value });
  //   console.log(name, value);
  //   console.log(entryFormFields);
  // };

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
        <TableCell className="details">
          <StyledNavLink to={`/user/trades/${entry._id}`}>🢂</StyledNavLink>
        </TableCell>
      </tr>
    </Fragment>
  );
};

export default Entry;
