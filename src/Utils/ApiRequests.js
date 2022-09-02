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
      },
      {
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
      // newUser = response.data.updatedUser;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
};

export const getUserProfileFields = async (userID) => {
  let userProfileFields;

  await axios
    .get(`http://localhost:8000/user/profile/${userID}`, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        userProfileFields = response.data;
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return userProfileFields;
};

export const getUserTrades = async (currentUser) => {
  let userTrades;

  await axios
    .get(`http://localhost:8000/user/trades/${currentUser._id}`, {
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
      console.log(error);
    });

  return userTrades;
};

export const getUserStats = async (id) => {
  let allStats;

  await axios
    .get(`http://localhost:8000/user/stats/${id}`, {
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
      console.log(error);
    });

  return allStats;
};
