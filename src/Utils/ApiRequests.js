import axios from "axios";

export const updateUserTrades = async (id, newTradeFields) => {
  let newUserWithNewTrades;
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
      newUserWithNewTrades = response.data.updatedUser;
    })
    .catch((error) => {
      console.log(error);
    });

  return newUserWithNewTrades;
};

export const updateUserProfileFields = async (currentUser, newFormFields) => {
  let newUser;

  await axios
    .post(
      "http://localhost:8000/user/update/profile",
      {
        userID: currentUser._id,
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
      newUser = response.data.updatedUser;
    })
    .catch((error) => {
      console.log(error);
    });

  return newUser;
};

export const getUserTrades = async (currentUser) => {
  let userTrades;

  await axios
    .get(
      "http://localhost:8000/user/getalltrades",
      {
        userID: currentUser._id,
        userTrades: [currentUser.userTrades],
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
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
