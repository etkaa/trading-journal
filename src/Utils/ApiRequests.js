import axios from "axios";

export const updateUserTrades = async (id, newTradeFields) => {
  let result;

  if (!id && !newTradeFields) {
    console.log(
      "No valid id or tradeFields given, updateUserTrades aborting mission."
    );
    return;
  }

  await axios
    .post(
      `${process.env.REACT_APP_API_URL}/user/update/trades`,
      {
        userID: id,
        newTrade: newTradeFields,
      },
      {
        withCredentials: true,
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        result = true;
      } else {
        result = false;
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        throw Error(
          JSON.stringify({
            status: "401",
            message: "Authentication failed, please try signing in.",
          })
        );
      }
      console.log(error);
    });

  return result;
};

export const patchUserTrade = async (tradeId, updatedTradeFields) => {
  let result;

  if (!updatedTradeFields && !tradeId) {
    console.log(
      "No valid id or tradeFields given, patchUserTrades aborting mission."
    );
    return;
  }

  await axios
    .patch(
      `${process.env.REACT_APP_API_URL}/user/patch/trades/${tradeId}`,
      {
        updatedTrade: updatedTradeFields,
      },
      {
        withCredentials: true,
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        result = true;
      } else {
        result = false;
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        throw Error(
          JSON.stringify({
            status: "401",
            message: "Authentication failed, please try signing in.",
          })
        );
      }
      console.log(error);
    });

  return result;
};

export const getTradeDetails = async (tradeId) => {
  let userTrade;

  if (!tradeId) {
    console.log("No valid id given, getTradeDetails aborting mission.");
    return;
  }

  await axios
    .get(`${process.env.REACT_APP_API_URL}/user/trades/details/${tradeId}`, {
      withCredentials: true,
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        userTrade = response.data.requestedTrade;
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        throw Error(
          JSON.stringify({
            status: "401",
            message: "Authentication failed, please try signing in.",
          })
        );
      }
      console.log(error);
    });

  return userTrade;
};

export const deleteUserTrade = async (tradeId) => {
  let result;

  if (!tradeId) {
    console.log("No valid id given, deleteUserTrade aborting mission.");
    return;
  }

  await axios
    .delete(`${process.env.REACT_APP_API_URL}/user/trade/delete/${tradeId}`, {
      withCredentials: true,
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        result = true;
        console.log("Trade deleted successfully!");
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        throw Error(
          JSON.stringify({
            status: "401",
            message: "Authentication failed, please try signing in.",
          })
        );
      }
      console.log(error);
    });

  return result;
};

export const updateUserProfileFields = async (userID, newFormFields) => {
  let result;

  if (!userID && !newFormFields) {
    console.log(
      "No valid id or formFields given, updateUserPorfileFields aborting mission."
    );
    return;
  }

  await axios
    .post(
      `${process.env.REACT_APP_API_URL}/user/update/profile`,
      {
        userID: userID,
        fullName: newFormFields.fullName,
        email: newFormFields.email,
        initialBalance: newFormFields.initialBalance,
        brokerName: newFormFields.brokerName,
        profileImageUrl: newFormFields.profileImageUrl,
      },
      {
        withCredentials: true,
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        result = true;
        console.log("Update user profile success!");
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        throw Error(
          JSON.stringify({
            status: "401",
            message: "Authentication failed, please try signing in.",
          })
        );
      }
      console.log(error);
    });

  return result;
};

export const getUserProfileFields = async (userID) => {
  let userProfileFields;

  if (!userID) {
    console.log("No valid id given, getUserProfileFields aborting mission.");
    return;
  }

  await axios
    .get(`${process.env.REACT_APP_API_URL}/user/profile/${userID}`, {
      withCredentials: true,
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        userProfileFields = response.data.profileFields;
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        throw Error(
          JSON.stringify({
            status: "401",
            message: "Authentication failed, please try signing in.",
          })
        );
      }
      console.log(error);
    });

  return userProfileFields;
};

export const getUserTrades = async (currentUserID) => {
  let userTrades;

  if (!currentUserID) {
    console.log("No valid id given, getUserTrades aborting mission.");
    return;
  }

  await axios
    .get(`${process.env.REACT_APP_API_URL}/user/trades/${currentUserID}`, {
      withCredentials: true,
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        userTrades = response.data.tradesOfUser;
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        throw Error(
          JSON.stringify({
            status: "401",
            message: "Authentication failed, please try signing in.",
          })
        );
      }
      console.log(error);
    });

  return userTrades;
};

export const getUserStats = async (id) => {
  let allStats;

  if (!id) {
    console.log("No valid id given, getUserStats aborting mission.");
    return;
  }

  await axios
    .get(`${process.env.REACT_APP_API_URL}/user/stats/${id}`, {
      withCredentials: true,
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        allStats = response.data.userStats;
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        throw Error(
          JSON.stringify({
            status: "401",
            message: "Authentication failed, please try signing in.",
          })
        );
      }
      console.log(error);
    });

  return allStats;
};

export const checkAuth = async () => {
  let userID;

  await axios
    .get(`${process.env.REACT_APP_API_URL}/auth/status`, {
      withCredentials: true,
    })
    .then((response) => {
      if (response.status === 200) {
        userID = response.data.user;
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        throw Error(
          JSON.stringify({
            status: "401",
            message: "Authentication failed, please try signing in.",
          })
        );
      }
      console.log(error);
    });

  return userID;
};
