import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  toggler: false,
  setToggler: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [toggler, setToggler] = useState(false);

  // console.log("user provider hit");
  // console.log("this is currentUser", currentUser);

  useEffect(() => {
    const userSession = JSON.parse(localStorage.getItem("userSession")) || null;

    if (userSession) {
      setCurrentUser(userSession);
    }

    console.log("getting item from localstorage", userSession);
  }, []);

  useEffect(() => {
    console.log("setting item to localstorage", currentUser);
    if (!!currentUser) {
      localStorage.setItem("userSession", JSON.stringify(currentUser) || null);
    } else {
      localStorage.removeItem("userSession");
    }
  }, [currentUser]);

  const value = {
    currentUser,
    setCurrentUser,
    toggler,
    setToggler,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
