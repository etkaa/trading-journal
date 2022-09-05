import React, { Fragment, useState } from "react";
import { useContext, useEffect } from "react";
import { TableContainer, StyledTable } from "./Table.styles";
import TableHead from "./TableHead";
import Entry from "../Entry/Entry";
import Spinner from "../Spinner/Spinner";
import { UserContext } from "../../Context/User.Context";
import { getUserTrades } from "../../Utils/ApiRequests";

const Table = () => {
  const { currentUserID, toggler } = useContext(UserContext);
  const [userTrades, setUserTrades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortingOrder, setSortingOrder] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const allTrades = await getUserTrades(currentUserID);
      setLoading(false);
      setUserTrades(allTrades);
    };
    fetchData();
  }, [currentUserID, setUserTrades, toggler]);

  const handleSort = (name, type) => {
    if (type === "string") {
      let newUserTrades;
      if (sortingOrder === true) {
        newUserTrades = userTrades.sort((a, b) =>
          a[name] !== b[name] ? (a[name] < b[name] ? -1 : 1) : 0
        );
      } else {
        newUserTrades = userTrades.sort((a, b) =>
          a[name] !== b[name] ? (a[name] > b[name] ? -1 : 1) : 0
        );
      }
      setUserTrades(newUserTrades);
      setSortingOrder(!sortingOrder);
      return;
    }

    if (name) {
      let newUserTrades;
      if (sortingOrder === true) {
        newUserTrades = userTrades.sort((a, b) => a[name] - b[name]);
      } else {
        newUserTrades = userTrades.sort((a, b) => b[name] - a[name]);
      }
      setUserTrades(newUserTrades);
      setSortingOrder(!sortingOrder);
      return;
    }
  };

  return (
    <TableContainer>
      <StyledTable>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <TableHead sortHandler={handleSort} />
            {userTrades &&
              userTrades.map((entry) => {
                return <Entry key={entry._id} entry={entry} />;
              })}
          </Fragment>
        )}
      </StyledTable>
    </TableContainer>
  );
};

export default Table;
