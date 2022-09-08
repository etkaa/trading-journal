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
      const user = await checkAuth();
      setCheckingAuth(false);
      if (user !== null) {
        setCurrentUserID(user);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
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
