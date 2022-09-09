import { createContext, useState, useEffect } from "react";
import { checkAuth } from "../Utils/ApiRequests";

export const UserContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  currentUserID: null,
  setCurrentUserID: () => {},
  checkingAuth: false,
  setCheckingAuth: () => {},
  toggler: false,
  setToggler: () => {},
});

export const UserProvider = ({ children }) => {
  useEffect(() => {
    const initializeAuth = async () => {
      // console.log("inside check auth effect");
      setCheckingAuth(true);
      await checkAuth()
        .then((response) => {
          setCheckingAuth(false);
          setCurrentUserID(response);
          setIsAuthenticated(true);
        })
        .catch((error) => {
          const err = JSON.parse(error.message);
          if (err.status === "401") {
            setCheckingAuth(false);
            setIsAuthenticated(false);
          } else {
            console.log(error);
          }
        });
    };
    initializeAuth();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState();
  const [checkingAuth, setCheckingAuth] = useState();
  const [currentUserID, setCurrentUserID] = useState();
  const [toggler, setToggler] = useState(false);

  // console.log("user provider hit");
  // console.log("this is currentUser", currentUser);

  const value = {
    currentUserID,
    setCurrentUserID,
    checkingAuth,
    setCheckingAuth,
    isAuthenticated,
    setIsAuthenticated,
    toggler,
    setToggler,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
