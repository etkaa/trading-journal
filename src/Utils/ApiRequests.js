import axios from "axios";

export const updateUserTrades = async (id, newTradeFields) => {
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
        //NEED TO ADJUST HERE SO IT DOESN'T CHANGE THE USER
        //EVERYTIME AND NO NEED TO SIGN IN ON EVERY UPDATE
        // setCurrentUser(response.data.user);
        return true;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
