import axios from "axios";

export const updateUserTrades = async (id, newTradeFields) => {
  let result;
  await axios
    .post(
      "http://localhost:8000/user/update/trades",
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

export const updateUserProfileFields = async (userID, newFormFields) => {
  let result;

  await axios
    .post(
      "http://localhost:8000/user/update/profile",
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

  await axios
    .get(`http://localhost:8000/user/profile/${userID}`, {
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

  await axios
    .get(`http://localhost:8000/user/trades/${currentUserID}`, {
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

  await axios
    .get(`http://localhost:8000/user/stats/${id}`, {
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
    .get("http://localhost:8000/auth/status", {
      withCredentials: true,
    })
    .then((response) => {
      // console.log("response from check auth effect", response);
      if (response.status === 200) {
        userID = response.data.user;
      } else {
        userID = null;
      }
    });

  return userID;
};
