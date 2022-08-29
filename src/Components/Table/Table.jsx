import React, { Fragment, useState } from "react";
import { useContext, useEffect } from "react";
import { TableContainer, StyledTable } from "./Table.styles";
import TableHead from "./TableHead";
import Entry from "../Entry/Entry";
import Spinner from "../Spinner/Spinner";
import { UserContext } from "../../Context/User.Context";
import { getUserTrades } from "../../Utils/ApiRequests";

const Table = () => {
  const { currentUser } = useContext(UserContext);
  const [userTrades, setUserTrades] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const allTrades = await getUserTrades(currentUser);
      setLoading(false);
      setUserTrades(allTrades);
    };
    fetchData();
  }, [currentUser, setUserTrades]);

  return (
    <TableContainer>
      <StyledTable>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <TableHead />
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
