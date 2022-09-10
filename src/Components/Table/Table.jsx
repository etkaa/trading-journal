import React, { Fragment, useState } from "react";
import { useContext, useEffect } from "react";
import { TableContainer, StyledTable } from "./Table.styles";
import TableHead from "./TableHead";
import Entry from "../Entry/Entry";
import Spinner from "../Spinner/Spinner";
import { UserContext } from "../../Context/User.Context";
import { getUserTrades } from "../../Utils/ApiRequests";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const { currentUserID, toggler, setIsAuthenticated } =
    useContext(UserContext);
  const [userTrades, setUserTrades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortingOrder, setSortingOrder] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await getUserTrades(currentUserID)
        .then((response) => {
          setLoading(false);
          setUserTrades(response);
        })
        .catch((error) => {
          const err = JSON.parse(error.message);
          if (err.status === "401") {
            setIsAuthenticated(false);
            navigate("/signin");
          }
          console.log(error);
        });
    };
    fetchData();
  }, [currentUserID, setUserTrades, toggler, navigate, setIsAuthenticated]);

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
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <TableContainer>
          <StyledTable>
            <TableHead sortHandler={handleSort} />
            {userTrades &&
              userTrades.map((entry) => {
                return <Entry key={entry._id} entry={entry} />;
              })}
          </StyledTable>
        </TableContainer>
      )}
    </Fragment>
  );
};

export default Table;
