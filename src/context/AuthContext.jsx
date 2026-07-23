import { createContext, useContext, useState } from "react";
import * as auth from "../services/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(auth.isAuthenticated());

  const loginUser = () => {
    auth.login();
    setLoggedIn(true);
  };

  const logoutUser = () => {
    auth.logout();
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);