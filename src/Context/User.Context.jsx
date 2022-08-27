// import axios from "axios";
import axios from "axios";
import { createContext, useState, useEffect } from "react";
// import { isAuthenticated } from "../Utils/GetAuth";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  updateUserProfileFields: () => {},
  // updateUserTrades: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const updateUserProfileFields = async (newFormFields) => {
    await axios
      .post(
        "http://localhost:8000/user/update/profile",
        {
          userID: currentUser._id,
          fullName: newFormFields.firstName + " " + newFormFields.lastName,
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
          setCurrentUser(response.data.user);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const updateUserTrades = async (newTradeFields) => {
  //   await axios
  //     .post(
  //       "http://localhost:8000/user/update/trades",
  //       {
  //         userID: currentUser._id,
  //         newTrade: newTradeFields,
  //       },
  //       {
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       if (response.status === 200) {
  //         //NEED TO ADJUST HERE SO IT DOESN'T CHANGE THE USER
  //         //EVERYTIME AND NO NEED TO SIGN IN ON EVERY UPDATE
  //         // setCurrentUser(response.data.user);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // console.log("user provider hit");
  // console.log("this is currentUser", currentUser);

  useEffect(() => {
    // console.log("getting item from localstorage");
    const userSession = JSON.parse(localStorage.getItem("userSession"));

    if (userSession) {
      setCurrentUser(userSession);
    }
  }, []);

  useEffect(() => {
    // console.log("setting item to localstorage", currentUser);
    localStorage.setItem("userSession", JSON.stringify(currentUser));
  }, [currentUser]);

  // useEffect(() => {
  //   const getAuth = async () => {
  //     await isAuthenticated((currentUser) => {
  //       console.log("user provider effect fired");
  //       console.log("this is currentUser after effect", currentUser);
  //       setCurrentUser(currentUser);
  //     });
  //   };
  //   getAuth();
  // }, [currentUser]);

  const value = {
    currentUser,
    setCurrentUser,
    updateUserProfileFields,
    // updateUserTrades,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
