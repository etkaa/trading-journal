import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  currentUserID: null,
  setCurrentUserID: () => {},
  toggler: false,
  setToggler: () => {},
});

export const UserProvider = ({ children }) => {
  console.log("context running");

  useEffect(() => {
    const checkLocalStorage = () => {
      const storedUser = JSON.parse(localStorage.getItem("userID"));
      console.log("inside check local storage", storedUser);
      if (storedUser) {
        setCurrentUserID(storedUser);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };
    checkLocalStorage();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState();
  const [currentUserID, setCurrentUserID] = useState();
  const [toggler, setToggler] = useState(false);

  // console.log("user provider hit");
  // console.log("this is currentUser", currentUser);

  const value = {
    currentUserID,
    setCurrentUserID,
    isAuthenticated,
    setIsAuthenticated,
    toggler,
    setToggler,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
